import React from "react";
import FeaturedCard from "./FeaturedCard";

const Lens = () => {
  return (
    <div className="bg-[#ECEEF0] pt-2 max-w-[1440px]    ">
      <div className="flex text-[#2E2E2E] justify-between px-[65px] rubik-semibold text-[46px]">
        {" "}
        LENS{" "}
        <div className="flex justify-center items-center">
          <button className="text-[#CC0033] bg-white py-3 px-8 rubik-medium hover:bg-[#2e2e2e] text-[14px] rounded-[20px]">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="grid gap-2 py-10 px-[60px] grid-cols-4">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default Lens;
