import React from "react";
import { IhuteLogo } from "../assets";
import { LuBadgeAlert, LuChevronsLeftRight, LuChevronUp, LuGauge, LuHistory, LuPanelLeftClose, LuPieChart, LuPlus, LuSearch, LuSettings, LuUserPlus, LuUserPlus2, LuUsers2, LuWalletCards } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation()
  return (
    <div className="w-[250px] h-full flex flex-col bg-lightBodySecondBg text-lightBlackText ">
      <div className="flex items-center justify-between p-4">
        <img src={IhuteLogo} className="h-6 w-fit" />
        <div className="flex items-center justify-end">
          <button className="text-lightBlackText/50 hover:text-mainColor p-2 hover:bg-stone-200/50 rounded-xl h-[35px] aspect-square flex items-center justify-center">
            <LuSearch className="text-xl" />
          </button>
          <button className="text-lightBlackText/50 hover:text-mainColor p-1 hover:bg-stone-200/50 rounded-xl h-[35px] aspect-square flex items-center justify-center">
            <LuUserPlus className="text-xl" />
          </button>
        </div>
      </div>
      {/* middle links */}
      <div className="flex-1 flex flex-col px-4 gap-1 select-none">
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuPieChart className="text-xl" />
          Dashboard
        </Link>
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/cards"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuWalletCards className="text-xl" />
          Cards
        </Link>
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/contacts"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuUsers2 className="text-xl" />
          Contacts
        </Link>
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/history"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuHistory className="text-xl" />
          History
        </Link>
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/settings"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuSettings className="text-xl" />
          Settings
        </Link>
        <Link
          to="/"
          className={`text-base flex items-center justify-start gap-2 group px-3 h-[35px] font-medium rounded-lg
          ${
            location.pathname === "/help-center"
              ? "bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-200/50"
          }
          `}
        >
          <LuBadgeAlert className="text-xl" />
          Help Center
        </Link>
      </div>
      {/* profile */}
      <div className="flex flex-col px-4 pb-4 gap-1 select-none">
        <Link
          to="/"
          className={`w-full text-base flex items-center justify-start gap-2 px-3 h-[60px] font-medium rounded-lg hover:bg-stone-200/50`}
        >
          <div className="h-[30px] text-lg aspect-square rounded-full flex items-center justify-center font-medium bg-mainColor text-white">
            D
          </div>
          <div className="flex flex-col w-[67%]">
            <h1 className="leading-4 text-base font-medium text-lightBlackText/70">
              Kevin Dermot
            </h1>
            <h1 className="leading-5 text-lightBlackText/50 text-sm truncate">
              mbonimpayekevin@gmail.com
            </h1>
          </div>
          <div className="min-w-fit">
            <LuChevronUp className="text-lightBlackText/70" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
