import React, { useEffect, useState } from "react";
import Header from "./Header";
import {
  LuArrowDownLeftFromCircle,
  LuArrowUpRightFromCircle,
  LuChevronRight,
  LuRefreshCw,
  LuUserPlus,
} from "react-icons/lu";
import { ConfigProvider, Select } from "antd";
import { Link } from "react-router-dom";
import Contacts from "../utils/Contacts";
import Statistics from "./Statistics";
import Transactions from "./Transactions";
import LoadingScreen from "./LoadingScreen";

function DashboardContent({
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
      <Header openSidebar={openSidebar} title={"Dashboard"} />
      <div className="w-full flex-1 overflow-y-auto py-1 flex flex-col gap-0 pt-5 relative">
        {fetching ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="grid grid-cols-2 max-md:grid-cols-1 px-5 gap-5 pb-5">
              <div className="w-full flex flex-col gap-6">
                
              </div>
             
              <div className="w-full flex flex-col gap-6">
                
              </div>
            </div>
            <div>
              
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;
