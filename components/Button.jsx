"use client";
import React from "react";

const Button = ({
  children,
  type = "button",
  className = "",
  onClick = () => {},
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={
        "w-full py-4 rounded-full text-lg font-medium transition-transform active:scale-95 mb-3  duration-300 ease-in-out " +
        className 
      }
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
