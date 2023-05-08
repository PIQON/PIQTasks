import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../features/ui/button/button";
import { FormElement } from "../../../features/ui/form-element/form-element";
import { Wrapper } from "../../../features/ui/wrapper/wrapper";
import style from "./../form.module.scss";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../../lib/firebase";
import { toast } from "react-toastify";

type RegisterFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const submitHandler = async (data: RegisterFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Succesfully created!");
      navigate("..");
      reset();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  return (
    <Wrapper maxWidth="40rem">
      <div className={style["form-container"]}>
        <form className={style["form"]} onSubmit={handleSubmit(submitHandler)}>
          <h1 className={style["form__title"]}>Sign in</h1>
          <FormElement
            label="E-mail"
            type="email"
            id="email"
            placeholder="Anne@wp.pl"
            {...register("email")}
            error={errors.email?.message}
          />
          <FormElement
            label="Password"
            type="password"
            id="password"
            placeholder="Piqon123"
            {...register("password")}
            error={errors.password?.message}
          />
          <FormElement
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Piqon123"
            {...register("passwordConfirm")}
            error={errors.passwordConfirm?.message}
          />
          <Button type="submit" classNames={["btn", "btn--form"]}>
            Register
          </Button>
          <p className={style["form__addition"]}>
            If you have account{" "}
            <Link to=".." className={style["form__link"]}>
              login!
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};
