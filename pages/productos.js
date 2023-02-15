import React from "react";
import ProductList from "../components/products/product-list/ProductList";
import ProductsSidebar from "../components/products/ProductsSidebar";

const productos = () => {
  return (
    <div className="w-full bg-blue-400 h-fit flex py-2">
      <ProductsSidebar />
      <ProductList />
    </div>
  );
};

export default productos;
