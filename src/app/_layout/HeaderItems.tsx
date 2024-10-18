import React from 'react'
import DropDown from '../svg/Dropdown';

const HeaderItems = () => {

    const Items = [
        
        { name: "Products" },
        { name: "Services" },
        { name: "Brands" },
        { name: "Award" },
        {name:"About us"},
{name:"Stores"}
    ]



  return (
    <div className="flex md:gap-5 xl:gap-8 justify-center px-3 h-full">
      {Items.map((item, index: number) => (
        <div
          className="flex font-sofia text-[#2e2e2e] md:gap-2 items-center shrink-0  justify-center"
          key={index}
        >
          {item.name}{" "}
          <div>
            <DropDown className="size-3 " />
          </div>{" "}
        </div>
      ))}
    </div>
  );
}

export default HeaderItems