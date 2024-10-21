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

function CardsContent({
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
      <Header title={"Wallet"} openSidebar={openSidebar} />
      <div className="w-full flex-1 overflow-y-auto pl-0 max-lg:pl-0 grid grid-cols-3 max-lg:flex max-lg:flex-col gap-0 max-lg:gap-0 relative">
        {fetching ? (
          <LoadingScreen />
        ) : (
          <>
            {/* mini info */}
            <div className="w-full col-span-2 flex items-start justify-start gap-5">
              <div className="w-full flex-1 max-lg:pb-0 flex flex-col gap-5">
                {/* <div className="text-sm text-lightBlackText/70 flex items-center gap-1">
              <Link to="/cards">Wallet Status</Link>
              <LuChevronRight className="text-mainColor" />
            </div> */}
                <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-5 px-5 pt-5">
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
                </div>
                <div className="w-full border-t border-t-stone-100">
                  <Transactions />
                </div>
              </div>
            </div>
            {/* card swiper */}
            <div className="w-full max-lg:w-full h-full max-lg:h-fit flex flex-col border-l max-lg:border-none border-stone-100 sticky top-0 max-lg:relative max-lg:pb-5">
              <div className="flex flex-col pt-4 max-lg:pt-0 px-4">
                <h1 className="text-lg font-medium text-lightBlackText/80">
                  My Cards
                </h1>
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <Swiper
                  loop={false}
                  grabCursor={true}
                  slidesPerView={1.1}
                  spaceBetween={0}
                  className="mySwiper"
                >
                  {MyCards.map((_, index) => (
                    <SwiperSlide className="py-4 pl-4 w-full">
                      <Card />
                    </SwiperSlide>
                  ))}
                  <SwiperSlide className="py-4 px-4 h-[200px] w-full">
                    <div className="w-full h-full transition hover:border-mainColor text-lightBlackText/50 hover:text-mainColor px-5 py-6 rounded-3xl border-2 border-dashed border-stone-200 flex items-center justify-center gap-1 active:scale-95 font-medium ">
                      <LuPlus className="text-2xl" />
                      New Card
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className=" w-full flex-1 px-4">
                <div className="flex flex-col py-2">
                  <h1 className="text-lg font-medium text-lightBlackText/80">
                    Quick Actions
                  </h1>
                </div>
                <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-2 pt-2 select-none">
                  <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                    <LuPlusCircle className="text-lg " />
                    Top Up
                  </button>
                  <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                    <LuUpload />
                    Withdraw
                  </button>
                  <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                    <LuArrowUpRightFromCircle />
                    Send
                  </button>
                  <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                    <LuArrowDownLeftFromCircle />
                    Request
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardsContent;
