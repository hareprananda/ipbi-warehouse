import config from "@/config";
import axios, { AxiosError } from "axios";
import { Response } from "./index.d";
import { AppDispatch, RootState } from "@/redux/reducerprovider";
import action from "@/redux/reduceraction";

interface Props {
  url: string;
  method: "PUT" | "POST" | "PATCH" | "GET" | "DELETE";
  data?: Record<string, number | string>;
  params?: Record<string, number | string>;
}

const apiCall = <T>(props: Props) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    return axios<Response<T>>({
      baseURL: config.API,
      headers: {
        "Content-Type": "application/json",
      },
      ...props,
    })
      .then((res) => {
        if (res.data.statusCode === 401) dispatch(action.auth.reset());
        return res.data;
      })
      .catch((err: AxiosError) => {
        return { error: true, message: [err.message], statusCode: 500, data: undefined };
      });
  };
};

export default apiCall;
