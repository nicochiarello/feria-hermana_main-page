import React from "react";

const MobileNavbar = ({ onClose }) => {
  return (
    <div className="w-screen h-screen bg-yellow-500 absolute top-0 left-0">
      <div
        onClick={() => onClose()}
        className="absolute text-2xl right-2 top-2"
      >
        <p>x</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
