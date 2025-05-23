import routes from "@/const/routes";
import Login from "@/page/auth/Login";
import Goods from "@/page/goods/Goods";
import Home from "@/page/home/Home";
import ManageReq from "@/page/manageReq/ManageReq";
import Manager from "@/page/manager/Manager";
import Request from "@/page/request/Request";
import RequestSuccess from "@/page/request/RequestSuccess";
import Requester from "@/page/requester/Requester";
import Setting from "@/page/setting/Setting";
import React from "react";
import { Route } from "react-router-dom";

export const Guest = () => {
  return (
    <>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.request} element={<Request />} />
      <Route path={routes.requestSuccess} element={<RequestSuccess />} />
    </>
  );
};

export const Protected = () => {
  return (
    <>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.goods} element={<Goods />} />
      <Route path={routes.manageRequest} element={<ManageReq />} />
      <Route path={routes.requester} element={<Requester />} />
      <Route path={routes.manager} element={<Manager />} />
      <Route path={routes.setting} element={<Setting />} />
    </>
  );
};
