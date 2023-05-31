import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./route";
import Dashboard from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";
import { PageNotFound } from "../pages/PageNotFound";

export const ServerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notfound" element={<PageNotFound />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};
