import Image from "next/image";
import React from "react";
import warning from "@/public/assets/img/icons/warning.svg";

const OpportFinanceAlert = () => {
  return (
    <div
      className="w-full col-span-3 rounded-2xl text-lightMineShaft font-bold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div
        className={`dark:text-white flex gap-y-1 whitespace-nowrap rounded-2xl`}
      >
        <div className="w-3/4 h-full rounded-bl-2xl rounded-tl-2xl bg-[#F4F4F4] dark:bg-darkMineShaft pt-3 pb-6 pl-3">
          <div
            className={`bg-alto flex items-start h-[51px] rounded-[10px] w-11/12`}
          >
            <div
              className={`bg-[#F14444] h-full rounded-l-[10px]`}
              style={{ width: `30%` }}
            ></div>
            <div
              className={`bg-[#E5DC72] h-full`}
              style={{ width: `25%` }}
            ></div>
          </div>
          <div className="flex pl-3 pt-5 text-mineshaft dark:text-white gap-x-5 text-xxs items-center">
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-[#F04444]"></div>
              <div>Unused</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-[#E5DC72]"></div>
              <div>Low Usage</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-silverchalice"></div>
              <div>Inactive</div>
            </div>
          </div>
        </div>
        <div className="w-1/4 pt-3 px-4 bg-[#E3E3E3] flex flex-col items-center rounded-tr-2xl rounded-br-2xl">
          <div className="rounded-xl w-full flex gap-x-4 justify-center items-center bg-[#F80000] h-[53px] text-white">
            <Image src={warning} alt="warning" className=" w-6" />
            <div className=" text-sm">Finance Alert!</div>
          </div>
          <div className="text-mineshaft text-[8px] self-start px-2 pt-5">
            Your finance health needs a revisit
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportFinanceAlert;
