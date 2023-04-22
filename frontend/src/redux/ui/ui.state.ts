/* eslint-disable @typescript-eslint/no-empty-function */
const uiState = {
  statusModal: false,
  statusModalMessage: "",
  statusModalType: "success" as "success" | "info" | "error",
  loading: false,
  overlay: false,
  openConfirmation: false,
  confirmationMessage: "",
  onOkConfirmation: () => {},
};

export default uiState;
