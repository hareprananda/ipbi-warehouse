import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./page/home/Home";
import Login from "./page/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
