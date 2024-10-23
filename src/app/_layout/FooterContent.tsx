"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";

const FooterContent = () => {
  const text = `Find your perfect eyewear match at Emirates Optical Store's online platform. 
  With a wide range of high-quality options from top brands, shopping for eyewear has never been easier. 
  Shop now and elevate your style. This text can be quite long, and to ensure a clean design, 
  it can be truncated. You can add more content here to test the read more feature.`;

  return (
    <div className="block sm:hidden">
      <div className="rubik-semibold text-xl ">Order Online</div>
      <Disclosure>
        {({ open }) => (
          <>
            <p
              className={`text-base  ${
                open ? "" : "line-clamp-1"
              }`}
            >
              {text}
            </p>
            <Disclosure.Button className="text-white mt-2 focus:outline-none">
              {open ? "Read Less" : "Read More"}
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FooterContent;
