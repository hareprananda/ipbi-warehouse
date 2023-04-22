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

    showOverlay: (state) => {
      state.overlay = true;
      return state;
    },

    dismissOverlay: (state) => {
      state.overlay = false;
      return state;
    },

    showConfirmation: (state, action: TypeActionSlice<{ message: string; onConfirm: () => void }>) => {
      state.openConfirmation = true;
      state.confirmationMessage = action.payload.message;
      state.onOkConfirmation = action.payload.onConfirm;
      return state;
    },

    dismissConfirmation: (state) => {
      state.openConfirmation = false;
      return state;
    },
  },
});

export default UIReducer;
