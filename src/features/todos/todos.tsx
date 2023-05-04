import { Wrapper } from "../ui/wrapper/wrapper";
import { TodosHeader } from "./todos-header/todos-header";
import style from "./todos.module.scss";

export const Todos = () => {
  return (
    <div className={style["todos"]}>
      <Wrapper maxWidth="35rem">
        <TodosHeader />
      </Wrapper>
    </div>
  );
};
