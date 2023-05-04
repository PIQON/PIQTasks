import style from "./form-element.module.scss";

type InputType = "text" | "password" | "email";

type FormElementProps = {
  id: string;
  label: string;
  type: InputType;
  placeholder?: string;
};

export const FormElement = ({ id, label, ...rest }: FormElementProps) => {
  return (
    <div className={style["form-item"]}>
      <label htmlFor={id} className={style["form-item__label"]}>
        {label}
      </label>
      <input className={style["form-item__input"]} id={id} {...rest} />
    </div>
  );
};
