import { useAppSelector } from "@/hooks/useRedux";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const user = useAppSelector((state) => state.auth);

  if (!user.accessToken) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};

export default ProtectedRoute;
