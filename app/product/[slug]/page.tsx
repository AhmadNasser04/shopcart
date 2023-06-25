"use client";
import React, { useState, useEffect } from "react";
import { getProduct } from "@/services";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

type product = {
  id: string;
  description: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  slug: string;
  featuredImage: {
    url: string;
  };
  category: {
    id: string;
    name: string;
  };
};

function Home({ params }: Props) {
  const { slug } = params;

  const [product, setProduct] = useState<product>({
    id: "",
    description: "",
    name: "",
    price: 0,
    quantity: 0,
    rating: 0,
    slug: "",
    featuredImage: {
      url: "",
    },
    category: {
      id: "",
      name: "",
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const newProducts = await getProduct(slug);
      setProduct(newProducts);
    };

    fetchProduct();
  }, [slug]);

  return (
    <div className="flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="w-full space-y-10">
          <div className="font-light text-gray-600 cursor-default">
            <Link href={"/"}>Home</Link> / {product.category.name} /{" "}
            <span className="text-black font-base">{product.name}</span>
          </div>
          <div className="flex xl:space-x-16">
            <div className="hidden w-1/2 bg-gray-100 rounded-lg xl:inline-block">
              <Image
                src={product.featuredImage.url}
                alt={product.slug}
                width={200}
                height={200}
                className="flex items-center justify-center w-full"
              />
            </div>
            <div className="xl:w-1/3">
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
