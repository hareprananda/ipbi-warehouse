import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ReduxProvider from "@/redux/reducerprovider";
import StatusModal from "./component/modal/StatusModal";
import Loading from "./component/loading/Loading";

const AppProvider: React.FC = () => {
  return (
    <ReduxProvider>
      <StatusModal />
      <Loading />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProvider;
