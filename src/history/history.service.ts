import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistoryDto } from './dto';
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
}
