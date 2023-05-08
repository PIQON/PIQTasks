import { Wrapper } from "../ui/wrapper/wrapper";
import { TodosFilterContextProvider } from "./store/filter/todos-filter-context";
import { TodosForm } from "./todos-form/todos-form";
import { TodosHeader } from "./todos-header/todos-header";
import { TodosList } from "./todos-list/todos-list";
import style from "./todos.module.scss";

export const Todos = () => {
  return (
    <div className={style["todos"]}>
      <TodosFilterContextProvider>
        <Wrapper maxWidth="35rem">
          <TodosHeader />
          <TodosForm />
          <TodosList />
        </Wrapper>
      </TodosFilterContextProvider>
    </div>
  );
};
