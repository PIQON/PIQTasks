import { ChildrenRoot } from "../../../types/shared";
import style from "./button.module.scss";

export const Button = ({ children }: ChildrenRoot) => {
  return (
    <button type="button" className={`${style["btn"]} ${style["btn--form"]}`}>
      {children}
    </button>
  );
};
