import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import RelatedProduct from "@/components/RelatedProduct";
import SizeButton from "@/components/SizeButton";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchData } from "../utils/api";
import  ReactMarkdown from "react-markdown";
ProductCard;
const ProjectDetails = ({ product, products }) => {
  const p = product?.data[0].attributes;
  const router = useRouter();
  const { slug } = router.query;
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div className="w-full md:10 lg:py-20  ">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-24">
          <div className="w-full md:w-auto flex-[1.5] max-w-lg lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel images={p?.image?.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-4xl font-semibold mb-2">{p?.name}</div>
            <div className="text-lg font-semibold mb-5">{p?.subtitle}</div>
            <div className="flex items-center ">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377; {p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {Math.round(
                      ((p.original_price - p.price) / p.original_price) * 100
                    )}
                    % off
                  </p>
                </>
              )}
            </div>
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
              <div id="sizesGrid" className="grid grid-cols-3 gap-2 ">
                {p?.size?.data?.map((s, idx) => (
                  <SizeButton
                    isActive={s.size === selectedSize}
                    key={idx}
                    setSelectedSize={setSelectedSize}
                    isDisabled={!s.enabled}
                    size={s.size}
                  />
                ))}
              </div>
              {!selectedSize && (
                <div className="text-red-600 mt-1 ">
                  Please select a size to proceed
                </div>
              )}
            </div>
            <Button
              disabled={!selectedSize}
              onClick={() => {
                if (!selectedSize) {
                  document
                      .getElementById("sizesGrid")
                      .scrollIntoView({
                          block: "center",
                          behavior: "smooth",
                      });
                }
              }}
              className="  bg-black text-white hover:opacity-75"
            >
              Add To Cart
            </Button>
            <Button className="  bg-white text-black border border-black flex items-center justify-center gap-2 mb-10 ">
              Wishlist <IoMdHeartEmpty size={20} />
            </Button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5 markdown "><ReactMarkdown>{p.description}</ReactMarkdown></div>
            </div>
          </div>
        </div>
        <RelatedProduct products={products} />
      </Wrapper>
    </div>
  );
};

export default ProjectDetails;

export async function getStaticPaths() {
  const products = await fetchData("/api/products");
  const paths = products.data.map((p) => ({
    params: { slug: p?.attributes?.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchData(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchData(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );
  return {
    props: {
      product,
      products,
    },
  };
}
