/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
const ProductDetailsCrousel = () => {
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
        <img
          src="/p1.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p2.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p3.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p4.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p5.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p6.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <img
          src="/p7.png"
          alt="slide1"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCrousel;
