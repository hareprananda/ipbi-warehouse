import AuthState from "./auth.state";
import { createSlice } from "@reduxjs/toolkit";
import { TypeActionSlice } from "../reducer";

const AuthReducer = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    changeAuthForm: (state, action: TypeActionSlice<typeof AuthState>) => {
      state = action.payload;
      return state;
    },

    reset: (state) => {
      state = AuthState;
      return state;
    },
  },
});

export default AuthReducer;
