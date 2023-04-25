import apiCall from "..";
import { Pagination } from "../globalType";
import * as Model from "./manager.model";

class Api {
  recentGoods(params: Record<string, any>) {
    return apiCall<Pagination<Model.Manager>>({
      method: "GET",
      url: "/user",
      params,
    });
  }

  setContact(id: string) {
    return apiCall({
      method: "PATCH",
      url: `/user/${id}/active`,
    });
  }

  addManager(data: { name: string; phoneNumber: string }) {
    return apiCall({
      method: "POST",
      url: `/user`,
      data,
    });
  }

  changeLevel(id: string, level: "APPROVER" | "ADMIN") {
    return apiCall({
      method: "PATCH",
      url: `/user/${id}/level`,
      data: { level },
    });
  }

  resetPassword(id: string) {
    return apiCall({
      method: "POST",
      url: `/user/${id}/reset`,
    });
  }

  deleteManager(id: string) {
    return apiCall({
      method: "DELETE",
      url: `/user/${id}`,
    });
  }
}

const managerApi = new Api();
export default managerApi;
