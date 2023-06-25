import Image from "next/image";
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

function SearchCard({ product }: Props) {
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<span className="text-[#0ca50f] text-lg">★</span>);
  }

  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex items-center justify-between w-full space-x-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 h-16">
            <Image
              src={product.featuredImage.url}
              alt={product.name}
              width={64}
              height={64}
              className="bg-gray-200 rounded-full"
            />
          </div>
          <div>
            <h1>{product.name}</h1>
          </div>
        </div>
        <div>
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
          <h1>
            <span className="text-span">$</span>
            {product.price}
            <span className="text-span">.00</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
