import { FormEvent, useState } from "react";
import style from "./todos-form.module.scss";
import { firestore } from "../../../lib/firebase";
import { collection } from "firebase/firestore";
import { TodosEdit } from "../todos-edit/todos-edit";
import { useAuthContext } from "../../../store/auth/use-auth-context";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { toast } from "react-toastify";

export const TodosForm = () => {
  const user = useAuthContext();
  const ref = collection(firestore, "todos");
  const mutation = useFirestoreCollectionMutation(ref, {
    onSuccess() {
      toast.success("Succesfully add todo!");
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState("");

  const handleInputChange = (ev: FormEvent) => {
    const target = ev.target as HTMLInputElement;
    setTitle(target.value);
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    mutation.mutate({
      user_id: user?.uid,
      title,
      isComplete,
    });
    setTitle("");
    setIsComplete(false);
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <TodosEdit
        isCompleteState={isComplete}
        changeCompleteState={() => setIsComplete((prevState) => !prevState)}
      />
      <input
        type="text"
        name="todo"
        id="todo"
        className={style["form__input"]}
        placeholder="Create a new todo..."
        value={title}
        onChange={handleInputChange}
      />
    </form>
  );
};
