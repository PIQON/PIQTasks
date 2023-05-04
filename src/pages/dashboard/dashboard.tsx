import { Header } from "../../features/layout/header/header";
import { Todos } from "../../features/todos/todos";

export const Dashboard = () => {
  return (
    <div>
      <h1 className="visuallyhidden">
        TODO App, create your own todo tasks and manage them.
      </h1>
      <Header />
      <Todos />
    </div>
  );
};
