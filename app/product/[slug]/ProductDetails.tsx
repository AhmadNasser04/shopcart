import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";

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
      name: string;
    };
  };
};

function ProductDetails({ product }: Props) {
  const [count, setCount] = useState<number>(1);
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<span className="text-[#0ca50f] text-lg">★</span>);
  }

  const increaseCount = () => {
    if (count < product.quantity) {
      setCount((prev) => prev + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full space-y-5">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <div className="space-y-2">
        <p>{product.description}</p>
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {stars.map((star, index) => (
              <div key={index}>{star}</div>
            ))}
          </div>
          <p>
            <span className="font-light">({product.rating})</span>
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <div className="w-full h-0.5 bg-gray-200" />
        <div className="space-y-3">
          <h1 className="text-3xl">
            ${product.price}.00 or ${Math.floor(product.price / 6)}
            .99/month
          </h1>
          <p className="font-light">
            Suggested payments with 6 months special financing
          </p>
        </div>
        <div className="w-full h-0.5 bg-gray-200" />
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center gap-5 px-5 py-2 space-x-5 text-lg bg-gray-200 rounded-full w-fit">
          <button
            className="text-4xl transition-all font-extralight hover:text-primary"
            onClick={decreaseCount}
          >
            -
          </button>
          <h1 className="w-4 text-2xl text-primary">{count}</h1>
          <button
            className="text-4xl transition-all font-extralight hover:text-primary"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
        <div>
          {product.quantity < 20 && "Only"}{" "}
          <span className="text-[#0ca50f] ">
            {product.quantity > 1000 ? "Over a thousand" : product.quantity}{" "}
            Items
          </span>{" "}
          Left!
          <br />
          Dont miss out
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div>
          <button className="px-16 py-4 text-white transition-all duration-500 border-2 rounded-full border-primary hover:border-black bg-primary hover:bg-black">
            Buy Now
          </button>
        </div>
        <div>
          <button className="px-16 py-4 transition-all duration-500 border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white">
            Add Cart
          </button>
        </div>
      </div>
      <div>
        <div className="flex p-5 space-x-2 border-2 border-b-0 border-gray-200 rounded-t-lg">
          <div className="text-3xl text-primary">
            <CiDeliveryTruck />
          </div>
          <div>
            <div>Free Delivery</div>
            <div className="font-light underline cursor-pointer">
              Enter your postal code for Delivery Availability
            </div>
          </div>
        </div>
        <div className="flex p-5 space-x-2 border-2 border-gray-200 rounded-b-lg">
          <div className="text-3xl text-primary">
            <BsBoxSeam />
          </div>
          <div>
            <div>Return Delivery</div>
            <div className="font-light">
              Free 30 days Delivery Returns.{" "}
              <span className="underline cursor-pointer">Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
