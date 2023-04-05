import { UserLevel } from '@prisma/client';

export class SignInDTO {
  phoneNumber: string;
  password: string;
}

export type JWTPayload = {
  name: string;
  phoneNumber: string;
  level: UserLevel;
};
