/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
const Herobanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>(
          <button
            type="button"
            onClick={onClickHandler}
            disabled={hasPrev}
            title={label}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            style={{ zIndex: 1 }}
          >
            <BiArrowBack size={20} className="text-sm md:text-lg" />
          </button>

        )}
        renderArrowNext={(onClickHandler, hasNext, label) =>(
          <button
            type="button"
            onClick={onClickHandler}
            disabled={hasNext}
            title={label}
            className="absolute right-0  bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            style={{ zIndex: 1 }}


      >
        <BiArrowBack size={20} className="rotate-180 text-sm md:text-lg" />
      </button>
    )}
  >
        <div>
          <img
            src="/slide-1.png"
            alt="slide1"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute bg-white cursor-pointer font-medium hover:opacity-90 px-[15px] md:px-[40px] py-[25px] font-oswald bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[14px] md:text-[30px] uppercase">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            alt="slide1"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute bg-white cursor-pointer font-medium hover:opacity-90 px-[15px] md:px-[40px] py-[25px] font-oswald bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[14px] md:text-[30px] uppercase">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="/slide-3.png"
            alt="slide1"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute bg-white cursor-pointer font-medium hover:opacity-90 px-[15px] md:px-[40px] py-[25px] font-oswald bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[14px] md:text-[30px] uppercase">
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Herobanner;
