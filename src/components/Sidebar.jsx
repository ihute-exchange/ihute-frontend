import React from "react";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { IoAnalytics, IoWalletOutline } from "react-icons/io5";
import {
  MdExplore,
  MdOutlineCurrencyExchange,
  MdOutlineExplore,
} from "react-icons/md";
import { RiDashboard2Line } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[70px] h-full flex bg-lightBodySecondBg py-3 items-center justify-between flex-col gap-2">
      <Link
        to={"/"}
        className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white p-2 transition duration-150 active:scale-90 mb-7"
      >
        <img src="./logo.png" alt="" />
      </Link>
      {/* middle links */}
      <div className="flex flex-col gap-2 flex-1">
        <Link
          to={"/"}
          className="h-[45px] min-w-[45px] aspect-square rounded-full bg-mainColor text-lightWhiteText p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-3xl"
        >
          <MdOutlineExplore />
        </Link>
        <Link
          to={"/"}
          className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white text-lightBlackText/60 p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
        >
          <TbTransactionDollar />
        </Link>
        <Link
          to={"/"}
          className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white text-lightBlackText/60 p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
        >
          <MdOutlineCurrencyExchange />
        </Link>
        <Link
          to={"/"}
          className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white text-lightBlackText/60 p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
        >
          <IoWalletOutline />
        </Link>
        <Link
          to={"/"}
          className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white text-lightBlackText/60 p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
        >
          <HiOutlineCog8Tooth />
        </Link>
      </div>
      <Link
        to={"/"}
        className="h-[45px] min-w-[45px] aspect-square rounded-full bg-white text-lightBlackText/60 p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
      >
        <HiOutlineLogout />
      </Link>
    </div>
  );
}

export default Sidebar;
