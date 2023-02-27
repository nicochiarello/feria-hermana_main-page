import React from "react";

const procesamiento = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)]  px-4 flex items-center justify-center">
      <div className="w-full h-[85%] p-5 flex flex-col justify-center items-center shadow-2xl rounded-md ">
        <div className=" w-[35rem] gap-3 flex flex-col text-lg h-full overflow-y-scroll">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Nombre y apellido</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Nombre y apellido"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Dirección</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Dirección"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Codigo postal</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Codigo postal"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Email</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Celular</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Celular"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Dni</label>
            <input
              className="rounded-lg border px-2 py-2"
              type="text"
              placeholder="Dni"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Tipo de retiro</label>
            <input
              className="rounded-lg border px-2 py-2 py-1"
              type="text"
              placeholder="Tipo de retiro"
            />
          </div>
          <button className="bg-red-300 py-2 rounded-md">Finalizar Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default procesamiento;
