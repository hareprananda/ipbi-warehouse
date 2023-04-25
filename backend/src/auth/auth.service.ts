import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SignInDTO } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { HttpReturn } from 'src/helper';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async login({ phoneNumber, password }: SignInDTO) {
    const user = await this.prisma.users.findUnique({
      where: {
        phone: phoneNumber.toString(),
      },
    });
    if (!user || !(await compare(password, user.password)))
      return HttpReturn('Wrong phone number or password', HttpStatus.BAD_REQUEST);

    const returnedData = {
      name: user.name,
      uuid: user.uuid,
      phoneNumber: user.phone,
      level: user.level,
    };
    returnedData['accessToken'] = await this.jwt.signAsync(returnedData);
    return HttpReturn(returnedData, 200);
  }

  async resetPassword(id) {
    return HttpReturn('berhasil', HttpStatus.OK);
  }
}
