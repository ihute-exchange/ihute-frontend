import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  LuArrowDownLeftFromCircle,
  LuArrowDownToLine,
  LuArrowUpFromLine,
  LuArrowUpRightFromCircle,
  LuDollarSign,
  LuMoveDownLeft,
  LuMoveUpRight,
  LuPlus,
  LuPlusCircle,
  LuRefreshCw,
  LuShuffle,
  LuUpload,
} from "react-icons/lu";
import Money from "../utils/Money";
import { BsPiggyBank } from "react-icons/bs";
import Transactions from "./Transactions";
import LoadingScreen from "./LoadingScreen";
import ContactsTable from "./ContactsTable";

function ContactsContent({
  showSidebar,
  animateShowSidebar,
  openSidebar,
  closeSidebar,
}) {
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  }, []);
  return (
    <div
      className={`${
        showSidebar && "max-lg:ml-[255px] max-sm:ml-[100%]"
      } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-full white flex flex-col z-20 bg-white relative`}
    >
      {showSidebar && (
        <div
          onClick={closeSidebar}
          className={`w-full h-full absolute top-0 left-0 bg-black/10 z-30 transition-all duration-300 ease-in-out ${
            animateShowSidebar ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      )}
      <Header title={"Contacts"} openSidebar={openSidebar} />
      <div className="w-full flex-1 overflow-y-auto p-0 relative">
        {/* loader */}
        {fetching ? (
          <LoadingScreen />
        ) : (
          <div className="w-full flex-1 flex items-start justify-start">
            <ContactsTable />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactsContent;
