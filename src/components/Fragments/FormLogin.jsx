import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [failedLogin, setFailedLogin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setFailedLogin(res);
      }
    }); 
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <>
    {failedLogin && <p className="text-white text-center text-xs mb-5 bg-red-500">{failedLogin}</p>}
    <form onSubmit={handleSubmit}>
      <InputForm
        name="username"
        label="Username :"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        name="password"
        label="Password :"
        type="password"
        placeholder="-----"
      ></InputForm>
      <Button classname={"bg-blue-600 w-full"} type="submit">
        Login
      </Button>
    </form>
    </>
  );
};
export default FormLogin;
