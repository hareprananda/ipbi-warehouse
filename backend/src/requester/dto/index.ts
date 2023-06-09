import { IsNumberString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequesterDto {
  @IsNumberString()
  phoneNumber: string;

  @IsNotEmpty()
  name: string;

  @IsString()
  department: string;
}

export class GetRequesterDto {
  @IsNumberString()
  @IsOptional()
  limit?: number;

  @IsNumberString()
  @IsOptional()
  page?: number;

  @IsNumberString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  name?: string;
}
