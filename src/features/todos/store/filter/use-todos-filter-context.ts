import { TodosFilterContext } from "./todos-filter-context";
import { useContextWithoutNull } from "../../../../hooks/use-context-without-null";

export const useTodosFilterContext = () => {
  const filterContext = useContextWithoutNull(TodosFilterContext);
  return filterContext;
};
