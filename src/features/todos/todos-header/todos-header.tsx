import { Button } from "../../ui/button/button";
import style from "./todos-header.module.scss";
import iconSun from "./../../../assets/images/icon-sun.svg";
import iconMoon from "./../../../assets/images/icon-moon.svg";
import { useThemeContext } from "../../../store/theme/use-theme-context";

export const TodosHeader = () => {
  const { theme, changeTheme } = useThemeContext();

  return (
    <header className={style["todos-header"]}>
      <h2 className={style["todos-header__title"]}>Todo</h2>
      <Button
        type="button"
        classNames={["btn", "btn--theme"]}
        onClick={() => changeTheme()}
      >
        <img
          src={theme === "dark" ? iconSun : iconMoon}
          alt={`${theme === "dark" ? "Light" : "Dark"} theme`}
        />
      </Button>
    </header>
  );
};
