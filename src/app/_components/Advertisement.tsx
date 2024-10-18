import React from 'react'
import Men from "@public/Men.jpeg";
import Women from "@public/Women.jpeg";
import Image from 'next/image';
import Arrow from '../svg/Arrow';
const Advertisement = () => {
  return (
    <div className="bg-[#ECEEF0] text-[#2E2E2E] pt-10 pb-20 max-w-[1440px]  rubik-semibold text-[46px] px-[70px] ">
      EXPLORE COLLECTION
      <div className="flex pt-10">
        <div className="w-[645px]  h-[665px] relative">
          <Image
            src={Men}
            fill
            alt="Men"
            className="rounded-l-[20px] object-[-125px]  object-cover "
          />
          <div className="text-[24px] absolute text-black p-9 rubik-medium">
            FOR MEN
          </div>
          <div className="text-[36px] rubik-semibold absolute bottom-8 px-10  text-white w-full items-center flex justify-between">
            <h1>VIEW COLLECTION</h1>

            <Arrow className="size-12 p-2 text-black  bg-white rounded-lg " />
          </div>{" "}
        </div>
        <div className="w-[645px] h-[665px] relative">
          <Image
            src={Women}
            fill
            alt="Women"
            className="rounded-r-[20px] object-[-130px] object-cover "
          />
          <div className="text-[24px] absolute text-black p-9 rubik-medium">
            FOR WOMEN
          </div>{" "}
          <div className="text-[36px] rubik-semibold absolute bottom-6 px-8 text-white w-full flex justify-between">
            <h1>VIEW COLLECTION</h1>

            <Arrow className="size-12 p-2 text-black  bg-white rounded-lg " />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Advertisement