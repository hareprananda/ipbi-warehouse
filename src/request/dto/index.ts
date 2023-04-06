import { Goods, RequestType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsArray, IsString, IsDateString, ValidateNested, IsOptional } from 'class-validator';
import { RequesterDto } from 'src/requester/dto';

class GoodType {
  @IsString()
  id: Goods['id'];
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
