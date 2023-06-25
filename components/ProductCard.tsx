import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: {
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
    };
  };
};

function ProductCard({ product }: Props) {
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<span className="text-[#0ca50f] text-lg">★</span>);
  }

  return (
    <div className="space-y-2">
      <Link href={`/product/${product.slug}`}>
        <div className="p-16 bg-gray-100 rounded-lg cursor-pointer sm:p-12 lg:p-16">
          <Image
            src={product.featuredImage.url}
            alt={product.name}
            width={200}
            height={200}
            className="flex items-center justify-center w-full transition duration-200 ease-out transform scale-125 hover:scale-150"
          />
        </div>
      </Link>
      <div className="cursor-default">
        <div className="flex items-center justify-between text-lg font-semibold">
          <h1>
            {product.name.slice(0, 20)}
            {product.name.length > 20 && "..."}
          </h1>
          <p>
            <span className="text-span">$</span>
            {product.price}
            <span className="text-span">.00</span>
          </p>
        </div>
        <p className="text-sm font-light">
          {product.description.slice(0, 30)}...
        </p>
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {stars.map((star, index) => (
              <div key={index}>{star}</div>
            ))}
          </div>
          <span className="text-sm font-light">({product.rating})</span>
        </div>
      </div>
      <div>
        <button className="px-5 py-2 transition-all duration-500 border-2 border-black rounded-full hover:border-primary hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
