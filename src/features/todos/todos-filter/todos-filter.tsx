import { Button } from "../../ui/button/button";
import { FilterActions } from "./filter-actions/filter-actions";
import style from "./todos-filter.module.scss";

export const TodosFilter = () => {
  return (
    <div className={style["filter"]}>
      <span className={style["filter__items"]}>5 items left</span>
      <FilterActions />
      <Button type="button" classNames={["btn", "btn--filter"]}>
        Clear Completed
      </Button>
    </div>
  );
};
