import Image from "next/image";
import React from "react";
import ImageTest from "@public/audio-m-2.jpg";
import ViewSvg from "../svg/View";
import { storageUrl } from "../utils/baseUrl";

type Props = {
  image: string;
  name: string;
  brand: string;
  price: number;
  offerPrice?: string;
};

const FeaturedCard = ({ image, name, brand, price, offerPrice }: Props) => {
  return (
    <div className="relative group">
      <div className="w-full flex items-center rounded-t-[24px] sm:pt-[3px] md:pt-0 lg:pt-[3px] xl:pt-0 space-y-1 flex-col bg-white">
        <div className="w-[95%] h-[338px] mt-2 relative">
          <Image
            src={storageUrl + image}
            fill
            className="object-cover rounded-[24px]"
            alt="Product Image"
          />
          {offerPrice && (
            <div className="lg:w-[58px] lg:h-[38px] h-[46px] w-[66px] bg-[#CC0033] absolute rounded-tl-3xl rounded-br-3xl ">
              <div className="absolute flex rubik-medium lg:text-xs text-base text-white h-full items-center w-full justify-center">
                Sale
              </div>
            </div>
          )}
          <div className="flex text-black absolute bottom-2 w-full text-xs justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white flex px-5 py-[2px] rounded-full">
              <ViewSvg className="size-4" />
              <p className="ml-1">View Product</p>
            </div>
          </div>
        </div>
        <div className="w-full rubik-semibold text-[#888888] pt-3 pl-3">
          {brand}
        </div>
        <div className="w-full text-black rubik-medium pb-3 pl-3">{name}</div>
      </div>
      <button className="w-full">
        <div className="h-[48px] bg-[#393939] rubik-semibold text-[20px] rounded-b-[24px] text-white justify-center gap-2 flex flex-row-reverse items-center w-full ">
          {offerPrice ? (
            <>
              <p className="text-[12px] line-through">{price}.00 AED</p>
              <p className="text-[20px]">{offerPrice}.00 AED</p>
            </>
          ) : (
            <p>{price}.00 AED</p>
          )}
        </div>
      </button>
    </div>
  );
};

export default FeaturedCard;
