import { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [userOptions, setUserOptions] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <div className="bg-red-600 w-full h-[5rem] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1152px] px-2">
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
          <div className="hidden md:flex w-[3rem] h-[3rem] items-center justify-center bg-blue-400 rounded-full">
            FH
          </div>
          <p className="font-semibold text-xl">Feria Hermana</p>
        </div>
        <div className="hidden h-full md:flex items-center gap-6 text-xl">
          <Link href={"#"}>Inicio</Link>
          <Link href={"/productos"}>Productos</Link>
          <Link href={"#"}>Contacto</Link>
          <div
            onClick={() => setUserOptions((prev) => !prev)}
            className="flex gap-1 "
          >
            <i className="bx bx-user font-bold relative"></i>
            <i className={`bx bx-chevron-${userOptions ? "up" : "down"}`}></i>
            <div
              className={`${
                !userOptions && "hidden"
              } absolute  top-[5rem] right-[2rem] w-[fit] flex flex-col gap-1 py-1 pr-[4rem] pl-2 bg-green-400`}
            >
              <p>Iniciar sesion</p>
              <p>Registrarse</p>
            </div>
          </div>
          <Link href={"#"}>
            <i className="bx bx-cart "></i>
          </Link>
        </div>
        <div className="md:hidden">
          <i className="bx bx-cart text-3xl "></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
