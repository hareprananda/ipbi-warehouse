import { useAppSelector } from "@/hooks/useRedux";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute: React.FC = () => {
  const user = useAppSelector((state) => state.auth);

  if (user.accessToken) return <Navigate to={"/"} replace />;
  return <Outlet />;
};

export default GuestRoute;
