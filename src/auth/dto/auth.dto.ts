import { UserLevel } from '@prisma/client';
import { IsNumberString, IsNotEmpty } from 'class-validator';

export class SignInDTO {
  @IsNumberString()
  phoneNumber: string;

  @IsNotEmpty()
  password: string;
}

export type JWTPayload = {
  name: string;
  phoneNumber: string;
  level: UserLevel;
};
