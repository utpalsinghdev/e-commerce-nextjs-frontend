/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiTrash } from "react-icons/bi";
const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b ">
      <div className="shirk-0 aspect-square w-[50px] md:w-[120px]">
        <img src="/product-1.webp" alt="product" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Delta 2
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men's Shoe
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : ₹ 12,995.00
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] block">
          Men's Shoe
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-sm md:text-md text-black/[0.5]">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size :</div>
              <select className="hover:text-black">
                <option value="1">UK 6</option>
                <option value="2">UK 7</option>
                <option value="3">UK 8</option>
                <option value="4">UK 9</option>
                <option value="5">UK 10</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity :</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

          </div>
          <BiTrash size={20} className="text-black/[0.5] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
