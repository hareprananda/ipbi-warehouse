import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "@/routes/access/ProtectedRoute";
import GuestRoute from "@/routes/access/GuestRoute";
import { Guest, Protected } from "./routes";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
