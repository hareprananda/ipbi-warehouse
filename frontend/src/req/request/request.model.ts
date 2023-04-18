export type AllGoods = {
  uuid: string;
  name: string;
  unit: string;
}[];

export type DailyEvent = {
  uuid: string;
  name: string;
  takeDate: string;
  returnDate: string;
  type: string;
  status: string;
  assignBy: string;
  goods: {
    name: string;
    quantity: string;
    unit: string;
  }[];
}[];

export type PendingRequest = {
  uuid: string;
  type: string;
  status: string;
  createdAt: string;
  takeDate: string;
  returnDate: null | string;
  name: string;
}[];
