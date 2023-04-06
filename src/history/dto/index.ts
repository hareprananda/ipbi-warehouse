import { Goods, Request, Users } from '@prisma/client';

export class HistoryDto {
  idGoods: Goods['id'];
  idRequest?: Request['id'];
  quantity: number;
  assignBy?: Users['id'];
}
