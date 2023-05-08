import { useContext } from "react";
import { TodosFilterContext } from "./todos-filter-context";

export const useTodosFilterContext = () => {
  const context = useContext(TodosFilterContext);

  if (context === null) {
    throw new Error("Customer must be in provider!");
  }

  return context;
};
