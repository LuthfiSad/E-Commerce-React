import Button from "../Elements/Button";
import useLogin from "../../hooks/useLogin";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import {DarkModeContext} from "../../context/darkModeContext";
import { useTotalPrice } from "../../context/totalPriceContext";

export default function Navbar() {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const {total} = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className={`flex items-center justify-between px-5 py-2 text-white ${isDarkMode ? "bg-blue-900" : "bg-blue-600"} md:px-20 flex-wrap`}>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <div className="flex items-center">
        <span>{username || "User Not Found"}</span>
        <Button
          classname={"bg-red-600 text-xs px-4 h-8 mx-2"}
          onclick={handleLogout}
        >
          Logout
        </Button>
        <div className="flex items-center bg-black p-2 h-8 rounded-md">item : {totalCart} | total : $ {total.toLocaleString("id-ID", { currency: "USD" })} </div>
        <Button classname={`h-8 px-3 text-xs ml-2 bg-black`} onclick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
      </div>
    </div>
  );
}
