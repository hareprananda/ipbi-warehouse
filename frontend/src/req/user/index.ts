import apiCall from "..";
import * as Model from "./user.model";

class Api {
  allManager() {
    return apiCall<Model.UserData[]>({
      method: "GET",
      url: "/user/all-manager",
    });
  }
}

const userApi = new Api();
export default userApi;
