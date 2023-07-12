import Herobanner from "@/components/Herobanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchData } from "../utils/api";


export default function Home({ products }) {
    return ( <
        >
        <
        main >
        <
        Herobanner / >
        <
        Wrapper >
        <
        div className = "text-center mx-auto max-w-[800px] my-[50px] md:my-[80px]" >
        <
        div className = "
        text - [28 px] md: text - [34 px] mx - auto my - [34 px] mb - 5 font - semibold leading - tight " >
        Cushioning For Your Miles <
        /div> <
        div className = "text-md md:text-xl" >
        A lightweight and responsive foam cushioning that provides a smooth and stable ride.It’ s durable enough to log the miles and comfortable enough to wear all day. <
        /div> <
        /div> <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0" > {
            products.data.map((product) => ( <
                ProductCard key = { product.id }
                product = { product }
                />
            ))
        } <
        /div> <
        /Wrapper> <
        /main>{" "} <
        />
    );
}

export async function getStaticProps() {
    const products = await fetchData("/api/products?populate=*");
    return {
        props: {
            products,
        },
    };
}