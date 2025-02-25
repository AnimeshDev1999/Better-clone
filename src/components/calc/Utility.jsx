"use client";

import Image from "next/image";
import { useState } from "react";

export default function Utility() {
  const [active, setActive] = useState(false);
  return (
    <>
      <p className="border-l-[5px] border-l-[#FE8B72] h-fit pl-2">Utilities</p>
      <div className="bg-background justify-self-end flex items-center rounded-md">
        <div className="p-3 w-full flex justify-between min-w-[150px]">
          <p className="font-semibold">$100</p>
          <button onClick={() => setActive(!active)}>
            <Image
              src="/icons/darr.svg"
              alt="darr"
              width={16}
              height={16}
              className={`transition-all ease-in-out duration-200 ${
                active ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {/* //////////// Hidden row //////////// */}
      <div
        className={`col-span-2 grid grid-cols-2 origin-top overflow-hidden transition-all duration-200 gap-5 ${
          active ? "py-4 h-fit" : "h-0"
        }`}
      >
        <p className="h-fit">Water/Sewer</p>
        <div className="bg-background max-w-[150px] border-[1px] justify-self-end flex items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        <p className="h-fit">Gas</p>
        <div className="bg-background max-w-[150px] border-[1px] justify-self-end flex items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        <p className="h-fit">Internet</p>
        <div className="bg-background max-w-[150px] border-[1px] justify-self-end flex items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        <div className="flex items-center gap-6 p-3">
          <input type="checkbox" className="h-5 w-5 accent-[#017848]" />
          <p>Include utilities in payment</p>
        </div>
      </div>
    </>
  );
}
