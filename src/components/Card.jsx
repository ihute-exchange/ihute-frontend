import React from "react";
import { IhuteLogoWhite } from "../assets";


function Card() {
  return (
    <div className="w-full px-5 py-6 rounded-3xl bg-stone-100 shadow-lg text-lightWhiteText flex flex-col relative overflow-hidden">
      <div className="h-[100%] w-[100%] absolute top-0 bottom-0 left-0 my-auto -z-0">
        <img
          src="https://i.pinimg.com/enabled/564x/ef/97/68/ef9768e0fd52e0b2447f0ab6d5b055c8.jpg"
          className="h-full w-full object-cover opacity-100"
        />
      </div>
      <div className="w-full flex items-center justify-between text-lightWhiteText z-10">
        <img src={IhuteLogoWhite} className="h-5" />
        <p className="font-bold text-sm text-white">Virtual Card</p>
      </div>
      <div className="w-full flex items-center justify-between text-sm pt-5 max-lg:pt-8 text-white z-10">
        <h1 className="flex flex-col items-start justify-start">
          <span>Main Balance</span>
          <span className="text-white font-suse text-2xl">$23,039.00</span>
        </h1>
        <img src="https://img.icons8.com/3d-fluency/94/sim-card-chip.png" className="h-14 pointer-events-none" />
      </div>
      <div className="flex items-center justify-end w-full text-base py-2 text-white z-10">
        <h1 className="flex flex-col items-start justify-start font-suse font-medium">
          **** **** **** *134
        </h1>
      </div>
      <div className="flex items-center justify-start gap-4 w-full text-xs font-medium text-lightWhiteText/80 z-10">
        <h1 className="flex flex-col items-start justify-start">
          <span>Exp. date</span>
          <span className="text-white text-sm">02/25</span>
        </h1>
        <h1 className="flex flex-col items-start justify-start">
          <span>Card Holder</span>
          <span className="text-white text-sm">Kevin Kaneza</span>
        </h1>
      </div>
    </div>
  );
}

export default Card;
