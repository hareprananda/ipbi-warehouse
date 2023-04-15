import { createSlice } from "@reduxjs/toolkit";
import { TypeActionSlice } from "../reducer";
import uiState from "./ui.state";

type State = typeof uiState;

const UIReducer = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showStatusModal: (state, action: TypeActionSlice<{ message: string; type?: State["statusModalType"] }>) => {
      state.statusModal = true;
      state.statusModalType = action.payload.type || "success";
      state.statusModalMessage = action.payload.message;
      return state;
    },

    dismissStatusModal: (state) => {
      state.statusModal = false;
      return state;
    },

    showLoading: (state) => {
      state.loading = true;
      return state;
    },

    dismissLoading: (state) => {
      state.loading = false;
      return state;
    },
  },
});

export default UIReducer;
