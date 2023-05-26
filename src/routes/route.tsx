import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = () => {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/" replace />;
};
