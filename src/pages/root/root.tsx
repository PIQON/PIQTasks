import { Outlet } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./root.module.scss";
import { Header } from "../../features/layout/header/header";
import { useThemeContext } from "../../store/theme/use-theme-context";

export const Root = () => {
  const { theme } = useThemeContext();
  return (
    <main className={style["main"]}>
      <Header />
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
      <Outlet />
    </main>
  );
};
