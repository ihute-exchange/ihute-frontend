import React from "react";
import { IhuteLogo } from "../assets";
import {
  LuActivity,
  LuBadgeAlert,
  LuBell,
  LuChevronsLeftRight,
  LuChevronUp,
  LuGauge,
  LuHistory,
  LuPanelLeftClose,
  LuPieChart,
  LuPlus,
  LuQrCode,
  LuSearch,
  LuSettings,
  LuUserPlus,
  LuUserPlus2,
  LuUsers2,
  LuWallet,
  LuWalletCards,
  LuX,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Space } from "antd";
import SidebarSectionTitle from "./SidebarSectionTitle";
import { TbHeadset } from "react-icons/tb";
import { IoCardOutline, IoStatsChart } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";

function Sidebar({ closeSidebar }) {
  const location = useLocation();
  return (
    <div className="w-[255px] min-w-[255px] max-sm:w-full z-10 h-svh sticky top-0 left-0 max-lg:fixed flex flex-col bg-lightSidebarBg text-lightBlackText overflow-y-auto">
      <div className="flex items-center justify-between px-2 pt-2 gap-1 select-none">
        <Link
          to="/"
          className={`w-fit max-sm:w-full text-base flex items-center justify-start gap-2 pl-2 pr-4 h-[40px] font-medium rounded-xl hover:bg-stone-200/50`}
        >
          <div className="h-[30px] text-lg aspect-square rounded-full flex items-center justify-center font-semibold bg-mainColor text-white">
            K
          </div>
          <div className="flex flex-col flex-1 truncate w-full">
            <h1 className="leading-4 text-sm relative font-medium text-lightBlackText/70 truncate w-full">
              Kevin Dermot
            </h1>
          </div>
        </Link>
        <button className=" max-lg:hidden text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center hover:bg-stone-100 rounded-xl">
          <LuQrCode className="text-xl" />
        </button>
        <button
          onClick={closeSidebar}
          className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square items-center justify-center hidden max-lg:flex max-lg:bg-stone-100 hover:bg-stone-100 rounded-xl"
        >
          <LuX className="text-xl" />
        </button>
      </div>
      {/* middle links */}
      <div className="flex-1 flex flex-col pl-5 pr-2 gap-1 select-none">
        <SidebarSectionTitle title={"General"} />
        <Link
          to="/"
          className={`rounded-xl text-sm relative flex items-center border-transparent justify-start gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/"
              ? "active_sidebar_link bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-100"
          }
          `}
        >
          <LuPieChart className="text-xl max-lg:text-2xl" />
          <p className="text-lightBlackText/70">Dashboard</p>
        </Link>
        {/* <SidebarSectionTitle title={"Support"} />
        <Link
          to="/settings"
          className={`rounded-xl text-sm relative flex items-center border-transparent justify-start gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/settings"
              ? "active_sidebar_link bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-100"
          }
          `}
        >
          <LuSettings className="text-xl max-lg:text-2xl" />
          Settings
        </Link>
        <Link
          to="/"
          className={`rounded-xl text-sm relative flex items-center border-transparent justify-start gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/help-center"
              ? "active_sidebar_link bg-stone-200/50 text-mainColor"
              : "text-lightBlackText/70 hover:bg-stone-100"
          }
          `}
        >
          <TbHeadset className="text-xl max-lg:text-2xl" />
          Help Center
        </Link> */}
      </div>
      {/* bottom link */}
      {/* <div className="flex flex-col p-2">
        <button className="h-[35px] px-4 rounded-xl flex items-center justify-center gap-1 bg-mainColor text-white text-sm font-semibold">
          <LuPlus className="text-lg" />
          Add Contact
        </button>
      </div> */}
    </div>
  );
}

export default Sidebar;
