import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAdminContact() {
    const data = await this.prisma
      .$queryRaw`select u.phone  from "ActiveContact" ac join "Users" u on ac."userId" = u.id  limit 1;`;
    return data[0];
  }
}
