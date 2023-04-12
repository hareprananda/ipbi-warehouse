import RegisterReducer from "./RegisterReducer";

export type TypeActionSlice<T> = { payload: T; type: string };

export type TypeReducer<T extends keyof typeof RegisterReducer[keyof typeof RegisterReducer]> = {
  [K in keyof typeof RegisterReducer]: typeof RegisterReducer[K][T];
};
