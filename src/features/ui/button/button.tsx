import { ChildrenRoot } from "../../../types/shared";
import style from "./button.module.scss";

type ButtonProps = {
  type: "submit" | "button" | "reset";
};

export const Button = ({
  children,
  type = "button",
}: ChildrenRoot & ButtonProps) => {
  return (
    <button type={type} className={`${style["btn"]} ${style["btn--form"]}`}>
      {children}
    </button>
  );
};
