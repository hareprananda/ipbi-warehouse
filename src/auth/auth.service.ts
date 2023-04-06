import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SignInDTO } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
      return new HttpException(
        'Wrong phone number or password',
        HttpStatus.BAD_REQUEST,
      );

    const returnedData = {
      name: user.name,
      phoneNumber: user.phone,
      level: user.level,
    };
    returnedData['accessToken'] = await this.jwt.signAsync(returnedData);
    return returnedData;
  }

  async test() {
    return await this.prisma.users.findFirst({
      where: {
        NOT: {
          name: 'qqqq',
        },
      },
    });
  }
}
