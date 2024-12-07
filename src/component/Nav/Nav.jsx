import React, { useState } from "react";

const Nav = () => {
  const [openTab, setOpen] = useState(false);

  
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <button className="relative group p-4">
        <div
          onClick={() => setOpen(!openTab)}
          className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md cursor-pointer"
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
              openTab ? "rotate-45" : ""
            } origin-center`}
          >
            {/* Top bar */}
            <div
              className={`bg-white h-[2px] rounded transform transition-all duration-300 ${
                openTab
                  ? "rotate-45 translate-y-[6px]"
                  : "translate-y-0 rotate-0"
              }`}
            ></div>
            {/* Middle bar */}
            <div
              className={`bg-white h-[2px] rounded transform transition-all duration-300 ${
                openTab ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            {/* Bottom bar */}
            <div
              className={`bg-white h-[2px] rounded transform transition-all duration-300 ${
                openTab
                  ? "-rotate-45 -translate-y-[6px]"
                  : "translate-y-0 rotate-0"
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Nav;
