import { Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoodsHistory, HistoryDto } from './dto';
import { randomUUID } from 'crypto';
import { PrismaTrxService } from 'src/prisma/dto';
import { HttpReturn } from 'src/helper';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async createHistory({ idGoods, quantity, assignBy, idRequest }: HistoryDto, tx?: PrismaTrxService) {
    const ctx = tx ? tx : this.prisma;
    try {
      const history = await ctx.goodsHistory.create({
        data: {
          uuid: randomUUID(),
          quantity,
          idGoods,
          assignBy,
          idRequest,
        },
      });
      return HttpReturn(history, 200);
    } catch {
      return HttpReturn('Something wrong', 500);
    }
  }

  async getByGoods(uuid: string, { limit, page }: { limit: number; page: number }) {
    try {
      const dataTotal: [{ totalRow: bigint }] = await this.prisma.$queryRaw`
        select count(*) as "totalRow" from 
          "GoodsHistory" gh 
          join "Goods" g  on gh."idGoods" = g.id 
          left join "Request" r on r.id = gh."idRequest"
        where (r.status = 'APPROVE' OR r.status isnull) and g.uuid = ${uuid}
      `;
      const metadata = {
        totalPage: Math.ceil(parseInt(dataTotal[0]['totalRow'] as unknown as string) / limit),
        currentPage: page,
      };
      const data: GoodsHistory[] = await this.prisma.$queryRaw`
      select 
        gh.uuid,
        gh.quantity as "change",
        u."name" assignBy,
        case when 
          r.id isnull then null 
          else json_object(
            ARRAY[
             'id', r.uuid,
             'requestBy', r2."name",
             'type', r."type",
             'status', r.status,
             'takeDate', r."takeDate",
             'returnDate', r."returnDate"
            ]::TEXT[]
          ) end  req
      from 
        "GoodsHistory" gh 
        join "Goods" g  on gh."idGoods" = g.id 
        left join "Request" r on r.id = gh."idRequest" 
        left join "Users" u on u.id = gh."assignBy" 
        left join "Requester" r2  on r."idRequester" = r2.id 
      where (r.status = 'APPROVE' OR r.status isnull) and g.uuid = ${uuid}
      order by gh."createdAt" desc
      limit ${limit} offset ${(page - 1) * limit}
    `;
      return HttpReturn({ data, metadata }, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
