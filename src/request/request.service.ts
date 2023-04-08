import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { EventMonth, RequestDto, RequestPerMonth } from './dto';
import { HistoryService } from 'src/history/history.service';
import { RequesterService } from 'src/requester/requester.service';
import { RequesterDto } from 'src/requester/dto';
import { HttpReturn } from 'src/helper';
import dayjs from 'dayjs';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService, private history: HistoryService, private requester: RequesterService) {}

  async addRequest({ pickUpDate, requestType, goods, returnDate, name, phoneNumber }: RequestDto & RequesterDto) {
    const pickupTime = new Date(pickUpDate).getTime();
    if (pickupTime < new Date().getTime()) return HttpReturn('Take date should be at least today', 400);

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

    const requester = await this.requester.addOrUpdate({
      name,
      phoneNumber,
    });

    const request = await this.prisma.request.create({
      data: {
        uuid: randomUUID(),
        takeDate: new Date(pickUpDate),
        returnDate: returnDate ? new Date(returnDate) : undefined,
        type: requestType,
        idRequester: requester.id,
      },
    });

    for (const good of goodsExists) {
      await this.history.createHistory({
        idGoods: good.id,
        quantity: goodsObj[good.uuid].amount,
        idRequest: request.id,
      });
    }
    return HttpReturn('Ok', 200);
  }

  async requestNumberByMonth(month: number, year: number) {
    try {
      const byTakeDate: RequestPerMonth[] = await this.prisma.$queryRaw`
      select r."takeDate" as "date", count(r."type") as "numberOfEvent"  from "Request" r
      where status='APPROVE' and extract(month from r."takeDate")=${month} and extract(year from r."takeDate") = ${year}
      group by r."takeDate";`;

      const byReturnDate: RequestPerMonth[] = await this.prisma.$queryRaw`
      select r."returnDate" as "date", count(r."type") as "numberOfEvent"  from "Request" r
      where status='APPROVE' and extract(month from r."returnDate")=${month} and extract(year from r."returnDate") = ${year}
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
    } catch (err) {
      console.log(err);
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async eventWithinMonth(month: number, year: number) {
    try {
      const eventInMonth: EventMonth[] = await this.prisma.$queryRaw`
        select 
          r.uuid,
          r2."name",
          r."takeDate",
          r."returnDate",
          r."type",
          r.status,
          array_agg(json_object(ARRAY['name', g."name", 'quantity', gh.quantity, 'unit',g.unit]::TEXT[])) goods from 
        "Request" r join "Requester" r2 on r."idRequester" = r2.id join "GoodsHistory" gh ON gh."idRequest" = r.id join "Goods" g on g.id = gh."idGoods" where 
        (
          (extract(month from r."takeDate") = ${month} and extract(year from r."takeDate") = ${year}) or
          (extract(month from r."returnDate") = ${month} and extract(year from r."returnDate") = ${year})
        ) and 
        r."status" = 'APPROVE' group by
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
}
