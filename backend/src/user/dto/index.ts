import { UserLevel } from '@prisma/client';
import { IsNumberString, IsOptional } from 'class-validator';

export type AddPayload = {
  name: string;
  phoneNumber: string;
};

export type UserItem = {
  uuid: string;
  name: string;
  phone: string;
  level: UserLevel;
  createdAt: string;
};

export class UserQuery {
  @IsNumberString()
  @IsOptional()
  limit?: string;

  @IsNumberString()
  @IsOptional()
  page?: string;
}

export interface ChangeUserData {
  level?: UserLevel;
  password?: string;
  currentPassword?: string;
  name?: string;
  phone?: string;
}
