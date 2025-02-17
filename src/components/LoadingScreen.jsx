import React from "react";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner, ImSpinner6 } from "react-icons/im";
import { LiaSpinnerSolid } from "react-icons/lia";
import { RiLoaderLine } from "react-icons/ri";
import { TbLoader2, TbLoaderQuarter } from "react-icons/tb";
import { ring } from "ldrs";

ring.register();

function LoadingScreen() {
  return (
    <div className="w-full h-full flex-1 bg-white absolute top-0 left-0 z-20 flex items-start p-16 justify-center ">
      <svg className="containerSpinner" viewBox="0 0 40 40" height="40" width="40">
        <circle
          className="track"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
          fill="none"
        />
        <circle
          className="car"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default LoadingScreen;
