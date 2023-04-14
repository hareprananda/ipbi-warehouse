import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ReduxProvider from "@/redux/reducerprovider";

const AppProvider: React.FC = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProvider;
