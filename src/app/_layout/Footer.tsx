import React from 'react'
import logo from "@public/emiratesoptical-logo-2 white.png";
import Image from 'next/image';
import Facebook from '../svg/Facebook';
import Twitter from '../svg/Twitter';
import Instagram from '../svg/Instagram';
import TikTok from '../svg/TikTok';
import LogoFooter from '../svg/LogoFooter';

const Footer = () => {
  return (
    <div className="px-[60px] max-w-[1440px]  bg-[#ECEEF0] ">
      <div className="bg-[#B2181E] rounded-t-[48px] px-[58px] py-10 pb-16 rounded- max-w-[1440px] flex justify-between">
        <h2 className="text-[72px] rubik-semibold max-w-[520px] leading-none text-white flex">
          THE EYE WEAR YOU NEED
        </h2>

        <div className="h-[134px] w-[417px] relative">
          <Image src={logo} fill alt="logo" />
        </div>
          {/* <LogoFooter/> */}
      </div>

      <div className="bg-[#232321] z-50 -mt-10 rounded-t-[48px] px-14 py-10 flex gap-4 justify-between  text-white ">
        <div >
          <h1 className="rubik-semibold text-[36px]">Order Online</h1>
          <p className="text-[20px]">
            Find your perfect eyewear match at Emirates Optical Store's online
            platform. With a wide range of high-quality options from top brands,
            shopping for eyewear has never been easier. Shop now and elevate
            your style
          </p>
        </div>
        <div className="flex  space-y-1 w-full text-[20px] flex-col">
          <h1 className="rubik-semibold pb-2 text-[24px]">Categories</h1>
          <p>SUNGLASSES</p>
          <p>FRAMES</p>
          <div className="shrink-0">OPHTHALMIC LENS</div>
          <p>CONTACT LENS</p>
        </div>
        <div className="flex text-[20px] w-full space-y-1 flex-col">
          <h1 className="rubik-semibold pb-2 text-[24px]">Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex  flex-col rubik-semibold shrink-0 text-[24px]">
          Follow us
          <div className="flex w-full pt-3 gap-4 justify-center">
            <Facebook className="size-7" />{" "}
            <Twitter className="size-[22px] mt-[5px]" />{" "}
            <Instagram className="size-8" />{" "}
            <TikTok className="size-5 mt-[5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer