import React from "react";
import ProductList from "../components/products/product-list/ProductList";
import ProductsSidebar from "../components/products/ProductsSidebar";
import { useSelector } from "react-redux";
import Cart from "../components/cart/Cart";

const Productos = () => {
  const cartStatus = useSelector((state) => state.cart.value.status);

  return (
    <div className="w-full bg-blue-400 h-fit flex py-2">
      {cartStatus && <Cart />}
      <ProductsSidebar />
      <ProductList />
    </div>
  );
};

export default Productos;
