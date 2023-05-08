import { useContext } from "react";
import { Todos } from "../../features/todos/todos";
import { AuthContext } from "../../store/auth/auth-context";

export const Dashboard = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      {user && (
        <div>
          <h1 className="visuallyhidden">
            TODO App, create your own todo tasks and manage them.
          </h1>
          <Todos />
        </div>
      )}
    </div>
  );
};
