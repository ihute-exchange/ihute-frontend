import React from "react";
import SingleNotification from "./SingleNotification";
import { LuHash, LuX } from "react-icons/lu";
import { VscOpenPreview } from "react-icons/vsc";
import { SlEnvelopeOpen } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiSolidReceipt } from "react-icons/bi";

function MyNotifications() {
  return (
    <div className="w-full h-full flex-1 flex flex-col gap-3">
      <div className="w-full h-full flex-1 flex items-start justify-start relative p-5 gap-5 overflow-y-auto">
        {/* wrapper */}
        <div className="flex w-full h-fit flex-col gap-0 flex-1">
          <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5">
            <h1 className="text-sm font-medium text-lightBlackText/60">
              You have <span className="text-mainColor">23 unread</span>{" "}
              notifications
            </h1>
            {/* actions */}
            <div className="flex items-center justify-end gap-2 max-sm:w-full">
              <button className="h-[35px] whitespace-nowrap truncate px-4 rounded-xl flex items-center justify-center bg-transparent text-lightBlackText hover:text-mainColor text-sm">
                Clear all
              </button>
              <button className="h-[40px] whitespace-nowrap truncate w-fit text-sm flex items-center justify-center gap-2 px-4 ring-1 ring-stone-200 hover:bg-stone-100 rounded-xl hover:ring-stone-100 hover:text-mainColor">
                Mark as read
              </button>
            </div>
          </div>
          {/* toady */}
          <h1 className="text-sm font-medium text-lightBlackText/60 mt-5 mb-1 flex items-center justify-start gap-1">
            <LuHash className="opacity-60" />
            Today
          </h1>
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          {/* Yesterday */}
          <h1 className="text-sm font-medium text-lightBlackText/60 mt-5 mb-1 flex items-center justify-start gap-1">
            <LuHash className="opacity-60" />
            Yesterday
          </h1>
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          {/* Older Notifications */}
          <h1 className="text-sm font-medium text-lightBlackText/60 mt-5 mb-1 flex items-center justify-start gap-1">
            <LuHash className="opacity-60" />
            Older Notifications
          </h1>
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
        </div>
      </div>
    </div>
  );
}

export default MyNotifications;
