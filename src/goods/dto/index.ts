import { IsString, IsNumber, IsOptional, IsUUID, IsNumberString, Min } from 'class-validator';

export class GoodsPayload {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  unitName: string;
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

  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  limit?: string;
}
