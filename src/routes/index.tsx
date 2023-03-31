import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";

export const ServerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
    </Routes>
  );
};
