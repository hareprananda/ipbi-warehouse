import Login from "@/page/auth/Login";
import Home from "@/page/home/Home";
import React from "react";
import { Route } from "react-router-dom";

export const Guest = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />
    </>
  );
};

export const Protected = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />
    </>
  );
};
