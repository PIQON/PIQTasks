import { createContext, useState } from "react";
import { ChildrenRoot } from "../../../../types/shared";

type Filter = "all" | "active" | "completed";

type TodosFilterContextData = {
  filter: Filter;
  changeFilter: (newFilterState: Filter) => void;
};

export const TodosFilterContext = createContext<TodosFilterContextData | null>(
  null
);

export const TodosFilterContextProvider = ({ children }: ChildrenRoot) => {
  const [filter, setFilter] = useState<Filter>("all");

  const changeFilter = (newFilterState: Filter) => {
    setFilter(newFilterState);
  };

  return (
    <TodosFilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </TodosFilterContext.Provider>
  );
};
