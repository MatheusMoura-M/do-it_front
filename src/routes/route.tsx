import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoutes = () => {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/" replace />;
};
