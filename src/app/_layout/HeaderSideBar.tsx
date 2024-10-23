import React from "react";
import logo from "@public/emiratesoptical-logo-2.png";
import Image from "next/image";
import { Divider } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5"
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {  } from "framer-motion";

type Props = {
  click: () => void;
};

const HeaderSideBar = ({ click }: Props) => {
  const Items = [
    { name: "Products", link: "#products" },
    { name: "Services", link: "/" },
    { name: "Brands", link: "/" },
    { name: "Award", link: "/" },
    { name: "About us", link: "/" },
    { name: "Stores", link: "/" },
  ];
  const router = useRouter()

  const logout = () => {
    window.localStorage.removeItem("accessToken");
    Cookies.remove("accessToken");
    router.push("/login");
    router.refresh();
  };


    return (
      <div
        onClick={click}
        className="w-[65%] bg-[#E7E7E3]  inset-0 fixed z-50 items-center"
      >
        <div className="flex justify-between items-center">
          <div className="w-[80%] h-28 mt-9 relative ">
            <Image src={logo} alt="logo" fill className="p-4" />
          </div>
          <div className="mt-10 pr-3">
            <IoCloseOutline size={24} color="black" onClick={click} />
          </div>
        </div>
        {Items.map((item) => (
          <>
            <div className="text-black p-4 font-sofia font-bold hover:text-red-700">
              <Link href={item.link} onClick={click}>
                {" "}
                {item.name}
              </Link>
            </div>
            <Divider />
          </>
        ))}
        <div className="text-black  font-sofia font-bold hover:text-red-700">
          {window.localStorage.getItem("accessToken") ? (
            <Link href={"/login"}> Login </Link>
          ) : (
            <>
              {" "}
              <button className="p-4">
                {" "}
                <Link href={"/profile-update"}>Profile Update</Link>
              </button >
              <Divider />
              <button onClick={logout} className="p-4">
                Logout
              </button>
            </>
          )}
        </div>
        <Divider />
      </div>
    );
};

export default HeaderSideBar;
