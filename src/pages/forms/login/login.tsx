import { Link } from "react-router-dom";
import { Button } from "../../../features/ui/button/button";
import { FormElement } from "../../../features/ui/form-element/form-element";
import { Wrapper } from "../../../features/ui/wrapper/wrapper";
import style from "./../form.module.scss";

export const Login = () => {
  return (
    <Wrapper maxWidth="40rem">
      <div className={style["form-container"]}>
        <form className={style["form"]}>
          <h1 className={style["form__title"]}>Sign up</h1>
          <FormElement
            label="E-mail"
            type="email"
            id="email"
            placeholder="Anne@wp.pl"
          />
          <FormElement
            label="Password"
            type="password"
            id="password"
            placeholder="Piqon123"
          />
          <Button>Login</Button>
          <p className={style["form__addition"]}>
            If you dont have account{" "}
            <Link to="/register" className={style["form__link"]}>
              register!
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};
