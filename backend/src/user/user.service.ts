import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPayload, ChangeUserData, UserItem } from './dto';
import { randomUUID } from 'crypto';
import { hash, compareSync } from 'bcrypt';
import { HttpReturn } from 'src/helper';
import { PrismaTrxService } from 'src/prisma/dto';
import { CommonService } from 'src/common/common.service';
import { UserLevel } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private common: CommonService) {}

  private async hashPassword(char: string) {
    return await hash(char, 10);
  }

  async add({ name, phoneNumber }: AddPayload) {
    try {
      const newData = await this.prisma.users.create({
        data: {
          uuid: randomUUID(),
          name,
          phone: phoneNumber,
          password: await this.hashPassword(phoneNumber),
        },
        select: {
          uuid: true,
          name: true,
          level: true,
          phone: true,
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
    const user = await this.findByUUID(uuid);
    if (!user.data) return user;
    try {
      await this.prisma.activeContact.upsert({
        create: {
          userId: user.data.id,
        },
        update: {
          userId: user.data.id,
        },
        where: {
          id: 1,
        },
      });
      return HttpReturn('Success', HttpStatus.OK);
    } catch {
      return HttpReturn('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByUUID(uuid: string, tx?: PrismaTrxService) {
    const ctx = tx ? tx : this.prisma;
    const user = await ctx.users.findUnique({
      where: {
        uuid,
      },
    });
    if (!user) return HttpReturn('Wrong specified user', HttpStatus.BAD_REQUEST);
    return HttpReturn(user, HttpStatus.OK);
  }

  async getUser({ limit, page }: { limit: number; page: number }, currentUUID: string) {
    try {
      const metadata = await this.common.generatePageMetadata(
        this.prisma.$queryRaw`
         select count(*) as "totalRow"  from "Users" where active = true and uuid != ${currentUUID} and name != 'root'
      `,
        { limit, page },
      );

      const data: UserItem[] = await this.prisma.$queryRaw`
        select u.uuid, u."name" , u."createdAt" , u."level", u.phone, case when ac.id isnull then false else true end "isContact"
        from "Users" u 
        left join "ActiveContact" ac on ac."userId" = u.id
        where active = true
        and uuid != ${currentUUID}
        and name != 'root'
        order by u."name" asc
        limit ${limit}  offset ${(page - 1) * limit}
      `;
      return HttpReturn({ data, metadata }, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changeUser(uuid: string, data: ChangeUserData) {
    try {
      const { currentPassword, password, ...newData } = data;
      if (currentPassword) {
        const currentData = await this.findByUUID(uuid);
        if (!currentData.data) throw 'err';
        if (!compareSync(currentPassword, currentData.data.password))
          return HttpReturn('Current Password not Match', HttpStatus.BAD_REQUEST);
      }

      const changedTo = await this.prisma.users.update({
        where: {
          uuid,
        },
        data: {
          ...newData,
          password: password ? await this.hashPassword(password) : undefined,
        },
        select: {
          uuid: true,
          level: true,
          name: true,
          phone: true,
        },
      });
      return HttpReturn(changedTo, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllManager() {
    try {
      const data = await this.prisma.users.findMany({
        orderBy: {
          name: 'asc',
        },
        select: {
          name: true,
          uuid: true,
        },
        where: {
          active: true,
        },
      });

      return HttpReturn(data, HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changeLevel(uuid: string, level: UserLevel) {
    try {
      await this.prisma.users.update({
        where: {
          uuid,
        },
        data: {
          level,
        },
      });
      return HttpReturn('Success', HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async resetPassword(id: string) {
    try {
      const select = await this.prisma.users.findUnique({
        where: {
          uuid: id,
        },
      });

      await this.prisma.users.update({
        where: {
          uuid: id,
        },
        data: {
          password: await this.hashPassword(select.phone),
        },
      });
      return HttpReturn('Success', HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteManager(id: string) {
    try {
      const select: { id: string }[] = await this.prisma.$queryRaw`
        select u.id from "Users" u join "GoodsHistory" gh on u.id = gh."assignBy" where u.uuid = ${id} limit 1
      `;
      if (select.length > 0) {
        await this.prisma.users.update({
          where: {
            uuid: id,
          },
          data: {
            active: false,
          },
        });
      } else {
        await this.prisma.users.delete({
          where: {
            uuid: id,
          },
        });
      }
      return HttpReturn('Success', HttpStatus.OK);
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
