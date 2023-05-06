import style from "./spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={style["spinner"]}>
      <div className={style["spinner__item"]}></div>
    </div>
  );
};
