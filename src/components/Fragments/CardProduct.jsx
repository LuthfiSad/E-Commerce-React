import React from "react";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function CardProduct({ children }) {
  return (
    <div className="w-full p-5 max-w-sm flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-lg shadow m-2">
      {children}
    </div>
  );
}

const Header = ({ image, id }) => (
  <Link to={`/product/${id}`}>
    <img
      src={image}
      alt="products"
      className="rounded-t-lg w-full object-cover h-56"
    />
  </Link>
);

const Body = ({ children, name }) => (
  <div className="h-full py-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {name.substring(0, 20)}...
      </h5>
      <p className="text-m text-white">{children.substring(0, 100)}...</p>
    </a>
  </div>
);

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center flex-wrap justify-between">
      <span className="text-xl font-bold text-white">
        $ {price.toLocaleString("id-ID", { currency: "USD" })}
      </span>
      <Button
        onclick={() => dispatch(addToCart({ id, qty: 1 }))}
        classname={"bg-blue-600 text-xs h-8 px-4"}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
