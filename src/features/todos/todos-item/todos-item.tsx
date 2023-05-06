import { useState } from "react";
import { Button } from "../../ui/button/button";
import { TodosEdit } from "../todos-edit/todos-edit";
import style from "./todos-item.module.scss";

export type TodosItemData = {
  id: string;
  title: string;
  isComplete: boolean;
};

export const TodosItem = ({ title, isComplete }: TodosItemData) => {
  const [isCompleteState, setIsCompleteState] = useState(isComplete);

  const editTodo = () => {
    setIsCompleteState((prevState) => !prevState);
  };

  return (
    <div className={style["todo-item"]}>
      <TodosEdit
        isCompleteState={isCompleteState}
        changeCompleteState={editTodo}
      />
      <span className={style["todo-item__title"]}>{title}</span>
    </div>
  );
};
