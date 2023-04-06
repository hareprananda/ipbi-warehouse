import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequesterDto } from './dto';
import { randomUUID } from 'crypto';

@Injectable()
export class RequesterService {
  constructor(private prisma: PrismaService) {}

  async addOrUpdate({ name, phoneNumber }: RequesterDto) {
    const requester = await this.prisma.requester.upsert({
      create: {
        name,
        id: randomUUID(),
        phone: phoneNumber,
      },
      update: {
        name,
      },
      where: {
        phone: phoneNumber,
      },
    });
    return requester;
  }
}
