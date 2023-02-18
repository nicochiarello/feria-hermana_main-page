import React from "react";

const ProductItem = ({item}) => {
  return (
    <div className="w-full h-[22rem] bg-yellow-400 rounded-xl overflow-hidden">
      <div className="w-full h-[14rem] bg-red-400">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1200"
          alt=""
        />
      </div>
      <div className="px-2 py-2 text-md font-semibold flex flex-col bg-blue-600 h-[8rem] justify-between">
        <div>
          <h5>{item.name}</h5>
          <p>Talle {item.size}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h5>${item.price}</h5>
          <div className="px-5 py-1 rounded-xl bg-pink-500 cursor-pointer">
            <p>Agregar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
