import { Pagination } from "../globalType";

export type RecentChange = {
  uuid: string;
  name: string;
  unit: string;
  stock: number;
}[];

export type GoodsData = {
  uuid: string;
  unit: string;
  name: string;
  stock: number;
};

export type GoodsHistory = {
  uuid: string;
  change: number;
  assignby: string;
  updatedAt: string;
  req?: {
    id: string;
    requestBy: string;
    type: string;
    status: string;
    takeDate: string;
    returnDate: string;
  };
};

export type GetGoodsRes = Pagination<GoodsData>;

export type GetGoodsHistoryRes = Pagination<GoodsHistory>;
