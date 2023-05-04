import { Outlet } from "react-router";
import style from "./root.module.scss";

export const Root = () => {
  return (
    <main className={style["main"]}>
      <Outlet />
    </main>
  );
};
