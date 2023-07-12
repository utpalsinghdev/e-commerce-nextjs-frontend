import React from "react";

const SizeButton = ({ size, isDisabled, isActive, setSelectedSize }) => {
  return (
    <div
      onClick={() => {
        setSelectedSize((prev) => (prev === size ? "" : size));
      }}
      className={
        "border rounded-md text-center py-3 font-medium   transition-all duration-300 ease-in-out" +
        (isDisabled
          ? " bg-black/[0.1] cursor-not-allowed opacity-50 "
          : " cursor-pointer hover:border-black ") +
        (isActive ? " border-black " : " border-black/[0.1] ")
      }
    >
      {size}
    </div>
  );
};

export default SizeButton;
