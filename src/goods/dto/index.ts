import { IsString, IsNumber } from 'class-validator';

export class GoodsPayload {
  @IsString()
  name: string;
  @IsNumber()
  stock: number;
  @IsString()
  unitName: string;
}
