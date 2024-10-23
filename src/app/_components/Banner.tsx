import React from "react";
import BannerImage from "@public/image 14.png";
import Image from "next/image";
import ArrowAnimation from "../svg/ArrowAnimation";
import { frontendApi } from "../apis/apis";
import { storageUrl } from "../utils/baseUrl";

const Banner = async () => {

  const response = await frontendApi.getHomepage()
  const bannerData = response.data.data.banner;

  return (
    <div className="md:px-[65px] px-5 sm:px-8">
      <div className="sm:h-[560px] h-[340px] w-full md:h-[660px] relative flex  justify-center items-center">
        <Image
          src={
            bannerData && bannerData.image.length > 0
              ? storageUrl + bannerData.image
              : BannerImage
          }
          alt="Banner-Image"
          fill
          className="object-cover rounded-[24px]"
        />
        <div className="absolute bottom-2 lg:bottom-7 right-2 sm:right-16">
          <ArrowAnimation />
        </div>
        <div className="absolute md:left-[-82.4px] top-28  left-[-60px] md:top-44">
          <h2 className="bg-[#232321] md:p-6 -rotate-90 p-3 rounded-b-2xl text-white font-rubik font-semibold text-xs md:text-[16px]">
            Rayban-Cool collection
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
