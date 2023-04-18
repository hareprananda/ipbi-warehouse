import apiCall from "..";
import * as Model from "./request.model";

class Api {
  allGoods() {
    return apiCall<Model.AllGoods>({
      method: "GET",
      url: "/goods/all",
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
}

const requestApi = new Api();
export default requestApi;
