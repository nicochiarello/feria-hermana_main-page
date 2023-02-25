import React from "react";

const CartItem = ({ item }) => {
  return (
    <tr className="border-b">
      <td className="py-3 px-2 ">
        {" "}
        <img
          className="rounded-lg w-[4rem] h-[4rem] object-cover"
          src={item.images[0].secureUrl}
          alt=""
        />
      </td>
      <td className="py-3 px-2">{item.name}</td>
      <td className="py-3 px-2">{item.size}</td>
      <td className="py-3 px-2">${item.price}</td>
    </tr>
  );
};

export default CartItem;
