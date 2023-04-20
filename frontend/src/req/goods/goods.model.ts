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

export type GetGoodsRes = Pagination<GoodsData>;
