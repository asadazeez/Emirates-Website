import React from 'react'
import FeaturedCard from './FeaturedCard';
import { frontendApi } from '../apis/apis';

const Products = async () => {

  const response = await frontendApi.getHomepage();
  const allProducts = response.data.data.products;


  return (
    <div id='products' className="bg-[#E7E7E3] pt-14 px-8  md:px-[65px]   ">
      <div className="flex text-[#2E2E2E] items-center justify-between  rubik-semibold text-2xl lg:text-3xl xl:text-[46px]">
        {" "}
        PRODUCTS{" "}
        <div className="flex justify-center items-center">
          <button className="text-[#CC0033] bg-white hover:bg-[#2e2e2e] xl:py-4 lg:py-2 lg:px-6 xl:px-8 py-1 px-4 rubik-medium text-xs lg:text-[14px] rounded-[20px]">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="grid   gap-4 pt-12 md:grid-cols-2 xl:grid-cols-4">
        {allProducts.map((item: any, index: number) => (
          <FeaturedCard
            key={index}
            image={item.image}
            name={item.name}
            brand={item.brand}
            price={item.price}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Products