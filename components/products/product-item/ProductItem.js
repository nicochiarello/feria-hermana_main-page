import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../../slices/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ item, cart }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let isSelected = cart.find((i) => i._id === item._id);

    if (isSelected) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [cart]);

  const handleCartAction = (e) => {
    e.preventDefault();
    if (!cart.includes(item)) {
      dispatch(add(item));
    } else {
      console.log("item a mandar", item);
      dispatch(remove(item));
    }
  };

  return (
    <Link
      href={`/productos/${item._id}`}
      className="w-full h-[22rem] bg-yellow-400 rounded-xl overflow-hidden"
    >
      <div className="w-full h-[14rem] bg-red-400">
        <Image
          className="w-full h-full object-cover"
          src={item.images[0].secureUrl}
          alt={item.name}
          width={500}
          height={500}
        />
      </div>
      <div className="px-2 py-2 text-md font-semibold flex flex-col bg-blue-600 h-[8rem] justify-between">
        <div>
          <h5>{item.name}</h5>
          <p>Talle {item.size}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h5>${item.price}</h5>
          <div
            onClick={handleCartAction}
            className="px-5 py-1 rounded-xl bg-pink-500 cursor-pointer"
          >
            <p>{selected ? "Agregado" : "Agregar"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
