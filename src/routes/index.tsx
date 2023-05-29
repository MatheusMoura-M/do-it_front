import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./route";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";

export const ServerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route element={<PrivateRoutes />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* </Route> */}
    </Routes>
  );
};
