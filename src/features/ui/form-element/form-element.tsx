import { forwardRef } from "react";
import style from "./form-element.module.scss";

type InputType = "text" | "password" | "email";

type FormElementProps = {
  id: string;
  label: string;
  type: InputType;
  placeholder?: string;
  error?: string;
  onChange?: () => void;
};

export const FormElement = forwardRef<HTMLInputElement, FormElementProps>(
  ({ id, label, error, ...rest }, ref) => {
    return (
      <div className={style["form-item"]}>
        <label htmlFor={id} className={style["form-item__label"]}>
          {label}
        </label>
        <input
          className={style["form-item__input"]}
          id={id}
          {...rest}
          ref={ref}
        />
        {error && <p className={style["form-item__error"]}>{error}</p>}
      </div>
    );
  }
);
