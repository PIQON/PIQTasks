import { TodosItem, TodosItemData } from "../todos-item/todos-item";
import { query, collection, where, DocumentData } from "firebase/firestore";
import style from "./todos-list.module.scss";
import { firestore } from "../../../lib/firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { useAuthContext } from "../../../store/auth/use-auth-context";
import { Spinner } from "../../ui/spinner/spinner";

export const TodosList = () => {
  const user = useAuthContext();
  const ref = query(
    collection(firestore, "todos"),
    where("user_id", "==", user.uid)
  );
  const todos = useFirestoreQuery(["todos"], ref, { subscribe: true });

  console.log(todos);

  const snapshot = todos.data;

  if (!snapshot) return <></>;

  return (
    <div className={style["todos-list"]}>
      {todos.isLoading && <Spinner />}
      {snapshot.docs.length > 0 ? (
        snapshot?.docs.map((docSnapshot) => {
          const data = docSnapshot.data();
          return (
            <TodosItem
              key={docSnapshot.id}
              id={docSnapshot.id}
              title={data.title}
              isComplete={data.isComplete}
            />
          );
        })
      ) : (
        <p className={style["todos-list__results"]}>No todos found.</p>
      )}
    </div>
  );
};
