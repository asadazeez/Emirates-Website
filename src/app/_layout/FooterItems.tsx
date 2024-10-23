"use client"
import React from "react";
import Facebook from "../svg/Facebook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";
import TikTok from "../svg/TikTok";
import {  Divider} from "@mui/material";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaSortDown } from "react-icons/fa";

const FooterItems = () => {
  return (
    <div className="w-full">
      <div className="block lg:hidden">
        <Disclosure>
          <DisclosureButton className="flex items-center justify-between w-full py-2">
            <h1 className="rubik-semibold text-lg sm:text-[24px]">
              Categories
            </h1>
            <FaSortDown />
          </DisclosureButton>
          <DisclosurePanel className="space-y-2 text-base">
            <p>SUNGLASSES</p>
            <p>FRAMES</p>
            <div>OPHTHALMIC LENS</div>
            <p>CONTACT LENS</p>
          </DisclosurePanel>
        </Disclosure>
        <Divider sx={{ backgroundColor: "white", opacity: "30%" }} />

        <Disclosure>
          <DisclosureButton className="flex items-center justify-between w-full py-2">
            <h1 className="rubik-semibold text-lg sm:text-[24px]">Company</h1>
            <FaSortDown />
          </DisclosureButton>
          <DisclosurePanel className="space-y-2">
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </DisclosurePanel>
        </Disclosure>
        <Divider sx={{ backgroundColor: "white", opacity: "30%" }} />

        <Disclosure>
          <DisclosureButton className="flex items-center justify-between w-full py-2">
            <h1 className="rubik-semibold text-lg sm:text-[24px]">Follow us</h1>
            <FaSortDown />
          </DisclosureButton>
          <DisclosurePanel>
            <div className="flex gap-4 pt-3">
              <Facebook className="size-7" />
              <Twitter className="size-[22px] mt-[5px]" />
              <Instagram className="size-8" />
              <TikTok className="size-5 mt-[5px]" />
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Divider sx={{ backgroundColor: "white", opacity: "30%" }} />
      </div>

      <div className="hidden lg:flex justify-between w-full gap-5">
        <div className="flex space-y-1 w-full text-[20px] flex-col">
          <h1 className="rubik-semibold pb-2 text-[24px]">Categories</h1>
          <p>SUNGLASSES</p>
          <p>FRAMES</p>
          <div>OPHTHALMIC LENS</div>
          <p>CONTACT LENS</p>
        </div>

        <div className="flex text-[20px] w-full space-y-1 flex-col">
          <h1 className="rubik-semibold pb-2 text-[24px]">Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex flex-col rubik-semibold shrink-0 text-[24px]">
          <h1 className="rubik-semibold pb-2 text-[24px]">Follow us</h1>
          <div className="flex gap-4 lg:justify-center">
            <Facebook className="size-7" />
            <Twitter className="size-[22px] mt-[5px]" />
            <Instagram className="size-8" />
            <TikTok className="size-5 mt-[5px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
