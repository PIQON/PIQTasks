import { User } from "firebase/auth";
import {
  CollectionReference,
  collection,
  doc,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../../lib/firebase";
import { TodosItemData } from "../todos-item/todos-item";

const FIREBASE_DATABASE_NAME = "todos";
const todosCollection = collection(firestore, FIREBASE_DATABASE_NAME);

export const getUserFirebaseData = (user: User | null) => {
  const ref = query(
    todosCollection,
    where("user_id", "==", user?.uid)
  ) as CollectionReference<TodosItemData>;

  return ref;
};

export const getUserFilteredFirebaseData = <T>(
  user: User | null,
  filterKey: keyof TodosItemData,
  filterValue: T
) => {
  const firebaseUserData = getUserFirebaseData(user);
  const ref = query(firebaseUserData, where(filterKey, "==", filterValue));

  return ref;
};

export const mutateFirebaseTodoData = (id: string) => {
  const query = doc(todosCollection, id);
  return query;
};
