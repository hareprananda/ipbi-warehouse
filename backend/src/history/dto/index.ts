import { Goods, Request, Users } from '@prisma/client';

export class HistoryDto {
  idGoods: Goods['id'];
  idRequest?: Request['id'];
  quantity: number;
  assignBy?: Users['id'];
}

export class GoodsHistory {
  uuid: string;
  change: number;
  assignBy?: string;
  request?: {
    id: string;
    requestBy: string;
    type: Request['type'];
    status: Request['status'];
    takeDate: string;
    returnDate: string;
  };
}
