import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequesterDto } from './dto';
import { randomUUID } from 'crypto';
import { CommonService } from 'src/common/common.service';
import { HttpReturn } from 'src/helper';
import { HttpStatus } from '@nestjs/common/enums';
import { RequesterItem } from 'src/request/dto';
import { PrismaTrxService } from 'src/prisma/dto';

@Injectable()
export class RequesterService {
  constructor(private prisma: PrismaService, private common: CommonService) {}

  async addOrUpdate({ name, phoneNumber }: RequesterDto, tx?: PrismaTrxService) {
    const ctx = tx || this.prisma;
    try {
      const requester = await ctx.requester.upsert({
        create: {
          name,
          uuid: randomUUID(),
          phone: phoneNumber,
          numberRequest: 1,
        },
        update: {
          name,
          numberRequest: {
            increment: 1,
          },
        },
        where: {
          phone: phoneNumber,
        },
      });
      return HttpReturn(requester, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private filterGenerator = (key: 'phoneNumber' | 'name', param: string) => {
    const filter: Record<'phoneNumber' | 'name', (q: string) => string> = {
      phoneNumber: (phone: string) => `r.phone = '${phone.replace(/['"]/g, '')}'`,
      name: (name: string) => `LOWER(r."name") like '%${name.replace(/['"]/g, '').toLowerCase()}%'`,
    };
    return filter[key](param);
  };

  async getRequester(
    filter: { phoneNumber?: string; name?: string },
    { limit, page }: { limit: number; page: number },
  ) {
    const filterArr: string[] = [];
    for (const filterKey in filter) {
      filterArr.push(this.filterGenerator(filterKey as any, filter[filterKey]));
    }
    const filterString = filterArr.length > 0 ? `where ${filterArr.join(' and ')}` : ``;

    try {
      const metadata = await this.common.generatePageMetadata(
        this.prisma.$queryRawUnsafe(`
        select count(*) as "totalRow"  from "Requester" r 
        join (select r2."idRequester", max(r2."createdAt"::TIMESTAMP) "last"  from "Request" r2 group by r2."idRequester") latest on latest."idRequester" = r.id 
        join "Request" r3 on r3."idRequester" = r.id and r3."createdAt" = latest."last"
        ${filterString}
      `),
        { limit, page },
      );

      const data: RequesterItem[] = await this.prisma.$queryRawUnsafe(`
        select r.uuid, r."name", r."numberRequest" , r.phone, r3."createdAt" "lastCreated", r3.uuid "lastReqUuid"  from "Requester" r 
        join (select r2."idRequester", max(r2."createdAt"::TIMESTAMP) "last"  from "Request" r2 group by r2."idRequester") latest on latest."idRequester" = r.id 
        join "Request" r3 on r3."idRequester" = r.id and r3."createdAt" = latest."last"
        ${filterString}
        limit ${limit} offset ${(page - 1) * limit}
      `);
      return HttpReturn({ data, metadata }, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
