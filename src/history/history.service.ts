import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistoryDto } from './dto';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async createHistory({ idGoods, quantity, assignBy, idRequest }: HistoryDto) {
    const history = await this.prisma.goodsHistory.create({
      data: {
        quantity,
        idGoods,
        assignBy,
        idRequest,
      },
    });
    return history;
  }
}
