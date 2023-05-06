import { Wrapper } from "../ui/wrapper/wrapper";
import { TodosForm } from "./todos-form/todos-form";
import { TodosHeader } from "./todos-header/todos-header";
import { TodosList } from "./todos-list/todos-list";
import style from "./todos.module.scss";

export const Todos = () => {
  return (
    <div className={style["todos"]}>
      <Wrapper maxWidth="35rem">
        <TodosHeader />
        <TodosForm />
        <TodosList />
      </Wrapper>
    </div>
  );
};
