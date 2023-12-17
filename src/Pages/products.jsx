import { useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Navbar from "../components/Layout/Navbar";
import { getProducts } from "../services/product.service";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import {DarkModeContext} from "../context/DarkModeContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const {isDarkMode} = useContext(DarkModeContext);
  useLogin();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    })
  })

  return (
    <>
      <Navbar />
      <div className={`flex justify-center p-5 ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
              />
            </CardProduct>
          ))}
          {products.length === 0 && (
            <div className="w-full flex justify-center items-center">
              <p className="text-xl font-bold underline text-blue-600">Product Not Found</p>
            </div>
          )}
        </div>
        <div className="w-2/6">
          <h1 className={`text-3xl font-bold ${isDarkMode ? "text-blue-700" : "text-blue-600"} m-3`}>Card</h1>
          <TableCart products={products}/>
        </div>
      </div>
    </>
  );
}
