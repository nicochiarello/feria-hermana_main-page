import React from "react";

const ProductsSidebar = () => {
  return (
    <div className="w-[15rem] bg-white flex flex-col rounded-xl min-h-[calc(100vh-6rem)] shadow-2xl">
      <div className="flex flex-col my-4 py-4 border-y pl-2 pr-4">
        <p className="font-semibold">Buscar</p>
        <input
          className="rounded-xl py-1 w-full px-2"
          type="text"
          placeholder="Buscar"
        />
      </div>

      <div className="flex flex-col my-4 py-4 border-y pl-2 pr-4">
        <p>Filtrar por</p>
        {Array.from({ length: 6 }, (item, key) => (
          <div key={key}>
            {" "}
            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full border border-black"></div>
              <p>Opt1</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col my-4 py-4 border-y pl-2 pr-4 ">
        <p>Categorias</p>
        {Array.from({ length: 25 }, (item, key) => (
          <div key={key}>
            {" "}
            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full border border-black"></div>
              <p>Opt1</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSidebar;
