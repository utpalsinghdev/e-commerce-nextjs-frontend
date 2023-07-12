import React from "react";

const SizeButton = ({ size, isDisabled }) => {
  return (
    <div
      className={
        "border rounded-md text-center py-3 font-medium   transition-all duration-300 ease-in-out" +
        (isDisabled
          ? " bg-black/[0.1] cursor-not-allowed opacity-50 "
          : " cursor-pointer hover:border-black ")
      }
    >
      {size}
    </div>
  );
};

export default SizeButton;
