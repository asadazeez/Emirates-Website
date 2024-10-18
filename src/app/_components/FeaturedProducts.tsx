import React from 'react'
import FeaturedCard from './FeaturedCard';

import Image from "next/image";
import Advertismnet from "@public/new.jpg";







const FeaturedProducts = () => {
  return (
    <div className=" px-[70px] max-w-[1440px] pb-12">
      <div className="relative max-w-[1320px] h-[200px] mt-12">
        <Image
          src={Advertismnet}
          fill
          alt="Ad"
          className="object-cover  rounded-[20px]"
        />
        <div className="rubik-semibold flex px-[50px] justify-between w-full h-full items-center text-white absolute text-[74px]">
          <div> BUY 1 GET 1 FREE</div>

          <button className="text-[#CC0033] text-base rubik-medium py-3 rounded-[20px] hover:bg-black  bg-white  px-[30px]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="grid   gap-6 pt-8  grid-cols-4">
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
      </div>
    </div>
  );
}

export default FeaturedProducts