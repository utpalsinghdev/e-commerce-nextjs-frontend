import Herobanner from "@/components/Herobanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <main>
        <Herobanner />
        <Wrapper>
          <div className="text-center mx-auto max-w-[800px] my-[50px] md:my-[80px]">
            <div className="
            text-[28px] md:text-[34px] mx-auto my-[34px] mb-5 font-semibold leading-tight ">Cushioning For Your Miles</div>
            <div className="text-md md:text-xl">
              A lightweight and responsive foam cushioning that provides a
              smooth and stable ride. It’s durable enough to log the miles and
              comfortable enough to wear all day.
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
      </main>{" "}
    </>
  );
}
