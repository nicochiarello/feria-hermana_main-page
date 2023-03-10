import { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modifyStatus } from "../../slices/cart/cartSlice";

const Navbar = () => {
  const [userOptions, setUserOptions] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const cart = useSelector((state) => state.cart.value.cart);
  const cartStatus = useSelector((state) => state.cart.value.status);
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-screen h-[5rem] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1200px] px-2">
        {mobileNavbar && (
          <MobileNavbar onClose={() => setMobileNavbar(false)} />
        )}
        <div
          onClick={() => setMobileNavbar((prev) => !prev)}
          className="md:hidden"
        >
          <i className="bx bx-menu-alt-left text-3xl "></i>
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex w-[3rem] h-[3rem] text-xl font-medium items-center justify-center bg-main rounded-full text-yellow">
            FH
          </div>
          <p className="font-semibold text-xl text-main">Feria Hermana</p>
        </div>
        <div className="hidden h-full md:flex items-center gap-6 text-xl pr-2 font-light">
          <Link href={"#"}>Inicio</Link>
          <Link href={"/productos"}>Productos</Link>
          <Link href={"#"}>Retiros</Link>
          <Link href={"#"}>Contacto</Link>
          <div
            onClick={() => dispatch(modifyStatus())}
            href={"#"}
            className="relative"
          >
            <i className="bx bx-cart "></i>
            <span className="absolute -top-2 text-xs bg-yellow-400 rounded-full px-1 text-main">
              {cart.length}
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <i className="bx bx-cart text-3xl "></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
