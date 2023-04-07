import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistoryDto } from './dto';
import { randomUUID } from 'crypto';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async createHistory({ idGoods, quantity, assignBy, idRequest }: HistoryDto) {
    const history = await this.prisma.goodsHistory.create({
      data: {
        uuid: randomUUID(),
        quantity,
        idGoods,
        assignBy,
        idRequest,
      },
    });
    return history;
  }
}
