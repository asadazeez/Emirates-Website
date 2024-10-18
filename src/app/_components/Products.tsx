import React from 'react'
import FeaturedCard from './FeaturedCard';

const Products = () => {
  return (
    <div className="bg-[#ECEEF0] pt-10 max-w-[1440px]    ">
      <div className="flex text-[#2E2E2E] justify-between px-[65px] rubik-semibold text-[46px]">
        {" "}
        PRODUCTS{" "}
        <div className="flex justify-center items-center">
          <button className="text-[#CC0033] bg-white hover:bg-[#2e2e2e] py-3 px-8 rubik-medium text-[14px] rounded-[20px]">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="grid  py-10 px-[60px] gap-2 grid-cols-4">
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
        <FeaturedCard sale offer />
      </div>
    </div>
  );
}

export default Products