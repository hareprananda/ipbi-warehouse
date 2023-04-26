import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "@/routes/access/ProtectedRoute";
import GuestRoute from "@/routes/access/GuestRoute";
import { Guest, Protected } from "./routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const title = (location.pathname.match(/[a-z\-]+$/gi) || ["Warehouse"])[0]
      .split("-")
      .reduce((acc, v) => {
        return acc + " " + v.slice(0, 1).toUpperCase() + v.slice(1);
      }, "")
      .slice(1);
    document.title = `IPBI - ${title}`;
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>{Protected()}</Route>
        </Route>

        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>{Guest()}</Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;
