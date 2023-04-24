import apiCall from "..";
import { Pagination } from "../globalType";
import * as Model from "./requester.model";

class Api {
  getRequester(params?: Record<string, string | number>) {
    return apiCall<Pagination<Model.RequesterData>>({
      method: "GET",
      url: `/requester`,
      params,
    });
  }
}

const requesterApi = new Api();
export default requesterApi;
