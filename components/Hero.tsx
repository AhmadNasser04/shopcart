import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="container bg-[#fcf0e4] p-10 md:p-0 rounded flex items-center justify-evenly">
        <div className="space-y-5 lg:space-y-10">
          <h1 className="text-2xl font-semibold lg:text-5xl text-primary">
            Allow the music to play <br /> and the rhythm to move you
          </h1>
          <button className="px-6 py-3 font-semibold text-white transition-all duration-500 rounded-full lg:py-5 bg-primary lg:px-11 hover:bg-black">
            <Link href="#products">Buy Now</Link>
          </button>
        </div>
        <div className="hidden md:inline-block">
          <Image
            src="https://media.graphassets.com/ufGm7WxT5KLv5lhGEOay"
            alt="hero-image"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
