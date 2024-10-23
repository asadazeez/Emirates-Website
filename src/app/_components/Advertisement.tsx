"use client";
import React, { useState, useEffect, useRef } from "react";
import Women from "@public/newWomen.png";
import NewMen from "@public/newMEN.png";
import Image from "next/image";
import Arrow from "../svg/Arrow";
import { motion } from "framer-motion";
import { storageUrl } from "../utils/baseUrl";
type Props = {
  

  gallery:any
}

const Advertisement = ({gallery}:Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observedElement = ref.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); 
      },
      { threshold: 0.5 }
    ); 

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[#ECEEF0] text-[#2E2E2E] pt-14 pb-[76px] rubik-semibold text-2xl lg:text-3xl xl:text-[46px] px-5 sm:px-8 md:px-[70px] "
    >
      EXPLORE COLLECTIONS
      <div className="sm:flex pt-14">
        <div className="w-full lg:h-[665px] sm:h-[580px] h-[280px] relative">
          <Image
            src={storageUrl + gallery.at(0)?.image}
            fill
            alt="Men"
            className="sm:rounded-l-[20px] sm:rounded-tr-none rounded-t-[20px] sm:object-[-315px] object-[-50px] object-cover "
          />
          <div className="lg:text-[24px] text-lg absolute text-black p-9 rubik-medium">
            FOR MEN
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="xl:text-[36px] lg:text-3xl text-2xl rubik-semibold absolute bottom-9 md:px-9 px-5 text-white w-full items-center flex justify-between"
          >
            <h1 className="shrink-0 ">VIEW COLLECTION</h1>

            <Arrow className="xl:size-12 xl:p-2 lg:size-10 lg:p-2  hover:scale-110 transition duration-300 size-7 p-1 text-black bg-white rounded-lg " />
          </motion.div>
        </div>
        <div className="w-full lg:h-[665px] sm:h-[580px] h-[280px] relative">
          <Image
            src={storageUrl + gallery.at(1)?.image}
            fill
            alt="Women"
            className="sm:rounded-r-[20px] rounded-b-[20px] sm:rounded-bl-none md:object-[-1105px] sm:object-[-805px] object-[-355px] object-cover "
          />
          <div className="lg:text-[24px] text-lg absolute text-black p-9 rubik-medium">
            FOR WOMEN
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="xl:text-[36px] lg:text-3xl text-2xl rubik-semibold absolute bottom-9 md:px-9 px-5 text-white w-full items-center flex justify-between"
          >
            <h1 className="shrink-0">VIEW COLLECTION</h1>

            <Arrow className="xl:size-12 xl:p-2 lg:size-10 hover:scale-110 transition duration-300 lg:p-2 size-7 p-1 text-black bg-white rounded-lg " />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
