import React from "react";
import BannerImage from "@public/image 14.png";
import Image from "next/image";
import ArrowAnimation from "../svg/ArrowAnimation";

const Banner = () => {
  return (
    <div className="px-[65px] max-w-[1440px]">
      <div className="h-[660px] max-w-[1320px]  relative flex mt-12 justify-center items-center">
        <Image
          src={BannerImage}
          alt="Banner-Image"
          fill
          className="object-cover rounded-[24px]"
        />
        <div className="absolute bottom-7 right-16">
          <ArrowAnimation />
        </div>
        <div className="absolute left-[-78.7px] top-44">
          <h2 className="bg-[#232321] p-6 -rotate-90  rounded-b-2xl text-white font-rubik font-semibold text-[16px]">Rayban-Cool collection</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
