import { TodosItem } from "../todos-item/todos-item";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { useAuthContext } from "../../../store/auth/use-auth-context";
import { Spinner } from "../../ui/spinner/spinner";
import {
  getUserFilteredFirebaseData,
  getUserFirebaseData,
} from "../todos-service/todos-service";

import style from "./todos-list.module.scss";
import { useTodosFilterContext } from "../store/filter/use-todos-filter-context";

export const TodosList = () => {
  const user = useAuthContext();
  const { filter } = useTodosFilterContext();
  const todosQuery =
    filter === "all"
      ? getUserFirebaseData(user)
      : getUserFilteredFirebaseData(user, "isComplete", filter === "active");
  const todos = useFirestoreQuery(["todos"], todosQuery, {
    subscribe: true,
  });

  const snapshot = todos.data;

  if (todos.isLoading) {
    return <Spinner />;
  }

  return (
    <div className={style["todos-list"]}>
      {snapshot && snapshot.docs.length > 0 ? (
        snapshot?.docs.map((docSnapshot) => {
          const data = docSnapshot.data();
          return (
            <TodosItem {...data} key={docSnapshot.id} id={docSnapshot.id} />
          );
        })
      ) : (
        <p className={style["todos-list__results"]}>No todos found.</p>
      )}
    </div>
  );
};
