import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";
ProductCard;
const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20 ">
      <Wrapper>
        <div className="text-center mx-auto mt-8 md:mt-0 max-w-[800px]">
          <div className="leading-tight font-semibold mb-5 text-[28px] md:text-[34px]">
            Running Shoes
          </div>
        </div>
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Wrapper>
    </div>
  );
};

export default Category;
