import { ChildrenRoot } from "../../../types/shared";
import style from "./button.module.scss";

type ButtonProps = {
  classNames: string[];
  type: "submit" | "button" | "reset";
  onClick?: () => void;
};

export const Button = ({
  children,
  classNames,
  ...rest
}: ChildrenRoot & ButtonProps) => {
  const styledClassNames = classNames
    .map((className) => style[className])
    .join(" ");

  return (
    <button {...rest} className={styledClassNames}>
      {children}
    </button>
  );
};
