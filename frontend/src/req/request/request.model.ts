export type RequestStatus = "PENDING" | "APPROVE" | "REJECT" | "FINISH" | "ONGOING";

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

export type RequestFilter = {
  takeDate?: string;
  returnDate?: string;
  requestBy?: string;
  limit?: number;
  page?: number;
  status?: string;
  assignBy?: string;
};

export type RequestData = {
  uuid: string;
  status: string;
  takeDate: string;
  type: string;
  returnDate: string;
  requestby: string;
  assignby: string;
  createdAt: string;
};

export type RequestDetail = {
  uuid: string;
  requesterName: string;
  requesterPhone: string;
  takeDate: string;
  returnDate: string;
  type: string;
  assignee: string;
  status: string;
  goods: {
    name: string;
    quantity: string;
  }[];
};
