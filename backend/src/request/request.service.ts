import { Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { EventMonth, RequestDetail, RequestDto, RequestPerMonth, RequestQuery } from './dto';
import { HistoryService } from 'src/history/history.service';
import { RequesterService } from 'src/requester/requester.service';
import { RequesterDto } from 'src/requester/dto';
import { HttpReturn } from 'src/helper';
import dayjs from 'dayjs';
import { RequestStatus, RequestType } from '@prisma/client';
import { CommonService } from 'src/common/common.service';
import { GoodsService } from 'src/goods/goods.service';
import { UserService } from 'src/user/user.service';

type FilterKey = keyof Omit<RequestQuery, 'limit' | 'page'>;

const changeStatusScope: Record<RequestStatus, Set<RequestStatus>> = {
  PENDING: new Set([RequestStatus.APPROVE, RequestStatus.REJECT]),
  APPROVE: new Set([RequestStatus.ONGOING, RequestStatus.FINISH]),
  ONGOING: new Set([RequestStatus.FINISH]),
  REJECT: new Set(),
  FINISH: new Set(),
};

@Injectable()
export class RequestService {
  constructor(
    private prisma: PrismaService,
    private history: HistoryService,
    private requester: RequesterService,
    private common: CommonService,
    private goods: GoodsService,
    private user: UserService,
  ) {}

  async addRequest({ pickUpDate, requestType, goods, returnDate, name, phoneNumber }: RequestDto & RequesterDto) {
    const pickupTime = new Date(pickUpDate).getTime();
    const todaysDate = dayjs().format('YYYY-MM-DD');
    if (pickupTime < new Date(todaysDate).getTime()) return HttpReturn('Take date should be at least today', 400);

    if (requestType === 'BORROW' && (!returnDate || new Date(returnDate).getTime() < pickupTime)) {
      return HttpReturn('Please specify the return date correctly', HttpStatus.BAD_REQUEST);
    }
    if (requestType === 'TAKE') returnDate = undefined;

    const goodsExists = await this.prisma.goods.findMany({
      where: {
        OR: goods.map((v) => ({ uuid: v.id })),
      },
    });
    if (goodsExists.length < goods.length) return HttpReturn('Wrong goods specified', HttpStatus.BAD_REQUEST);
    const goodsObj = goods.reduce((acc, v) => {
      acc[v.id] = v;
      return acc;
    }, {} as Record<string, (typeof goods)[number]>);

    try {
      const request = await this.prisma.$transaction(async (tx) => {
        const requester = await this.requester.addOrUpdate(
          {
            name,
            phoneNumber,
          },
          tx,
        );
        if (!requester.data) throw 'err';
        const newreq = await tx.request.create({
          data: {
            uuid: randomUUID(),
            takeDate: new Date(pickUpDate),
            returnDate: returnDate ? new Date(returnDate) : undefined,
            type: requestType,
            idRequester: requester.data.id,
          },
          select: {
            uuid: true,
            id: true,
            status: true,
            returnDate: true,
            takeDate: true,
            type: true,
          },
        });

        for (const good of goodsExists) {
          const history = await this.history.createHistory(
            {
              idGoods: good.id,
              quantity: -goodsObj[good.uuid].amount,
              idRequest: newreq.id,
            },
            tx,
          );
          if (!history.data) throw 'err';
        }
        return newreq;
      });
      delete request.id;
      return HttpReturn(request, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async requestByUUID(uuid: string) {
    try {
      const data = await this.prisma.request.findUnique({
        where: {
          uuid,
        },
      });
      return HttpReturn(data, HttpStatus.OK);
    } catch {
      return HttpReturn('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async requestNumberByMonth(month: number, year: number) {
    try {
      const byTakeDate: RequestPerMonth[] = await this.prisma.$queryRaw`
      select r."takeDate" as "date", count(r."type") as "numberOfEvent"  from "Request" r
      where status in ('APPROVE','ONGOING') and extract(month from r."takeDate")=${month} and extract(year from r."takeDate") = ${year}
      group by r."takeDate";`;

      const byReturnDate: RequestPerMonth[] = await this.prisma.$queryRaw`
      select r."returnDate" as "date", count(r."type") as "numberOfEvent"  from "Request" r
      where status in ('APPROVE','ONGOING') and extract(month from r."returnDate")=${month} and extract(year from r."returnDate") = ${year}
      group by r."returnDate";`;

      const eventByDateObj = byReturnDate.reduce((acc, v) => {
        const date = dayjs(v.date).format('YYYY-MM-DD');
        acc[date] = v.numberOfEvent.toString();
        return acc;
      }, {} as Record<string, string>);

      for (const inTakeDate of byTakeDate) {
        const date = dayjs(inTakeDate.date).format('YYYY-MM-DD');
        if (eventByDateObj[date]) {
          eventByDateObj[date] = (BigInt(eventByDateObj[date]) + inTakeDate.numberOfEvent).toString();
        } else eventByDateObj[date] = inTakeDate.numberOfEvent.toString();
      }

      return HttpReturn(eventByDateObj, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async requestDaily(dateString: string) {
    try {
      const eventInMonth: EventMonth[] = await this.prisma.$queryRaw`
        select 
          r.uuid,
          r2."name",
          r."takeDate",
          r."returnDate",
          r."type",
          r.status,
          MAX(u."name"::TEXT) "assignBy",
          array_agg(json_object(ARRAY['name', g."name", 'quantity', gh.quantity, 'unit',g.unit]::TEXT[])) goods from 
        "Request" r join "Requester" r2 on r."idRequester" = r2.id 
        join "GoodsHistory" gh ON gh."idRequest" = r.id 
        join "Goods" g on g.id = gh."idGoods" 
        join "Users" u on u.id = gh."assignBy"
        where 
        (
          r."takeDate"::date = ${dateString}::date or
          r."returnDate"::date = ${dateString}::date
        ) and 
        r."status" in ('APPROVE','ONGOING') group by
        r.id, r2.id
      `;
      return HttpReturn(eventInMonth, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPending(limit: number) {
    try {
      const data = await this.prisma.$queryRaw`
        select r.uuid, r."type", r.status, r."createdAt", r."takeDate", r."returnDate", r2."name" from 
        "Request" r join "Requester" r2 on r."idRequester" = r2.id where
        status = 'PENDING' and "takeDate" > now()  order by 
        "takeDate" asc, r."createdAt" desc 
        limit ${limit}
      `;
      return HttpReturn(data, HttpStatus.OK);
    } catch {
      return HttpReturn('Something Wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private filterGenerator = (key: FilterKey, param: string) => {
    const filter: Record<FilterKey, (q: string) => string> = {
      takeDate: (takeDate: string) => `r."takeDate" = '${takeDate}'`,
      returnDate: (returnDate: string) => `r."returnDate" = '${returnDate}'`,
      assignBy: (uuid: string) => `u.uuid = '${uuid}'`,
      requestBy: (name: string) => `LOWER(r2."name") like ${"'%" + name.replace(/['"]/g, '').toLowerCase() + "%'"}`,
      status: (status: string) => `r."status" = '${status}'`,
    };
    return filter[key](param);
  };

  async getRequest(filter: RequestQuery, { limit, page }: { limit: number; page: number }) {
    const filterArr: string[] = [];
    for (const filterKey in filter) {
      filterArr.push(this.filterGenerator(filterKey as FilterKey, filter[filterKey]));
    }
    let filterString = filterArr.join(` and `);
    if (filterArr.length > 0) filterString = `where ${filterString}`;
    try {
      const metadata = await this.common.generatePageMetadata(
        this.prisma.$queryRawUnsafe(`
        select count(*) as "totalRow"  from 
        "Request" r join "Requester" r2 on r."idRequester" = r2.id join "GoodsHistory" gh on gh."idRequest" = r.id left join "Users" u on u.id = gh."assignBy"
        ${filterString}
      `),
        { limit, page },
      );

      const data = await this.prisma.$queryRawUnsafe(`
      select r.uuid, r.status, r."takeDate", r."type", r."returnDate", r2."name" requestBy, MAX(u."name"::TEXT) assignBy, r."createdAt"  from 
      "Request" r join "Requester" r2 on r."idRequester" = r2.id join 
      "GoodsHistory" gh on gh."idRequest" = r.id left join 
      "Users" u on u.id = gh."assignBy"
      ${filterString}
      group by r.id, r2.id
      order by r."createdAt" desc
      limit ${limit} offset ${(page - 1) * limit}
    `);
      return HttpReturn({ data, metadata }, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async requestDetail(uuid: string) {
    try {
      const data: RequestDetail[] = await this.prisma.$queryRaw`
      select 
        r.uuid,
        r2."name" "requesterName",
        r2.phone "requesterPhone",
        r."takeDate",
        r."returnDate",
        r."type",
        max(u."name"::TEXT)  as assignee,
        r.status,
        array_agg(json_object(ARRAY['name', g."name", 'quantity', gh.quantity]::TEXT[])) goods
      from "Request" r join 
        "Requester" r2 on r."idRequester" = r2.id join
        "GoodsHistory" gh on r.id = gh."idRequest" join 
        "Goods" g on gh."idGoods" = g.id left join 
        "Users" u on gh."assignBy" = u.id
      where r.uuid = ${uuid}
      group by r.id, r2.id
      `;
      return HttpReturn(data[0], HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private changeAbleStatus(current: RequestStatus, changeTo: RequestStatus, type: RequestType) {
    if (
      (changeTo === RequestStatus.ONGOING && type === 'TAKE') ||
      (changeTo === RequestStatus.FINISH && current === RequestStatus.APPROVE && type === 'BORROW')
    )
      return false;
    return changeStatusScope[current].has(changeTo);
  }

  async changeStatus(uuid: string, status: RequestStatus, assigneeId: string) {
    try {
      const currentRequest = await this.requestByUUID(uuid);
      if (!currentRequest.data) return currentRequest;

      const assignee = await this.user.findByUUID(assigneeId);
      if (!assignee.data) return assignee;

      if (!this.changeAbleStatus(currentRequest.data.status, status, currentRequest.data.type))
        return HttpReturn("Can't change status", HttpStatus.BAD_REQUEST);

      // return HttpReturn('Masuk ke sini', 200);

      const updating = await this.prisma.$transaction(async (tx) => {
        const updatedReq = await tx.request.update({
          where: {
            uuid,
          },
          data: {
            status,
          },
          select: {
            goodsHistory: {
              select: {
                id: true,
                idGoods: true,
                goods: true,
                quantity: true,
              },
            },
          },
        });

        for (const goods of updatedReq.goodsHistory) {
          const updateHistory = await this.history.updateHistory(
            parseInt(goods.id.toString()),
            {
              assignBy: assignee.data.id,
            },
            tx,
          );

          if (!updateHistory.data) throw updateHistory.message[0];

          if (RequestStatus['FINISH'] === status && currentRequest.data.type === 'BORROW') {
            const returnHistory = await this.history.createHistory(
              {
                idGoods: goods.idGoods,
                quantity: Math.abs(goods.quantity),
                assignBy: assignee.data.id,
                idRequest: currentRequest.data.id,
              },
              tx,
            );
            if (!returnHistory.data) throw returnHistory.message[0];

            const updateGoods = await this.goods.changeGoodsStock(
              parseInt(goods.idGoods.toString()),
              Math.abs(goods.quantity),
              tx,
            );

            if (!updateGoods.data) throw updateGoods.message[0];
          } else if ([RequestStatus.FINISH, RequestStatus.ONGOING].includes(status as any)) {
            if (goods.quantity + goods.goods.stock < 0) throw `${goods.goods.name} stock aren't enough`;
            const updateGoods = await this.goods.changeGoodsStock(
              parseInt(goods.idGoods.toString()),
              goods.quantity,
              tx,
            );

            if (!updateGoods.data) throw updateGoods.message[0];
          }
        }
      });
      return HttpReturn('Success', HttpStatus.OK);
    } catch (err) {
      return HttpReturn(
        typeof err === 'string' ? err : 'Something wrong',
        typeof err !== 'string' ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.BAD_REQUEST,
      );
    }
  }
}
