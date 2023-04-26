import config from "@/config";
import axios, { AxiosError } from "axios";
import { ErrorResponse, Response } from "./index.d";
import { AppDispatch, RootState } from "@/redux/reducerprovider";
import action from "@/redux/reduceraction";

interface Props {
  url: string;
  method: "PUT" | "POST" | "PATCH" | "GET" | "DELETE";
  data?: Record<string, any>;
  params?: Record<string, number | string>;
}

const apiCall = <T>(props: Props) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { auth } = getState();
    let Authorization: string | undefined;
    if (auth.accessToken) {
      Authorization = `Bearer ${auth.accessToken}`;
    }

    return axios<Response<T>>({
      baseURL: config.API,
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
      ...props,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === 401) dispatch(action.auth.reset());
        return {
          error: true,
          message: ((err.response?.data as any).message as any) || [err.message],
          statusCode: 500,
          data: undefined,
        } as ErrorResponse;
      });
  };
};

export default apiCall;
