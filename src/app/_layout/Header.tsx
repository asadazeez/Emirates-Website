import React from 'react'
import HeaderItems from './HeaderItems';
import SearchSvg from '../svg/SearchSvg';
import UserSvg from '../svg/UserSvg';
import MenuSvg from '../svg/MenuSvg';
import LogoSvg from '../svg/LogoHeader';

const Header = () => {
    return (
      <div className="px-[60px] ">
        <div className="bg-[#f2f2f2] flex max-w-[1320px]  justify-between px-9 rounded-[20px] py-2 ">
          
          <LogoSvg/>
          <div className='hidden lg:block'>
            <HeaderItems />
          </div>
          <div className="flex justify-between items-center gap-2 xl:gap-10">
            <div><MenuSvg className='size-6 block lg:hidden'/></div>
            <div>
              <SearchSvg />
            </div>
            <div>
              <UserSvg />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header