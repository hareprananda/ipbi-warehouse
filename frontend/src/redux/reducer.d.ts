import RegisterReducer from "./RegisterReducer";

export type TypeActionSlice<T> = { payload: T; type: string };

export type TypeReducer<T extends keyof (typeof RegisterReducer)[keyof typeof RegisterReducer]> = {
  [K in keyof typeof RegisterReducer]: T extends "getInitialState"
    ? ReturnType<(typeof RegisterReducer)[K][T]>
    : (typeof RegisterReducer)[K][T];
};
