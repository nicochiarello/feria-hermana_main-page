import React from "react";

const Error = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-blue-400">
      <div className="w-full h-[14rem]  bg-red-500 flex items-center justify-center text-2xl font-bold text-white">
        {" "}
        <p>Error</p>
      </div>
      <div className="w-full h-fit flex justify-center">
        <div className="w-[80%] min-h-[30rem] flex flex-col justify-center items-center gap-3 bg-white shadow-2xl rounded-2xl -translate-y-[10%]">
          <p>No hemos podido confirmar su compra</p>
          <p>El proceso de confirmacion puede demorar algunas horas, comunicarse con feria hermana</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
