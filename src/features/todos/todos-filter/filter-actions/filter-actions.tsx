import { useMediaQuery } from "../../../../hooks/use-media-query";
import { Button } from "../../../ui/button/button";
import { Filter } from "../../store/filter/todos-filter-context";
import { useTodosFilterContext } from "../../store/filter/use-todos-filter-context";
import style from "./../todos-filter.module.scss";

type FilterActionButtons = {
  id: number;
  title: Filter;
};

const FILTERED_BUTTONS: FilterActionButtons[] = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Active",
  },
  {
    id: 3,
    title: "Completed",
  },
];

export const FilterActions = () => {
  const { changeFilter } = useTodosFilterContext();
  const matches = useMediaQuery("(max-width: 28.75rem)");
  return (
    <div
      className={`${style["filter__actions"]}  ${
        matches && style["filter__actions--mobile"]
      }`}
    >
      {FILTERED_BUTTONS.map((FILTER_BUTTON) => (
        <Button
          key={FILTER_BUTTON.id}
          type="button"
          classNames={["btn", "btn--filter"]}
          onClick={() => changeFilter(FILTER_BUTTON.title)}
        >
          {FILTER_BUTTON.title}
        </Button>
      ))}
    </div>
  );
};
