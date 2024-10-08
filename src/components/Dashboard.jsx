import React from "react";
import { LuArrowDown, LuArrowUp, LuDownload, LuLanguages, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* topbar */}
      <div className="w-full h-fit flex items-center justify-between p-3">
        <div></div>
        <div className="flex items-center justify-end w-fit h-full gap-2">
          <button
            to={"/"}
            className="h-[45px] min-w-[45px] aspect-square rounded-full bg-mainColor text-lightWhiteText p-2 transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
          >
            <LuPlus />
          </button>
          <button
            to={"/"}
            className="h-[45px] min-w-[45px] aspect-square rounded-full transition duration-150 active:scale-90 mb-1 flex items-center justify-center text-2xl"
          >
            <img
              src="./profile_pictures/1.png"
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        </div>
      </div>
      {/* body */}
      <div className="flex-1 w-full h-full pb-3 pr-3">
        <div className="w-full h-full bg-white rounded-3xl p-7">
          {/* people */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <button className="text-base h-6 w-6 flex items-center justify-center text-lightBlackText/60 hover:text-mainColor hover:ring-mainColor ring-1 ring-lightGrayText rounded-xl p-[2px]">
                <LuPlus />
                {/* <p className="px-1"></p> */}
              </button>
              <button className="text-sm h-6 text-lightBlackText/60 hover:bg-lightGrayText ring-1 ring-lightGrayText rounded-xl p-[2px] flex items-center justify-start gap-0">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/616ecd37b9430d69571b9594/1634652364879-63SA5X8HPI5N8WED1AWL/SawaSushiBistro+Logo.png"
                  className="w-5 rounded-full"
                />
                <p className="px-1">Sawa City</p>
              </button>
              <button className="text-sm h-6 text-lightBlackText/60 hover:bg-lightGrayText ring-1 ring-lightGrayText rounded-xl p-[2px] flex items-center justify-start gap-0">
                <img
                  src="./profile_pictures/no_pfp.jpg"
                  className="w-5 rounded-full"
                />
                <p className="px-1">Prince MB.</p>
              </button>
            </div>
            <div className="flex items-center justify-start gap-2">
              <button className="text-base h-6 w-6 flex items-center justify-center text-lightBlackText/60 hover:text-mainColor hover:ring-mainColor ring-1 ring-lightGrayText rounded-xl p-[2px]">
                <LuLanguages />
                {/* <p className="px-1"></p> */}
              </button>
              <button className="text-base h-6 w-6 flex items-center justify-center text-lightBlackText/60 hover:text-mainColor hover:ring-mainColor ring-1 ring-lightGrayText rounded-xl p-[2px]">
                <LuDownload />
                {/* <p className="px-1"></p> */}
              </button>
            </div>
          </div>
          {/* title & top up buttons */}
          <div className="w-full h-fit py-5 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-lightGrayText">
              Quick report
            </h1>
            <div className="flex items-center justify-center gap-2">
              <button className="text-sm font-semibold h-8 bg-mainColor text-lightWhiteText ring-1 ring-mainColor rounded-full py-[2px] px-3 flex items-center justify-center gap-0">
                <LuArrowDown className="text-base" />
                <p className="px-1">Deposit</p>
              </button>
              <button className="text-sm font-semibold h-8 text-lightBlackText/60 hover:bg-lightGrayText ring-1 ring-lightGrayText rounded-full py-[2px] px-3 flex items-center justify-start gap-0">
              <LuArrowUp className="text-base" />
                <p className="px-1">Withdraw</p>
              </button>
            </div>
          </div>
          {/* balance */}
          <div className="flex items-center justify-start text-lightBlackText/80">
            {/* big balance */}
            <div className="flex flex-col gap-1">
                <h1 className="text-sm font-medium">Account Balance</h1>
                <div className="flex items-center justify-start gap-2">
                    <h1 className="font-extrabold text-4xl tracking-tight my-1">$452,243 <span className="text-lightGrayText">.33</span></h1>
                    <span className="bg-mainColor text-lightWhiteText rounded-full px-2 py-[1px] text-sm font-medium flex items-center justify-center gap-[1px]"><LuArrowUp />20%</span>
                </div>
                <h1 className="text-sm font-medium">Last Deposit: <span className="bg-lightGrayText/40 rounded-full px-2 py-[1px]">$23.00</span> on 8 Oct, 2023</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
