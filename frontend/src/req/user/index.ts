import apiCall from "..";
import * as Model from "./user.model";

class Api {
  allManager() {
    return apiCall<Model.UserData[]>({
      method: "GET",
      url: "/user/all-manager",
    });
  }

  updateProfile(data: Record<string, string>) {
    return apiCall<Model.UpdateResponse>({
      method: "PATCH",
      url: `/profile`,
      data,
    });
  }

  adminContact() {
    return apiCall<{ phone: string }>({
      method: "GET",
      url: `/contact`,
    });
  }
}

const userApi = new Api();
export default userApi;
