import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input"

const FormRegister = () => (
  <form action="">
    <InputForm
      name="name"
      label="Fullname :"
      type="text"
      placeholder="insert your nae here..."
    ></InputForm>
    <InputForm
      name="email"
      label="Email :"
      type="email"
      placeholder="example@gmail.com"
    ></InputForm>
    <InputForm
      name="password"
      label="Password :"
      type="password"
      placeholder="-----"
    ></InputForm>
    <InputForm
      name="confirmPassword"
      label="Confirm Password :"
      type="password"
      placeholder="-----"
    ></InputForm>
    <Button classname={"bg-blue-600 w-full"}>Register</Button>
  </form>
);
export default FormRegister;
