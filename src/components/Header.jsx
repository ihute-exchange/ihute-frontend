import React from "react";
import { LuBell, LuMenu, LuPlus, LuSearch, LuX } from "react-icons/lu";

function Header({ title, openSidebar }) {
  return (
    <div className="flex items-center justify-between text-lightBlackText p-4 border-b">
      <div onClick={openSidebar} className="flex items-center gap-1">
        <button className="text-3xl p-1 rounded-md hidden max-lg:flex">
          <LuMenu />
        </button>
        <h1 className="text-2xl font-semibold text-lightBlackText/80">
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-end">
        <button className="text-lightBlackText/50 hover:text-mainColor p-2 h-[35px] max-md:h-[45px] aspect-square flex items-center justify-center hover:bg-stone-200/50 rounded-xl">
          <LuSearch className="text-xl max-md:text-2xl" />
        </button>
        <button className="text-lightBlackText/50 hover:text-mainColor p-1 h-[35px] max-md:h-[45px] aspect-square flex items-center justify-center hover:bg-stone-200/50 rounded-xl">
          <LuBell className="text-xl max-md:text-2xl" />
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
