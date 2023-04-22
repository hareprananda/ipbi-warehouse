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

  goodsHistory(id: string, params?: Record<string, any>) {
    return apiCall<Model.GetGoodsHistoryRes>({
      method: "GET",
      url: `/goods/${id}/history`,
      params,
    });
  }

  updateGoods(id: string, data: { name?: string; stock?: number; unitName?: string }) {
    return apiCall({
      method: "PATCH",
      url: `/goods/${id}`,
      data,
    });
  }

  addGoods(data: { name: string; stock: number; unitName: string }) {
    return apiCall({
      method: "POST",
      url: `/goods`,
      data,
    });
  }

  deleteGoods(uuid: string) {
    return apiCall({
      method: "DELETE",
      url: `/goods/${uuid}`,
    });
  }
}

const goodsApi = new Api();
export default goodsApi;
