import Image from "next/image";
import React from "react";
import ImageTest from "@public/audio-m-2.jpg";
import ViewSvg from "../svg/View";

type Props = {
  sale?: boolean;
  offer?: boolean;
};

const FeaturedCard = ({ sale, offer }: Props) => {
  return (
   
      <div className="relative group">
        <div className="w-[316px] flex items-center rounded-t-[24px] space-y-1 flex-col bg-white">
          <div className="w-[298px] h-[338px] mt-2 relative">
            <Image
              src={ImageTest}
              fill
              className="object-cover rounded-[24px]"
              alt="Product Image"
            />
            {sale && (
              <div className="w-[58px] h-[38px] bg-[#CC0033] absolute rounded-tl-3xl rounded-br-3xl ">
                <div className="absolute flex rubik-medium text-xs text-white h-full items-center w-full justify-center">
                  Sale
                </div>
              </div>
            )}
            <div className="flex text-black absolute bottom-2 right-20 text-xs justify-center items-center opacity-0  group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white flex px-5 py-[2px] rounded-full">
                <ViewSvg className="size-4" />
                <p className="ml-1">View Product</p>
              </div>
            </div>
          </div>
          <div className="w-full rubik-semibold text-[#888888] pt-3 pl-2">
            Ray-ban
          </div>
          <div className="w-full text-black rubik-medium pb-3 pl-2">
            Ray-Ban RB 4287 6018G
          </div>
        </div>
        <button>
          <div className="h-[48px] bg-[#393939] rubik-semibold text-[20px] rounded-b-[24px] text-white justify-center gap-2 flex items-center w-[316px]">
            <p> 718.00 AED</p>
            {offer && <p className="text-[12px] line-through">748.00 AED</p>}
          </div>
        </button>
      </div>
   
  );
};

export default FeaturedCard;
