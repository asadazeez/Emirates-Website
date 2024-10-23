"use client";
import React, {  useState } from "react";
import HeaderItems from "./HeaderItems";
import SearchSvg from "../svg/SearchSvg";
import UserSvg from "../svg/UserSvg";
import MenuSvg from "../svg/MenuSvg";
import LogoSvg from "../svg/LogoHeader";
import Link from "next/link";
import HeaderSideBar from "./HeaderSideBar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter()


 

  const click = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const logout = () => {
window.localStorage.removeItem("accessToken");
    Cookies.remove("accessToken");
    router.push("/login")
    router.refresh()
  }


  return (
    <div className="md:px-[60px] sm:px-8  bg-[#E7E7E3] py-7 sm:py-9 md:py-12 ">
      <div className="bg-[#f2f2f2] flex items-center justify-between px-4 sm:px-9 sm:rounded-[20px] py-2 ">
        <Link href={"/"}>
          <LogoSvg />
        </Link>
        <div className="hidden lg:block">
          <HeaderItems />
        </div>
        <div className="flex items-center gap-3 xl:gap-10">
          <div>
            <SearchSvg className="hidden sm:block" />
          </div>
          <div className="flex gap-3 ">
            <Menu>
              <MenuButton>
                <UserSvg className="hidden sm:block" />
              </MenuButton>
              <MenuItems
                anchor="bottom end"
                className="flex flex-col w-fit px-5 bg-white shadow-lg rounded-md absolute right-0 mt-2 p-2"
              >
                {window.localStorage.getItem("accessToken") ? (
                  <>
                    <MenuItem>
                      <button
                        className="text-black font-sofia text-lg items-center gap-3 py-2 flex"
                        onClick={logout}
                      >
                        <CiLogout className="size-6" />
                        Logout
                      </button>
                    </MenuItem>
                    <Divider />

                    <MenuItem>
                      <Link
                        className="text-black font-sofia text-lg items-center gap-3 py-2 flex"
                        href="/profile-update"
                      >
                        <FaUserEdit className="size-6" />
                        Profile Update
                      </Link>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    <Link
                      className="text-black font-sofia text-lg items-center gap-3 py-2 flex"
                      href="/login"
                    >
                      <CiLogin className="size-6" />
                      Login
                    </Link>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
            <div>
              <MenuSvg onClick={click} className="size-6 block lg:hidden" />
            </div>
          </div>
        </div>
      </div>
      {sidebarOpen && <HeaderSideBar click={click} />}
    </div>
  );
};

export default Header;
