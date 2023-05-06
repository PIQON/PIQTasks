import { useContext } from "react";
import { AuthContext } from "./auth-context";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("Customer must be in provider!");
  }

  return context;
};
