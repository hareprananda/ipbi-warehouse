import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { RequestDto } from './dto';
import { HistoryService } from 'src/history/history.service';
import { RequesterService } from 'src/requester/requester.service';
import { RequesterDto } from 'src/requester/dto';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService, private history: HistoryService, private requester: RequesterService) {}

  async addRequest({ pickUpDate, requestType, goods, returnDate, name, phoneNumber }: RequestDto & RequesterDto) {
    const pickupTime = new Date(pickUpDate).getTime();
    if (pickupTime < new Date().getTime()) return new HttpException('Take date should be at least today', 400);

    if (requestType === 'BORROW' && (!returnDate || new Date(returnDate).getTime() < pickupTime)) {
      return new HttpException('Please specify the return date correctly', HttpStatus.BAD_REQUEST);
    }
    if (requestType === 'TAKE') returnDate = undefined;

    const goodsExists = await this.prisma.goods.findMany({
      where: {
        OR: goods.map((v) => ({ id: v.id })),
      },
    });
    if (goodsExists.length < goods.length) return new HttpException('Wrong goods specified', HttpStatus.BAD_REQUEST);

    const requester = await this.requester.addOrUpdate({
      name,
      phoneNumber,
    });

    const request = await this.prisma.request.create({
      data: {
        id: randomUUID(),
        takeDate: new Date(pickUpDate),
        returnDate: returnDate ? new Date(returnDate) : undefined,
        type: requestType,
        idRequester: requester.id,
      },
    });

    for (const good of goods) {
      await this.history.createHistory({
        idGoods: good.id,
        quantity: good.amount,
        idRequest: request.id,
      });
    }
    return { message: 'OK' };
  }
}
