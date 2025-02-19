import React from "react";
import { FiCommand } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { ImCommand } from "react-icons/im";
import { IoCardOutline } from "react-icons/io5";
import {
  LuBell,
  LuMenu,
  LuPlus,
  LuSearch,
  LuUserPlus,
  LuUserPlus2,
  LuX,
} from "react-icons/lu";
import { IhuteLogo } from "../assets/index";
import { TbLogout } from "react-icons/tb";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


function Header({ title, openSidebar }) {
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove("usr");
    navigate('/login')
  };

  return (
    <div className="flex items-center justify-between text-lightBlackText p-4 sticky top-0 bg-white z-20">
      <div className="flex items-center gap-2 max-sm:gap-0">
        <button
          onClick={openSidebar}
          className="text-3xl p-1 rounded-md hidden max-lg:flex text-lightBlackText/60"
        >
          <HiMenuAlt2 />
        </button>
        {title ? (
          <h1 className="text-xl max-lg:text-2xl font-medium text-lightBlackText/80 max-sm:hidden">
            {title}
          </h1>
        ) : (
          <div className="flex flex-col max-sm:hidden">
            <h1 className="text-sm font-medium tracking-tight text-lightBlackText/80">
              Good Morning, Kevin!
            </h1>
          </div>
        )}
        <img src={IhuteLogo} className="hidden max-sm:flex h-7" />
      </div>
      <div className="flex items-center justify-end gap-0">
        <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-stone-100 hover:bg-stone-100 rounded-xl">
          <LuSearch className="text-xl" />
        </button>
        <button
          onClick={handleLogout}
          className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-stone-100 hover:bg-stone-100 rounded-xl"
        >
          <TbLogout className="text-xl" />
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
