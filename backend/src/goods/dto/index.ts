import { IsString, IsNumber, IsOptional, IsUUID, IsNumberString, Min, IsEnum, IsBoolean } from 'class-validator';

export class GoodsPayload {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  unitName: string;

  @IsBoolean()
  isBorrowable: boolean;

  @IsBoolean()
  isTakeable: boolean;
}

export class History {
  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  limit?: string;
}

export class UUIDParam {
  @IsUUID()
  id: string;
}

export class GoodsQuery {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  isBorrowable?: boolean;

  @IsBoolean()
  @IsOptional()
  isTakeable?: boolean;

  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  limit?: string;
}

export class GoodsQueryFilter {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  isBorrowable?: string;

  @IsString()
  @IsOptional()
  isTakeable?: string;

  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  limit?: string;
}

export enum GoodsTypeEnum {
  BORROW = 'BORROW',
  TAKE = 'TAKE',
}

export class GoodsType {
  @IsEnum(GoodsTypeEnum)
  type: GoodsTypeEnum;
}
