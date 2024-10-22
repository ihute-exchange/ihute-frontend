import { ConfigProvider, Select } from "antd";
import React, { useState } from "react";
import { LuCheck, LuLaptop2, LuMoon, LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

function Appearance() {
  const [selectedTheme, setSelectedTheme] = useState("Light")
  return (
    <div className="p-8 w-full h-fit flex flex-col gap-5 text-lightBlackText/80">
      <form className="w-full flex flex-col gap-4 max-w-[300px]">
        {/* section title */}
        <h1 className="text-lg ">Default Theme</h1>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Set Theme</h1>
          <div className="wi-fit h-fit flex items-start justify-start gap-2">
            <label className="select-none flex items-center whitespace-nowrap justify-center cursor-pointer">
              <input type="radio" name="theme" value="Light" checked={selectedTheme === "Light"} onClick={(e) => setSelectedTheme(e.target.value)} className="hidden peer" />
              <div className="w-[120px] h-[80px] border-2 border-stone-300/80 rounded-xl text-lightBlackText/50 peer-checked:text-mainColor peer-checked:border-mainColor/80 peer-checked:bg-mainColor/10 transition duration-200 flex flex-col items-center justify-center">
                <LuSun className="text-xl " />
                <h1 className="m-0 text-sm pt-1 font-medium">Light</h1>
              </div>
            </label>
            <label className="select-none flex items-center whitespace-nowrap justify-center cursor-pointer">
              <input type="radio" name="theme" value="Dark" checked={selectedTheme === "Dark"} onClick={(e) => setSelectedTheme(e.target.value)} className="hidden peer" />
              <div className="w-[120px] h-[80px] border-2 border-stone-300/80 rounded-xl text-lightBlackText/50 peer-checked:text-mainColor peer-checked:border-mainColor/80 peer-checked:bg-mainColor/10 transition duration-200 flex flex-col items-center justify-center">
                <LuMoon className="text-xl " />
                <h1 className="m-0 text-sm pt-1 font-medium">Dark</h1>
              </div>
            </label>
            <label className="select-none flex items-center whitespace-nowrap justify-center cursor-pointer">
              <input type="radio" name="theme" value="System" checked={selectedTheme === "System"} onClick={(e) => setSelectedTheme(e.target.value)} className="hidden peer" />
              <div className="w-[120px] h-[80px] border-2 border-stone-300/80 rounded-xl text-lightBlackText/50 peer-checked:text-mainColor peer-checked:border-mainColor/80 peer-checked:bg-mainColor/10 transition duration-200 flex flex-col items-center justify-center">
                <LuLaptop2 className="text-xl " />
                <h1 className="m-0 text-sm pt-1 font-medium">System</h1>
              </div>
            </label>
          </div>
        </div>
        <button className="h-[35px] px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-mainColor text-white text-sm font-medium">
          <LuCheck className="text-lg" />
          Save
        </button>
      </form>
    </div>
  );
}

export default Appearance;
