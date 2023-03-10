import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/process/cart/CartItem";
import Link from "next/link";

const ProcessDetails = () => {
  const cart = useSelector((state) => state.cart.value.cart);
  const cartPrice = useSelector((state) => state.cart.value.price)

  return (
    <div className="w-full h-[calc(100vh-5rem)]  px-4 flex items-center justify-center gap-6 ">
      <div className="w-full h-[85%] p-5 flex flex-col justify-between shadow-2xl rounded-md ">
        <div className="flex w-full h-[4rem] justify-between items-center">
          <h3>Detalles de compra</h3>
        </div>
        <div className="w-full h-[calc(100%-9rem)] overflow-y-scroll">
          {cart.length && (
            <table className="w-full text-sm text-left text-gray-400 rounded h-fit">
              <thead className="border-b ">
                <th scope="col" className="py-3 px-2"></th>
                <th scope="col" className="py-3 px-2">
                  Nombre
                </th>
                <th scope="col" className="py-3 px-2">
                  Talle
                </th>
                <th scope="col" className="py-3 px-2">
                  Precio
                </th>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return <CartItem key={item._id} item={item} />;
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex w-full h-[4rem] justify-between items-center bg-red-300">
          <div className="flex gap-3">
            <p>Total: ${cartPrice}</p>
          </div>
          <Link href="procesamiento" className="px-10 py-2 rounded-xl bg-pink-400 flex items-center justify-center">
            <p>Confirmar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessDetails;
