import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};
const RelatedProduct = ({products}) => {
  return (
    <div className="mt-12  md:mt-24 mb-24 md:mb-0 ">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-2 "
        itemClass="px-2"
      >
        {products.data.map((p,idx)=>(
          <ProductCard key={idx} product={p} />
        ))}
        
      </Carousel>
    </div>
  );
};

export default RelatedProduct;
