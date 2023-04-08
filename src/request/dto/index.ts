import { Goods, Request, RequestType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsArray, IsString, IsDateString, ValidateNested, IsOptional } from 'class-validator';
import { RequesterDto } from 'src/requester/dto';

class GoodType {
  @IsString()
  id: Goods['uuid'];
  @IsNumber()
  amount: Goods['stock'];
}

export class RequestDto extends RequesterDto {
  @IsEnum(RequestType)
  requestType: RequestType;

  @IsDateString()
  pickUpDate: string;

  @IsDateString()
  @IsOptional()
  returnDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoodType)
  goods: GoodType[];
}

export class MonthlyDto {
  @IsDateString()
  month: string;
}

export type RequestPerMonth = {
  date: string;
  numberOfEvent: bigint;
};

export type EventMonth = {
  uuid: string;
  name: string;
  takeDate: string;
  returnDate: string;
  type: Request['type'];
  status: Request['status'];
  goods: {
    name: string;
    quantity: number;
    unit: string;
  }[];
};
