import React from "react";
import ProductItem from "../product-item/ProductItem";
import { list } from "../productList";

const ProductList = () => {
  return (
    <div className="h-fit w-[calc(100%-14rem)] bg-green-600 px-2 py-2 grid grid-cols-3 gap-4 ">
      {list.map((i) => {
        return <ProductItem key={i.id} item={i} />;
      })}
    </div>
  );
};

export default ProductList;
