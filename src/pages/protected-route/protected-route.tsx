import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../store/auth/auth-context";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("..");
  }

  return children;
};
