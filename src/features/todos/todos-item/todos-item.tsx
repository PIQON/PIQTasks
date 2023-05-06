import { useState } from "react";
import { TodosEdit } from "../todos-edit/todos-edit";
import style from "./todos-item.module.scss";
import { collection, doc } from "firebase/firestore";
import { firestore } from "../../../lib/firebase";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { toast } from "react-toastify";

export type TodosItemData = {
  id: string;
  title: string;
  isComplete: boolean;
};

export const TodosItem = ({ id, title, isComplete }: TodosItemData) => {
  const ref = collection(firestore, "todos");
  const query = doc(ref, id);
  const mutation = useFirestoreDocumentMutation(query, { merge: true });
  const [isCompleteState, setIsCompleteState] = useState(isComplete);

  const editTodo = () => {
    setIsCompleteState((prevState) => !prevState);
    mutation.mutate(
      {
        isComplete: !isCompleteState,
      },
      {
        onSuccess() {
          toast.success("Succesfully edited todo!");
        },
        onError(err) {
          toast.error(err.message);
        },
      }
    );
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
