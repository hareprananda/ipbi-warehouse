import apiCall from "..";
import * as Model from "./goods.model";

class Api {
  recentGoods() {
    return apiCall<Model.RecentChange>({
      method: "GET",
      url: "/goods/recent-change",
    });
  }

  getGoods(params?: Record<string, string | number>) {
    return apiCall<Model.GetGoodsRes>({
      method: "GET",
      url: "/goods/",
      params,
    });
  }
}

const goodsApi = new Api();
export default goodsApi;
