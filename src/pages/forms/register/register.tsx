import { Link } from "react-router-dom";
import { Button } from "../../../features/ui/button/button";
import { FormElement } from "../../../features/ui/form-element/form-element";
import { Wrapper } from "../../../features/ui/wrapper/wrapper";
import style from "./../form.module.scss";

export const Register = () => {
  return (
    <Wrapper maxWidth="40rem">
      <div className={style["form-container"]}>
        <form className={style["form"]}>
          <h1 className={style["form__title"]}>Sign in</h1>
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
          <FormElement
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Piqon123"
          />
          <Button>Register</Button>
          <p className={style["form__addition"]}>
            If you have account{" "}
            <Link to="/login" className={style["form__link"]}>
              login!
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};
