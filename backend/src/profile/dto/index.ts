import { UserLevel } from '@prisma/client';
import { IsEnum, IsOptional, IsNotEmpty, ValidateIf, IsString, IsNumberString } from 'class-validator';

export class ChangeProfilePayload {
  @ValidateIf((o) => !!o.currentPassword)
  @IsNotEmpty()
  password?: string;

  @ValidateIf((o) => !!o.password)
  @IsNotEmpty()
  currentPassword?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumberString()
  @IsOptional()
  phone?: string;
}
