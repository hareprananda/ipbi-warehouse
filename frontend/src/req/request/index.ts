import apiCall from "..";
import { Pagination } from "../globalType";
import * as Model from "./request.model";

class Api {
  allGoods(type: string) {
    return apiCall<Model.AllGoods>({
      method: "GET",
      url: "/goods/all",
      params: {
        type,
      },
    });
  }

  eventMonth(month: string) {
    return apiCall<Record<string, string>>({
      method: "GET",
      url: "/request/monthly",
      params: {
        month,
      },
    });
  }

  eventDaily(date: string) {
    return apiCall<Model.DailyEvent>({
      method: "GET",
      url: "/request/event/daily",
      params: { date },
    });
  }

  getPending() {
    return apiCall<Model.PendingRequest>({
      method: "GET",
      url: "/request/pending",
    });
  }

  getRequest(params: Model.RequestFilter) {
    return apiCall<Pagination<Model.RequestData>>({
      method: "GET",
      url: "/request",
      params,
    });
  }

  requestDetail(id: string) {
    return apiCall<Model.RequestDetail>({
      method: "GET",
      url: `/request/detail/${id}`,
    });
  }

  changeStatus(id: string, status: Model.RequestStatus) {
    return apiCall({
      method: "PATCH",
      url: `/request/${id}`,
      data: {
        status,
      },
    });
  }

  createRequest(data: Model.RequestPayload) {
    if (data.returnDate === "" || data.requestType === "TAKE") delete data["returnDate"];
    return apiCall({
      method: "POST",
      url: `/request`,
      data,
    });
  }
}

const requestApi = new Api();
export default requestApi;
