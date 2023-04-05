import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPayload } from './dto';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async add({ name, phoneNumber }: AddPayload) {
    try {
      const newData = await this.prisma.users.create({
        data: {
          id: randomUUID(),
          name,
          phone: phoneNumber,
          password: await hash(phoneNumber, 10),
        },
      });
      return newData;
    } catch (err) {
      if (err?.constructor?.name === 'PrismaClientKnownRequestError') {
        return new HttpException({ phoneNumber: 'PhoneNumber Taken' }, 400);
      }
      return new HttpException('Something went wrong', 500);
    }
  }

  async setContactActive(id: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!user) return new HttpException('Wrong specified user', 500);
    try {
      await this.prisma.activeContact.upsert({
        create: {
          userId: id,
        },
        update: {
          userId: id,
        },
        where: {
          id: 1,
        },
      });
      return {
        response: 'OK',
        status: 200,
        message: 'OK',
        name: 'Success',
      };
    } catch {
      return new HttpException('Something went wrong', 500);
    }
  }
}
