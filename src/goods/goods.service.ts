import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoodsPayload } from './dto';
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
      return HttpReturn('Seomthing wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addGoods(assignByUUID: string, data: GoodsPayload) {
    const assignBy = await this.user.findByUUID(assignByUUID);
    if (!assignBy.data) return assignBy;

    try {
      await this.prisma.$transaction(async (tx) => {
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
      });
      return HttpReturn('Success', 200);
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
}
