import React from 'react'
import DropDown from '../svg/Dropdown';
import Link from 'next/link';

const HeaderItems = () => {

    const Items = [
      { name: "Products", link: "#products" },
      { name: "Services", link: "/" },
      { name: "Brands", link: "/" },
      { name: "Award", link: "/" },
      { name: "About us", link: "/" },
      { name: "Stores", link: "/" },
    ];



  return (
    <div className="flex md:gap-3 xl:gap-8 justify-center px-3 h-full">
      {Items.map((item, index: number) => (
        <div
          className="flex font-sofia text-[#2e2e2e] h-fit hover:text-red-700  md:gap-1 items-center shrink-0  justify-center"
          key={index}
        >
          <Link href={item.link}>{item.name}</Link>
          <div>
            <DropDown className="size-3 " />
          </div>{" "}
        </div>
      ))}
    </div>
  );
}

export default HeaderItems