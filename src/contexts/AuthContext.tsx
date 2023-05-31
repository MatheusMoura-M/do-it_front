import { iSignInData, iProviderProps, iUser, iAuthState } from "../interfaces";
import { createContext, useContext, useState, useCallback } from "react";
import { api } from "../services";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface iAuthContextData {
  user: iUser;
  accessToken: string;
  signIn: (credentials: iSignInData) => Promise<void>;
  signOut: () => void;
  navigate: NavigateFunction;
}

const AuthContext = createContext<iAuthContextData>({} as iAuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: iProviderProps) => {
  const navigate = useNavigate();

  const [data, setData] = useState<iAuthState>(() => {
    const accessToken = localStorage.getItem("@Doit:accessToken");
    const user = localStorage.getItem("@Doit:user");
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as iAuthState;
  });

  const signIn = useCallback(async ({ email, password }: iSignInData) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Doit:accessToken", accessToken);
    localStorage.setItem("@Doit:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.clear();

    setData({} as iAuthState);
    navigate("/");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
