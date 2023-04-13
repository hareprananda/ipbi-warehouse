import React, { PropsWithChildren } from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RegisterReducer from "./registerreducer";
import {} from "redux";
import { TypeReducer } from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunkMiddleware from "redux-thunk";

type ReducerKey = (keyof typeof RegisterReducer)[];

const reducer = combineReducers(
  (Object.keys(RegisterReducer) as ReducerKey).reduce((acc, key) => {
    acc[key] = RegisterReducer[key].reducer;
    return acc;
  }, {} as TypeReducer<"reducer">)
);

const persistedReducer = persistReducer({ key: "root", version: 1, storage }, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

const persistor = persistStore(store);

const ReduxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default ReduxProvider;
