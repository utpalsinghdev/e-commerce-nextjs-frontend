/* eslint-disable @next/next/no-img-element */
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
ProductCard;
import useSWR from "swr";
import { fetchData } from "../utils/api";

const Category = ({ products, category, slug }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const {query} = useRouter();
  useEffect(() => {
    setPageIndex(1);
  }, [query]);
  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][caterogies][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=3`,
    fetchData,
    {
      fallbackData: products,
    }
  );

  return (
    <div className="w-full md:py-20 ">
      <Wrapper>
        <div className="text-center mx-auto mt-8 md:mt-0 max-w-[800px]">
          <div className="leading-tight font-semibold mb-5 text-[28px] md:text-[34px]">
            {category?.data[0]?.attributes?.name}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > 3 && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" alt="loading..." width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = await fetchData("/api/caterogies");
  const paths = categories.data.map((category) => ({
    params: { slug: category?.attributes?.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchData(
    `/api/caterogies?filters[slug][$eq]=${slug}`
  );
  const products = await fetchData(
    `/api/products?populate=*&[filters][caterogies][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=3`
  );
  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
