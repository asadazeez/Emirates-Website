import React from 'react'
import Men from "@public/image 31.png";
import Women from "@public/test4.png"
import Image from "next/image";

import NextArrow from '../svg/NextArrow';
import Arrow from '../svg/Arrow';



const AdvertismentTwo = () => {
    return (
      <div className="bg-[#B2181E] pt-[50px] max-w-[1440px] rubik-semibold text-[46px] px-[70px]  ">
        <div className="flex text-white  justify-between items-center">
          {" "}
          TOP BRANDS{" "}
          <div className="flex pr-2 text-black gap-3 ">
            <button className="bg-white/50 size-10 hover:bg-black/25 flex justify-center items-center rounded-lg">
              <NextArrow className="size-5 scale-x-[-1] " />
            </button>{" "}
            <button className="bg-white size-10 flex hover:bg-black/25 justify-center items-center rounded-lg">
              <NextArrow className="size-5" />
            </button>
          </div>{" "}
        </div>
        <div className="flex pt-10">
          <div className="w-[645px]  h-[580px] relative">
            <Image
              src={Men}
              fill
              alt="Men"
              className="rounded-tl-[20px] object-left object-cover "
            />
            <div className="text-[36px] rubik-semibold absolute bottom-8 px-10 text-white w-full flex justify-between">
              <h1>POLICE</h1>

              <Arrow className="size-12 p-2 text-black  bg-white rounded-lg " />
            </div>{" "}
          </div>
          <div className="w-[645px] h-[580px] relative">
            <Image
              src={Women}
              fill
              alt="Women"
              className="rounded-tr-[20px] object-cover "
            />
            <div className="text-[36px] rubik-semibold absolute bottom-6 px-8 text-white w-full flex justify-between">
              <h1>GUCCI</h1>

              <Arrow className="size-12 p-2 text-black  bg-white rounded-lg " />
            </div>{" "}
          </div>
        </div>
      </div>
    );
}

export default AdvertismentTwo