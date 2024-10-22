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
import BasicInfo from "./BasicInfo";
import Security from "./Security";
import DefaultCurrency from "./DefaultCurrency";
import Appearance from "./Appearance";

function SettingsContent({
  showSidebar,
  animateShowSidebar,
  openSidebar,
  closeSidebar,
}) {
  const [fetching, setFetching] = useState(true);
  const [activeTab, setActiveTab] = useState("Basic info");
  const tabs = [
    { title: "Basic info", element: <BasicInfo /> },
    { title: "Security", element: <Security /> },
    { title: "Appearance", element: <Appearance /> },
    { title: "Default Currency", element: <DefaultCurrency /> },
  ];
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
      <Header title={"Settings"} openSidebar={openSidebar} />
      <div className="w-full flex-1 overflow-y-auto p-0 relative">
        {/* loader */}
        {fetching ? (
          <LoadingScreen />
        ) : (
          <div className="w-full h-full flex flex-col">
            {/* tabs */}
            <div className="h-[45px] w-full overflow-x-auto border-b px-5 border-stone-100 flex flex-row gap-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`w-fit h-full whitespace-nowrap px-3 text-sm font-medium transition duration-200 ${
                    activeTab === tab.title
                      ? "border-b-2 border-mainColor text-lightBlackText/80"
                      : "border-b-0 border-transparent text-lightBlackText/50"
                  }`}
                  onClick={() => setActiveTab(tab.title)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* tab contents */}
            <div className="w-full h-fit flex-1 overflow-y-auto">
              {tabs.find((tab) => tab.title === activeTab)?.element}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsContent;
