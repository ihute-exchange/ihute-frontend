import React from "react";
import { BiSolidReceipt } from "react-icons/bi";
import { MdReceipt } from "react-icons/md";
import { Link } from "react-router-dom";

function SingleNotification() {
  return (
    <div className="w-full h-fit p-3 cursor-pointer hover:bg-stone-50 active:scale-[.99] transition rounded-2xl flex">
      <div className="w-fit h-full flex justify-center items-start gap-3">
        <div className="h-[35px] text-lg aspect-square rounded-full flex items-center justify-center font-semibold bg-mainColor text-white">
          K
        </div>
        <div className="w-fit flex-1 flex flex-col">
          <h1 className="text-sm font-semibold text-lightBlackText/90 flex items-center justify-start gap-1">
            <span>You have received $300</span>
            <span className="text-lightBlackText/60 text-xs">2h ago</span>
          </h1>
          <h1 className="text-sm font-normal text-lightBlackText/60">
            from <Link to={'/'} className=" hover:underline text-mainColor cursor-pointer">Kayumba Gisagara.</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SingleNotification;
