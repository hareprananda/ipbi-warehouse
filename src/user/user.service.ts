import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPayload } from './dto';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';
import { HttpReturn } from 'src/helper';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async add({ name, phoneNumber }: AddPayload) {
    try {
      const newData = await this.prisma.users.create({
        data: {
          uuid: randomUUID(),
          name,
          phone: phoneNumber,
          password: await hash(phoneNumber, 10),
        },
      });
      return HttpReturn(newData, 200);
    } catch (err) {
      if (err?.constructor?.name === 'PrismaClientKnownRequestError') {
        return HttpReturn('Phonenumber Taken', 400);
      }
      return HttpReturn('Something went wrong', 400);
    }
  }

  async setContactActive(uuid: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        uuid,
      },
    });
    if (!user) return HttpReturn('Wrong specified user', 400);
    try {
      await this.prisma.activeContact.upsert({
        create: {
          userId: user.id,
        },
        update: {
          userId: user.id,
        },
        where: {
          id: 1,
        },
      });
      return HttpReturn('Success', 200);
    } catch {
      return HttpReturn('Something went wrong', 500);
    }
  }
}
