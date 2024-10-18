import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
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

function Header({ title, openSidebar }) {
  return (
    <div className="flex items-center justify-between text-lightBlackText p-4 sticky top-0 bg-white z-20 border-b border-stone-100">
      <div className="flex items-center gap-2">
        <button onClick={openSidebar} className="text-3xl p-1 rounded-md hidden max-lg:flex text-lightBlackText/60">
          <HiMenuAlt2 />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl max-md:text-base font-medium text-lightBlackText/80">
            Good Morning, Kevin!
          </h1>
          <h1 className="text-sm font-medium text-lightBlackText/60">
            You have <span className="text-mainColor">23 unread</span>{" "}
            notifications
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1">
        <button className="text-lightBlackText/50 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-lg:bg-stone-100 hover:bg-stone-100 rounded-xl">
          <LuSearch className="text-xl" />
        </button>
        <button className=" max-sm:hidden text-lightBlackText/50 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center hover:bg-stone-100 rounded-xl">
          <LuUserPlus2 className="text-2xl" />
        </button>
        <button className=" max-sm:hidden text-lightBlackText/50 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center hover:bg-stone-100 rounded-xl">
          <IoCardOutline className="text-2xl" />
        </button>

        <div></div>
      </div>
    </div>
  );
}

export default Header;
