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
  LuChevronRight,
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
import Statistics from "../components/Statistics";

function AnalysisContent({
  showSidebar,
  animateShowSidebar,
  openSidebar,
  closeSidebar,
}) {
  const MyCards = ["", ""];
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
      <Header title={"Analysis"} openSidebar={openSidebar} />
      <div className="w-full flex-1 overflow-y-auto relative">
        {fetching ? (
          <LoadingScreen />
        ) : (
          <div className="w-full h-full">
            <div className="w-full col-span-2 px-5 flex items-start justify-start gap-5">
              <div className="w-full flex-1 py-5 max-lg:pt-0 flex flex-col gap-5">
                <div className="grid grid-cols-4 max-xl:grid-cols-2 gap-5">
                  {/* single card */}
                  <div className="w-full flex flex-col items-start justify-start gap-3 ring-1 ring-stone-100 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-7 flex items-center justify-center aspect-square rounded-full bg-blue-200/20 text-blue-600/60">
                        <LuDollarSign />
                      </div>
                      <h1 className="font-medium text-sm text-lightBlackText/70">
                        Total Balance
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <h1 className="font-semibold text-xl text-lightBlackText/70">
                        ${Money(13133)}
                      </h1>
                    </div>
                  </div>
                  {/* single card */}
                  <div className="w-full flex flex-col items-start justify-start gap-3 ring-1 ring-stone-100 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-7 flex items-center justify-center aspect-square rounded-full bg-purple-300/20 text-purple-600/60">
                        <LuShuffle />
                      </div>
                      <h1 className="font-medium text-sm text-lightBlackText/70">
                        Monthly Expenses
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <h1 className="font-semibold text-xl text-lightBlackText/70">
                        ${Money(5413.23)}
                      </h1>
                    </div>
                  </div>
                  {/* single card */}
                  <div className="w-full flex flex-col items-start justify-start gap-3 ring-1 ring-stone-100 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-7 flex items-center justify-center aspect-square rounded-full bg-orange-200/20 text-orange-600/60">
                        <BsPiggyBank />
                      </div>
                      <h1 className="font-medium text-sm text-lightBlackText/70">
                        Savings{" "}
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <h1 className="font-semibold text-xl text-lightBlackText/70">
                        ${Money(5413.23)}
                      </h1>
                    </div>
                  </div>
                  {/* single card */}
                  <div className="w-full flex flex-col items-start justify-start gap-3 ring-1 ring-stone-100 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-7 flex items-center justify-center aspect-square rounded-full bg-purple-300/20 text-purple-600/60">
                        <LuShuffle />
                      </div>
                      <h1 className="font-medium text-sm text-lightBlackText/70">
                        Monthly Expenses
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <h1 className="font-semibold text-xl text-lightBlackText/70">
                        ${Money(5413.23)}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-fit px-5 flex items-start justify-start max-md:flex-col gap-5">
              <div className="flex flex-col flex-1 max-md:w-full">
                {/* card header */}
                <div className="flex items-center justify-between gap-3 pb-6">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium text-lightBlackText/80">
                      Statistics
                    </h1>
                    <h1 className="text-sm font-medium text-lightBlackText/60">
                      Keep an eye on your spending and earnings
                    </h1>
                  </div>
                  {/* <button
                    className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
                  >
                    <LuChevronRight className="text-xl" />
                  </button> */}
                </div>
                <Statistics height={300} />
              </div>
              <div className="w-[30%] max-md:w-full max-md:min-w-full h-full max-md:h-fit ring-1 ring-stone-100 p-4 rounded-2xl">
                {/* My Cards */}
                <div className=" w-full h-full flex-1">
                  <div className="flex flex-col pb-2">
                    <h1 className="text-lg font-medium text-lightBlackText/80">
                      Wallet
                    </h1>
                  </div>
                  <div className="w-full h-[290px] max-md:h-fit overflow-y-auto flex flex-col gap-2 p-1 ">
                    {/* card content */}
                    <div className="ring-1 ring-stone-200 rounded-2xl p-4 flex flex-col gap-2">
                      {/* card details */}
                      <div className="flex items-center justify-start gap-2 overflow-x-auto hidden_scrollbar">
                        {/* card number */}
                        <div className="flex flex-col w-full min-w-[100px] items-center justify-center ">
                          <h1 className="text-sm font-medium text-lightBlackText/60">
                            Card Number
                          </h1>
                          <h1 className="text-sm font-medium text-lightBlackText/80">
                            **** 0973
                          </h1>
                        </div>
                        {/* Expire Date */}
                        <div className="flex flex-col w-full min-w-[100px] items-center justify-center ">
                          <h1 className="text-sm font-medium text-lightBlackText/60">
                            Expire Date
                          </h1>
                          <h1 className="text-sm font-medium text-lightBlackText/80">
                            04/24
                          </h1>
                        </div>
                        {/* status */}
                        <div className="flex flex-col w-full min-w-[100px] items-center justify-center ">
                          <h1 className="text-sm font-medium text-lightBlackText/60">
                            Status
                          </h1>
                          <h1 className="text-sm font-medium text-lightBlackText/80">
                            Virtual
                          </h1>
                        </div>
                      </div>
                      <div className="w-full flex items-start justify-start flex-col gap-1 py-2">
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-2 aspect-square bg-orange-400 rounded-full"></div>
                          <h1 className="text-sm text-lightBlackText/70 font-medium">
                            Balance: $23,343
                          </h1>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-2 aspect-square bg-purple-400 rounded-full"></div>
                          <h1 className="text-sm text-lightBlackText/70 font-medium">
                            Last used: Oct 10, 2024
                          </h1>
                        </div>
                      </div>
                    </div>
                    <button className="h-[50px] w-full flex items-center justify-center gap-2 px-4 border-2 border-dashed text-lightBlackText/50 border-lightBlackText/30 hover:border-mainColor rounded-2xl transition hover:text-mainColor">
                      <LuPlus className="text-xl" />
                      New Card
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-fit pb-5 mt-3 border-t border-stone-100">
              <Transactions />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalysisContent;
