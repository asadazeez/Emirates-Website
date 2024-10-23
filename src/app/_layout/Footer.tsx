import React from 'react'
import logo from "@public/logowhite.png";
import Image from 'next/image';
import FooterItems from './FooterItems';
import FooterContent from './FooterContent';

const Footer = () => {
  return (
    <div className="md:px-[60px]  sm:px-8  bg-[#E7E7E3] ">
      <div className="bg-[#B2181E] sm:rounded-t-[48px] sm:px-14 sm:pt-10 px-10 pt-7 pb-16  items-center  sm:flex justify-between">
        <div className="lg:h-[134px] lg:w-[417px] sm:w-[370px] sm:hidden w-full h-[115px] relative">
          <Image src={logo} fill alt="logo " className="px-2" />
        </div>
        <div className="xl:text-[72px] pt-3 sm:pt-0 lg:text-[60px] xl:max-w-[550px] sm:text-[48px] text-2xl rubik-semibold justify-center text-center sm:text-start  leading-none text-white flex">
          THE EYE WEAR YOU NEED
        </div>

        <div className="lg:h-[134px] lg:w-[417px] sm:w-[370px] hidden sm:block   w-full h-[115px] relative">
          <Image src={logo} fill alt="logo" />
        </div>
      </div>

      <div className="bg-[#232321] z-50 -mt-10 rounded-t-[48px] sm:px-14 px-10 py-7 sm:py-10 lg:flex  gap-8  text-white ">
        <div className="hidden sm:block">
          <h1 className="rubik-semibold text-[36px]">Order Online</h1>
          <p className="text-[20px] pt-3 lg:max-w-[700px] ">
            Find your perfect eyewear match at Emirates Optical Store&apos;s
            online platform. With a wide range of high-quality options from top
            brands, shopping for eyewear has never been easier. Shop now and
            elevate your style
          </p>
        </div>
        <FooterContent />
        <FooterItems />
      </div>
    </div>
  );
}

export default Footer