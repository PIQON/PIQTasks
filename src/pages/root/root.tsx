import { useThemeContext } from "../../store/theme/use-theme-context";
import { Outlet } from "react-router";

import { ToastContainer } from "react-toastify";
import { Header } from "../../features/layout/header/header";

import "react-toastify/dist/ReactToastify.css";
import style from "./root.module.scss";

export const Root = () => {
  const { theme } = useThemeContext();
  return (
    <div className={style["main"]}>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
};
