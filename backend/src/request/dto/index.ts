import { Goods, Request, RequestStatus, RequestType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsArray,
  IsString,
  IsDateString,
  ValidateNested,
  IsOptional,
  IsNumberString,
  IsUUID,
} from 'class-validator';
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

  @IsString()
  department: string;
}

export class MonthlyDto {
  @IsDateString()
  month: string;
}

export class DailyDto {
  @IsDateString()
  date: string;
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

export class RequestQuery {
  @IsDateString()
  @IsOptional()
  takeDate?: string;

  @IsDateString()
  @IsOptional()
  returnDate?: string;

  @IsUUID()
  @IsOptional()
  assignBy?: string;

  @IsString()
  @IsOptional()
  requestBy?: string;

  @IsUUID()
  @IsOptional()
  requestById?: string;

  @IsEnum(RequestStatus)
  @IsOptional()
  status?: Request['status'];

  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  limit?: string;
}

export class DetailParam {
  @IsUUID()
  id: string;
}

export interface RequestDetail {
  uuid: string;
  takeDate: string;
  returnDate: string;
  type: Request['type'];
  assignee: string;
  status: Request['status'];
  goods: {
    name: string;
    quantity: number;
  }[];
}

export class ChangeStatusDto {
  @IsEnum(RequestStatus)
  status: RequestStatus;
}

export type RequesterItem = {
  uuid: string;
  name: string;
  numberOfRequest: number;
  phone: string;
  lastCreated: string;
  lastReqUuid: string;
};

export class DateParam {
  @IsDateString()
  date: string;
}
