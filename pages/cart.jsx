import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center mx-auto mt-8 md:mt-0 max-w-[800px]">
          <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 rounded-xl bg-black/[0.05]">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  ₹19,00.00
                </div>
              </div>
              <div className="text-sm md:text-md font-medium py-5 border-t mt-5">
                The subtotal does not include taxes, shipping cost and other
                additional charges. and other additional charges. But it
                includes discount.
              </div>
            </div>
            <Button className="bg-black text-white hover:opacity-75">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
        {/* /? */}
        {/* <div className="flex flex-col items-center md:-mt-14 flex-[2] pb-[50px]">
          <Image
            src="/empty-cart.jpg"
            alt="empty_cart"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you haven&apos;t added any items to your cart yet.
            <br />
            Go ahead and discover our wide range of products.
          </span>
          <Link
            href="/"
            className="py-4 px-8 mb-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mt-8"
          >
            Proceed to Checkout
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Cart;
