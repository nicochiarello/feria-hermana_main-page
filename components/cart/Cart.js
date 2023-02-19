import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { modifyStatus } from "../../slices/cart/cartSlice";
import { remove, emptyCart } from "../../slices/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value.cart);
  const dispatch = useDispatch();
  const cartRef = useRef();

  const handleClick = (e) => {
    if (e.target === cartRef.current) {
      console.log(e.target === cartRef.current);
      dispatch(modifyStatus());
    }
  };
  return (
    <div
      onClick={handleClick}
      ref={cartRef}
      className="bg-black w-screen h-screen fixed top-0 left-0 flex justify-end bg-opacity"
    >
      <div className="w-[28rem] h-full bg-white py-3">
        <h4 className="text-center">Productos seleccionados</h4>
        <div className="flex flex-col my-2 h-[calc(100%-14rem)] overflow-scroll">
          {cart.map((i, key) => (
            <div
              className="w-full border-b py-3 h-[6.5rem] flex px-1 justify-between"
              key={key}
            >
              <div className="flex gap-4">
                <div className="w-[5rem] h-full rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={i.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col h-full justify-between py-1">
                  <p>{i.name}</p>
                  <p>${i.price}</p>
                </div>
              </div>
              <div
                onClick={() => dispatch(remove(i))}
                className="flex items-center h-full px-2 cursor-pointer"
              >
                <i className="bx bx-trash text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[12rem] bg-pink-300 flex flex-col items-center justify-between py-2">
          <div className="flex justify-between items-center bg-green-300 w-full px-2 py-4">
            <p>Vaciar carrito</p>
            <i
              onClick={() => dispatch(emptyCart())}
              className="bx bx-trash text-2xl cursor-pointer"
            ></i>
          </div>
          <div className="flex justify-between items-center bg-green-300 w-full px-2 py-4">
            <p>Total</p>
            <p>
              $
              {cart.reduce((acc, i) => {
                return i.price + acc;
              }, 0)}
            </p>
          </div>
          <button className="px-6 py-2 bg-blue-600 rounded-lg">
            <p>Confirmar compra</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
