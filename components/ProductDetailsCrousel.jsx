/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
const ProductDetailsCrousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-12">
      <Carousel
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={true}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img, idx) => (
          <img
            key={idx}
            src={img?.attributes?.url}
            alt={img?.attributes?.name}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCrousel;
