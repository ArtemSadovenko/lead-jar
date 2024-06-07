import axiosDefault from "../network/axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextType {
  token: string | null;
  setTokenAndName: (
    newToken: string | null,
    firstName: string | null,
    secondName: string | null
  ) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );

  // Function to set the authentication token
  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };
  const setTokenAndName = (
    newToken: string | null,
  ) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axiosDefault.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axiosDefault.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setTokenAndName,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
