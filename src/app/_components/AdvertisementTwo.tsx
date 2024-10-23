/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
// import Men from "@public/image31.png";
// import Women from "@public/test4.png";
// import kylie from "@public/KYLIE.jpg";
// import maadan from "@public/MAADAN.jpg";
import NextArrow from "../svg/NextArrow";
import Arrow from "../svg/Arrow";
import { storageUrl } from "../utils/baseUrl";

type Props = {
  galleryTwo: any
};

// const gallery = [
//   {
//     name: "POLICE",
//     image: Men,
//   },
//   {
//     name: "GUCCI",
//     image: Women,
//   },
//   {
//     name: "PRADA",
//     image: maadan,
//   },
//   {
//     name: "DOLCE & GABBANA",
//     image: kylie,
//   },
// ];

const AdvertismentTwo = ({galleryTwo}:Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImages, setShowImages] = useState(true);
  const handleNext = () => {
    if (currentIndex + 2 < galleryTwo.length) {
      setShowImages(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 2);
        setShowImages(true);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 2 >= 0) {
      setShowImages(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 2);
        setShowImages(true); 
      }, 300);
    }
  };

  const currentImages = galleryTwo.slice(currentIndex, currentIndex + 2);

  return (
    <div className="bg-[#B2181E] pt-[50px] pb-12 sm:pb-0 rubik-semibold text-2xl lg:text-3xl xl:text-[46px] sm:px-8 px-5 md:px-[65px]">
      <div className="flex text-white justify-between items-center">
        <span>TOP BRANDS</span>
        <div className="flex pr-2 text-black gap-2 sm:gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-white xl:size-10 lg:size-8 size-7 flex justify-center items-center rounded-lg ${
              currentIndex === 0 ? "opacity-50" : "hover:bg-black/25"
            }`}
          >
            <NextArrow className="size-5 scale-x-[-1]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 2 >= galleryTwo.length}
            className={`bg-white xl:size-10 lg:size-8 size-7 flex justify-center items-center rounded-lg ${
              currentIndex + 2 >= galleryTwo.length
                ? "opacity-50"
                : "hover:bg-black/25"
            }`}
          >
            <NextArrow className="size-5" />
          </button>
        </div>
      </div>

      <div className="sm:flex pt-[50px] ">
        {currentImages.map((item:any, index: number) => {
          const globalIndex = currentIndex + index;
          const roundedClass =
            globalIndex % 2 === 0
              ? "sm:rounded-tl-[64px] rounded-tl-[24px] rounded-tr-[24px] sm:rounded-tr-[64px] sm:rounded-tr-none"
              : "sm:rounded-tr-[64px] sm:rounded-b-none rounded-b-[24px]";
          return (
            <CSSTransition
              key={index}
              in={showImages}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="sm:w-1/2 lg:h-[600px] sm:h-[540px] h-[280px] relative">
                <Image
                  src={storageUrl+ item.image}
                  fill
                  alt={item.name}
                  className={`${roundedClass} object-cover`}
                />
                <div className="xl:text-[36px]  lg:text-3xl text-2xl rubik-semibold absolute bottom-9 md:px-9 px-5  text-white w-full items-center flex justify-between">
                  <h1 className="shrink-0">{item.name}</h1>
                  <Arrow className="xl:size-12 xl:p-2 lg:size-10 lg:p-2 size-7 p-1 text-black  bg-white rounded-lg " />
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </div>
    </div>
  );
};

export default AdvertismentTwo;
