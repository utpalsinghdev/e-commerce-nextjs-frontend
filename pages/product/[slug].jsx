import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import RelatedProduct from "@/components/RelatedProduct";
import SizeButton from "@/components/SizeButton";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
ProductCard;
const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:10 lg:py-20  ">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-24">
          <div className="w-full md:w-auto flex-[1.5] max-w-lg lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-4xl font-semibold mb-2">
              Nike Air Zoom Pegasus 38
            </div>
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Running Shoe
            </div>
            <div className="text-lg font-semibold">MRP : ₹ 11,495.00</div>
            <div className="text-lg font-semibold text-black/[0.5]">
              incl. of all taxes
            </div>
            <div className="text-lg font-semibold text-black/[0.5] mb-20">
              {`(Also inclusive of GST @18%)`}
            </div>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <SizeButton size="UK 6" />
                <SizeButton size="UK 7" />
                <SizeButton size="UK 2" />
                <SizeButton size="UK 9" />
                <SizeButton isDisabled={false} size="UK 9" />
                <SizeButton isDisabled size="UK 10" />
              </div>
              <div className="text-red-600 mt-1">
                Please select a size to proceed
              </div>
            </div>
            <Button className="  bg-black text-white hover:opacity-75 ">
              Add To Cart
            </Button>
            <Button className="  bg-white text-black border border-black flex items-center justify-center gap-2 mb-10 ">
              Wishlist <IoMdHeartEmpty size={20} />
            </Button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Nike running shoes are known for their exceptional quality and
                performance. Designed with the latest technology and innovation,
                Nike running shoes offer a comfortable and supportive fit to
                enhance your running experience. Whether you are an avid runner
                or just starting out, Nike running shoes provide excellent
                cushioning and responsiveness, helping to reduce impact on your
                joints and improve your overall efficiency.
              </div>
              <div className="text-md mb-5">
                With a wide range of styles and designs to choose from, Nike
                running shoes cater to different types of runners and their
                specific needs. From lightweight options for speed and agility
                to more supportive models for stability, Nike has something for
                everyone.
              </div>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default ProjectDetails;
