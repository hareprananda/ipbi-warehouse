import apiCall from "..";
import * as Model from "./goods.model";

class Api {
  recentGoods() {
    return apiCall<Model.RecentChange>({
      method: "GET",
      url: "/goods/recent-change",
    });
  }
}

const goodsApi = new Api();
export default goodsApi;
