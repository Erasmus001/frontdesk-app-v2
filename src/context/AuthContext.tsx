/* eslint-disable react-refresh/only-export-components */
import { db } from "@/config/localbaseConfig";
import { organizationProp } from "@/types/UserTypes";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const AuthContext = createContext<organizationProp | null>(null);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (children: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<organizationProp | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("org"));

    if (user) {
      setCurrentUser({
        id: user.id,
        organizationEmail: user.organizationEmail,
        organizationName: user.organizationName,
        role: user.role,
      });
    }
  }, [currentUser]);

  const globalVal = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={globalVal}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
