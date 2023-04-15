import apiCall from "..";
import * as Model from "./auth.model";

class Api {
  login(data: { phoneNumber: string; password: string }) {
    return apiCall<Model.LoginResponse>({
      method: "POST",
      url: "/auth/login",
      data,
    });
  }
}

const authApi = new Api();
export default authApi;
