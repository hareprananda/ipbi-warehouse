import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeUserData } from 'src/user/dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService, private user: UserService) {}
  async changeProfile(uuid: string, data: ChangeUserData) {
    const changedData = await this.user.changeUser(uuid, data);
    return changedData;
  }
}
