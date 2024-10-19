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
      <Header openSidebar={openSidebar} />
      <div className="w-full flex-1 overflow-y-auto py-1 px-5 flex flex-col gap-5 pt-5 relative">
        {fetching ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
              {/* balance & contacts */}
              <div className="w-full flex flex-col gap-6">
                {/* balance */}
                <div className="w-full ring-1 ring-stone-100 rounded-2xl p-5 flex flex-col gap-5 bg-stone-50/30">
                  {/* card header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-medium text-lightBlackText/80">
                        Total Balance
                      </h1>
                      <h1 className="text-sm font-medium text-lightBlackText/60">
                        You can view your balance details{" "}
                      </h1>
                    </div>
                    <button
                      className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
                    >
                      <LuChevronRight className="text-xl" />
                    </button>
                  </div>
                  {/* card content */}
                  <div className="ring-1 ring-stone-100 rounded-2xl p-4 flex flex-col gap-2 bg-white ">
                    <h1 className="text-sm font-medium text-lightBlackText/60">
                      Available funds
                    </h1>
                    {/* balance */}
                    <div className="flex max-lg:flex-col gap-2 items-center justify-start">
                      <h1 className="text-3xl font-semibold text-lightBlackText/80 py-2">
                        $12,233
                        <span className="text-lightBlackText/40">.23</span>{" "}
                        {/* <span className="text-lg">USD</span> */}
                      </h1>
                      <div className="max-lg:w-full flex items-center justify-start max-lg:mb-1">
                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimaryBg: "#026fc740",
                              colorBgContainer: "#f1f0ef",
                              fontSize: 14,
                              lineWidth: 0,
                              borderRadius: 10,
                            },
                          }}
                        >
                          <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="label"
                            defaultValue={{
                              value: "USD",
                              label: "USD",
                            }}
                            options={[
                              {
                                value: "USD",
                                label: "USD",
                              },
                              {
                                value: "RWF",
                                label: "RWF",
                              },
                            ]}
                          />
                        </ConfigProvider>
                      </div>
                    </div>
                    <div className="flex max-lg:flex-wrap items-center justify-start gap-2 pt-2 select-none">
                      <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                        <LuArrowUpRightFromCircle />
                        Send
                      </button>
                      <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                        <LuArrowDownLeftFromCircle />
                        Request
                      </button>
                      <button className="h-[40px] w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                        <LuRefreshCw />
                        Exchange
                      </button>
                    </div>
                  </div>
                </div>
                {/* contacts */}
                <div className="w-full ring-1 ring-stone-100 rounded-2xl p-5 flex flex-col gap-5">
                  {/* card header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-medium text-lightBlackText/80">
                        Recent Contacts
                      </h1>
                      <h1 className="text-sm font-medium text-lightBlackText/60">
                        Send or request from your contact list
                      </h1>
                    </div>
                    <button
                      className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
                    >
                      <LuChevronRight className="text-xl" />
                    </button>
                  </div>
                  {/* card content */}
                  <div className=" rounded-xl flex items-center justify-between max-lg:flex-col gap-5">
                    <div className="max-lg:w-full flex-1 flex items-center justify-start gap-1 overflow-x-auto hidden_scrollbar p-[2px]">
                      {Contacts.sort((a, b) => a.name.localeCompare(b.name))
                        .slice(0, 10)
                        .map((contact, index) => (
                          <Link
                            key={index}
                            to="/"
                            className=" rounded-full select-none"
                          >
                            {contact.pfp !== "" ? (
                              <img
                                src={contact.pfp}
                                className="min-h-[40px] max-md:min-h-14 pointer-events-none max-h-[40px] max-md:max-h-14 h-fit max-md:h-14 min-w-[40px] max-md:min-w-14 rounded-full object-cover bg-stone-100 ring-1 ring-stone-200 aspect-square"
                              />
                            ) : (
                              <div className="h-[40px] max-md:h-14 text-xl max-md:text-3xl aspect-square rounded-full flex items-center justify-center font-semibold bg-mainColor text-white">
                                {contact.name.charAt(0)}
                              </div>
                            )}
                          </Link>
                        ))}
                    </div>
                    <div className="min-w-fit max-lg:w-full">
                      <button className="h-[40px] select-none w-full flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                        <LuUserPlus />
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* statistics */}
              <div className="w-full ring-1 ring-stone-100 rounded-2xl p-5 flex flex-col gap-5">
                {/* card header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium text-lightBlackText/80">
                      Virtual Card
                    </h1>
                    <h1 className="text-sm font-medium text-lightBlackText/60">
                      You can view your card details
                    </h1>
                  </div>
                  <button
                    className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
                  >
                    <LuChevronRight className="text-xl" />
                  </button>
                </div>
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
                    {/* cvc */}
                    <div className="flex flex-col w-full min-w-[100px] items-center justify-center ">
                      <h1 className="text-sm font-medium text-lightBlackText/60">
                        CVC
                      </h1>
                      <h1 className="text-sm font-medium text-lightBlackText/80">
                        ***
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
                </div>
                {/* card header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium text-lightBlackText/80">
                      Statistics
                    </h1>
                    <h1 className="text-sm font-medium text-lightBlackText/60">
                      Keep an eye on your spending and earnings
                    </h1>
                  </div>
                  <button
                    className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
                  >
                    <LuChevronRight className="text-xl" />
                  </button>
                </div>
                {/* chart */}
                <Statistics />
              </div>
            </div>
            <div>
              <Transactions />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;
