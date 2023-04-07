import { Injectable } from '@nestjs/common';
import { HttpReturn } from 'src/helper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAdminContact() {
    try {
      const data = await this.prisma
        .$queryRaw`select u.phone  from "ActiveContact" ac join "Users" u on ac."userId" = u.id  limit 1;`;
      return HttpReturn(data[0], 200);
    } catch {
      return HttpReturn('Server error', 500);
    }
  }
}
