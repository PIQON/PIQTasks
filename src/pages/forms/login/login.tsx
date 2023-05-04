import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../features/ui/button/button";
import { FormElement } from "../../../features/ui/form-element/form-element";
import { Wrapper } from "../../../features/ui/wrapper/wrapper";
import style from "./../form.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

import { toast } from "react-toastify";
import { auth } from "../../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const submitHandler = async (data: LoginFormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Logged!");
      navigate("/dashboard");
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
          <h1 className={style["form__title"]}>Sign up</h1>
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
          <Button type="submit">Login</Button>
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
