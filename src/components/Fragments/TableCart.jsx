import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/totalPriceContext";

export default function TableCart({ products }) {
  const cart = useSelector((state) => state.cart.data);
  const {isDarkMode} = useContext(DarkModeContext);
  const dispatch = useTotalPriceDispatch();
  const {total} = useTotalPrice();

  // useRef
  const totalPriceRef = useRef();

  useEffect(() => {
    if(cart.length>0){
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart])

  useEffect(() => {
    if(cart.length>0 && products.length>0){
      const sum = cart.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0)
      dispatch({type: "UPDATE", payload: {
        total: sum
      }});
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products])

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-3 ${isDarkMode ? "text-white" : "text-black"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={product.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    currency: "USD",
                  })}
                </td>
                <td className="text-center">{item.qty}</td>
                <td>
                  ${" "}
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <strong>Total Price : </strong>
          </td>
          <td>
            <strong>
              $ {total.toLocaleString("id-ID", { currency: "USD" })}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
