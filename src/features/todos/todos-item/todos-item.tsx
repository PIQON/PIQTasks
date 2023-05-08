import style from "./todos-item.module.scss";
import { TodosEdit } from "../todos-edit/todos-edit";
import {
  useFirestoreDocumentDeletion,
  useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { mutateFirebaseTodoData } from "../todos-service/todos-service";
import { Button } from "../../ui/button/button";
import { toast } from "react-toastify";

import iconClose from "./../../../assets/images/icon-cross.svg";

export type TodosItemData = {
  id: string;
  title: string;
  isComplete: boolean;
};

export const TodosItem = ({ id, title, isComplete }: TodosItemData) => {
  const editMutation = useFirestoreDocumentMutation(
    mutateFirebaseTodoData(id),
    { merge: true },
    {
      onSuccess() {
        toast.success("Succesfully edited todo!");
      },
      onError(err) {
        toast.error(err.message);
      },
    }
  );
  const deleteMutation = useFirestoreDocumentDeletion(
    mutateFirebaseTodoData(id),
    {
      onSuccess() {
        toast.success("Succesfully deleted todo!");
      },
      onError(err) {
        toast.error(err.message);
      },
    }
  );

  const editTodo = () => {
    editMutation.mutate({
      isComplete: !isComplete,
    });
  };

  const deleteTodo = () => {
    deleteMutation.mutate();
  };

  return (
    <div className={style["todo-item"]}>
      <TodosEdit isCompleteState={isComplete} changeCompleteState={editTodo} />
      <span className={style["todo-item__title"]}>{title}</span>
      <Button
        type="button"
        classNames={["btn", "btn--close", "btn--theme"]}
        onClick={deleteTodo}
      >
        <img src={iconClose} alt="Delete todo" />
      </Button>
    </div>
  );
};
