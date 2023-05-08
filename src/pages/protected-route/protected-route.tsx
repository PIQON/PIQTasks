import { useNavigate } from "react-router";
import { useAuthContext } from "../../store/auth/use-auth-context";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthContext();
  const navigate = useNavigate();

  if (!user) {
    navigate("..");
  }

  return children;
};
