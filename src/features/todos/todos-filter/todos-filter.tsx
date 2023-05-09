import { FilterActions } from "./filter-actions/filter-actions";
import style from "./todos-filter.module.scss";

type TodosFilterProps = {
  itemsLeft: number | undefined;
};

export const TodosFilter = ({ itemsLeft = 0 }: TodosFilterProps) => {
  console.log(itemsLeft);
  return (
    <div className={style["filter"]}>
      <span className={style["filter__items"]}>{itemsLeft} items left</span>
      <FilterActions />
    </div>
  );
};
