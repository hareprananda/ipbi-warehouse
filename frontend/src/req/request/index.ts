import apiCall from "..";
import * as Model from "./request.model";

class Api {
  allGoods() {
    return apiCall<Model.AllGoods>({
      method: "GET",
      url: "/goods/all",
    });
  }
}

const goodsApi = new Api();
export default goodsApi;
