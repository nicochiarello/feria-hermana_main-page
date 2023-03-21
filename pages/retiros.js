import React from "react";

const retiros = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="w-[900px] h-[500px] relative  bg-white rounded-lg shadow-2xl flex items-center justify-center">
        <div className="absolute top-[0] px-12 py-2 bg-main rounded-2xl text-white -translate-y-[1rem] ">
          <h3>Retiros</h3>
        </div>
        <div className="w-full h-full pt-12 pb-2 overflow-y-scroll">
          <div className="w-full py-3 flex items-center justify-between text-2xl px-4 border-y">
            <p>Lunes </p>
            <p>16-20hs, San Martin 657</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default retiros;
