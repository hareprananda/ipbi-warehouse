import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoodsPayload, GoodsTypeEnum } from './dto';
import { randomUUID } from 'crypto';
import { UserService } from 'src/user/user.service';
import { HistoryService } from 'src/history/history.service';
import { HttpReturn } from 'src/helper';
import { PrismaTrxService } from 'src/prisma/dto';

@Injectable()
export class GoodsService {
  private displayedCol = {
    uuid: true,
    name: true,
    unit: true,
    stock: true,
  };

  constructor(private prisma: PrismaService, private user: UserService, private history: HistoryService) {}

  async createGoods(data: GoodsPayload, tx?: PrismaTrxService) {
    const ctx = tx ? tx : this.prisma;
    try {
      const goods = await ctx.goods.create({
        data: {
          name: data.name,
          unit: data.unitName,
          uuid: randomUUID(),
          stock: data.stock,
        },
      });
      return HttpReturn(goods, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addGoods(assignByUUID: string, data: GoodsPayload) {
    const assignBy = await this.user.findByUUID(assignByUUID);
    if (!assignBy.data) return assignBy;

    try {
      const newGoods = await this.prisma.$transaction(async (tx) => {
        const goods = await this.createGoods(data, tx);
        if (!goods.data) throw 'err';
        const history = await this.history.createHistory(
          {
            idGoods: goods.data.id,
            quantity: goods.data.stock,
            assignBy: assignBy.data.id,
          },
          tx,
        );
        if (!history.data) throw new Error('error');
        return goods.data;
      });
      return HttpReturn(newGoods, 200);
    } catch {
      return HttpReturn('Something Wrong', 500);
    }
  }

  async getRecentChange(numberOfGoods: number) {
    try {
      const goods = await this.prisma.goods.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        take: numberOfGoods,
        select: this.displayedCol,
      });
      return HttpReturn(goods, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getGoods(name: string, { limit, page }: { limit: number; page: number }) {
    const nameFilter = '%' + name.toLowerCase() + '%';

    const dataTotal: [{ totalRow: bigint }] = await this.prisma.$queryRaw`
      select count(*) as "totalRow" from "Goods" where LOWER( "name"  ) like ${nameFilter}
    `;
    const metadata = {
      totalPage: Math.ceil(parseInt(dataTotal[0]['totalRow'] as unknown as string) / limit),
      currentPage: page,
    };

    const data = await this.prisma.$queryRaw`
    select uuid, unit, name, stock from "Goods" where
    LOWER("name") like ${nameFilter} 
    order by "updatedAt" desc
    limit ${limit} offset ${(page - 1) * limit}
    `;
    return HttpReturn({ data, metadata }, HttpStatus.OK);
  }

  async updateGoods(assignByUuid: string, uuid: string, data: GoodsPayload) {
    const assignBy = await this.user.findByUUID(assignByUuid);
    if (!assignBy.data) return assignBy;
    try {
      const currentData = await this.prisma.goods.findUnique({ where: { uuid } });
      const updatingGoods = await this.prisma.$transaction(async (tx) => {
        const newData = await tx.goods.update({
          where: {
            uuid,
          },
          data: {
            name: data.name,
            stock: data.stock,
            unit: data.unitName,
          },
        });
        if (!newData.id) throw 'err';
        const diff = newData.stock - currentData.stock;
        if (diff !== 0) {
          const historyData = await this.history.createHistory(
            {
              idGoods: newData.id,
              quantity: diff,
              assignBy: assignBy.data.id,
            },
            tx,
          );
          if (!historyData.data) throw 'err';
        }
        return newData;
      });
      return HttpReturn(updatingGoods, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changeGoodsStock(id: number, changeStock: number, tx?: PrismaTrxService) {
    const ctx = tx ? tx : this.prisma;
    const stock = {
      decrement: Math.abs(changeStock),
      increment: changeStock,
    };
    delete stock[changeStock < 0 ? 'increment' : 'decrement'];
    try {
      await ctx.goods.update({
        where: {
          id,
        },
        data: {
          stock,
        },
      });
      return HttpReturn('Ok', HttpStatus.OK);
    } catch (err) {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllGoods(type: GoodsTypeEnum) {
    try {
      const data = await this.prisma.goods.findMany({
        orderBy: {
          name: 'asc',
        },
        select: {
          uuid: true,
          name: true,
          unit: true,
        },
        where: {
          isBorrowable: type === GoodsTypeEnum.BORROW,
          isTakeable: type === GoodsTypeEnum.TAKE,
        },
      });

      return HttpReturn(data, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteGoods(uuid: string) {
    try {
      const data: { goodsId: number; historyId: number; idRequest: number }[] = await this.prisma.$queryRaw`
        select g.id as "goodsId", gh.id as "historyId"  from "Goods" g 
        join "GoodsHistory" gh on g.id = gh."idGoods" 
        left join "Request" r on r.id = gh."idRequest" 
        where r.status in ('APPROVE', 'ONGOING', 'FINISH') and g.uuid = ${uuid}
      `;
      if (data.length > 0) return HttpReturn('You cannot delete this goods', HttpStatus.BAD_REQUEST);

      const requestIDs: { id: bigint }[] = await this.prisma.$queryRaw`
        select r.id  from "Goods" g 
        join "GoodsHistory" gh on g.id = gh."idGoods" 
        left join "Request" r on r.id = gh."idRequest" 
        where r.status in ('PENDING', 'REJECT') and g.uuid = ${uuid}
      `;

      await this.prisma.$transaction(async (tx) => {
        const goods = await tx.goods.delete({
          where: {
            uuid,
          },
          select: {
            name: true,
          },
        });

        await tx.request.deleteMany({
          where: {
            id: {
              in: requestIDs.reduce((acc, v) => {
                if (v) acc.push(v.id);
                return acc;
              }, []),
            },
          },
        });
        return goods;
      });
      return HttpReturn(`Delete Success`, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
