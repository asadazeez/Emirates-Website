import React from 'react'
import FeaturedCard from './FeaturedCard';

import Image from "next/image";
import Advertisement from "@public/new.jpg";
import { frontendApi } from '../apis/apis';







const FeaturedProducts = async () => {

  const response = await frontendApi.getHomepage()
  const featuredProducts = response.data.data.offerProduct;
  return (
    <div className=" md:px-[70px] px-5 sm:px-8  pb-12">
      <div className="relative h-24  sm:h-[200px] mt-12">
        <Image
          src={Advertisement}
          fill
          alt="Ad"
          className="object-cover  rounded-[20px]"
        />
        <div className="rubik-semibold md:flex-row flex flex-col gap-2 sm:px-[50px] shrink-0 md:justify-between text-center justify-center text-[20px]  w-full h-full sm:text-4xl lg:text-[60px] items-center text-white absolute xl:text-[74px]">
          <div> BUY 1 GET 1 FREE</div>

          <button className="text-[#CC0033] text-xs  sm:text-[16px] rubik-medium xl:py-2 rounded-[24px] hover:bg-black lg:px-7 lg:py-2 px-5 py-1  bg-white xl:px-[38px]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="grid   gap-4 pt-8 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((item: any, index: number) => (
          <FeaturedCard
            key={index}
            image={item.image}
            name={item.name}
            brand={item.brandName}
            price={item.price}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts