import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommonService {
  constructor(private prisma: PrismaService) {}

  async generatePageMetadata(
    prismaPromise: Prisma.PrismaPromise<[{ totalRow: bigint }]>,
    { limit, page }: { limit: number; page: number },
  ) {
    const dataTotal = await prismaPromise;
    return {
      totalPage: Math.ceil(parseInt(dataTotal[0]['totalRow'] as unknown as string) / limit),
      currentPage: page,
    };
  }
}
