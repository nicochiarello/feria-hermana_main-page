import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit py-6 md:h-[10rem] bg-white text-main flex items-center justify-center text-lg">
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-4 items-center w-[1200px] px-2 gap-4">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <div className="h-[3.5rem] w-[3.5rem] rounded-full bg-main flex items-center justify-center text-yellow text-3xl">
            <p>FH</p>
          </div>
          <p className="text-xl">Feria Hermana</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Inicio</p>
          <p>Productos</p>
          <p>Contacto</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Redes sociales</p>
          <p>Instagram</p>
          <p>Whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
