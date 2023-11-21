"use client";
import React from "react";
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
import ChartMenu from "./DropMenu_ChartMenu";
import ChartDiagram from "./ChartDiagram";
import { ICustomChartCard } from "@/utils/types";

const CustomChartCard = (props: ICustomChartCard) => {
  return (
    <div
      className={`col-span-${props.size} rounded-2xl h-fit lg:h-[300px] text-lightMineShaft w-full font-semibold`}
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className="bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        {props.header}
        <Dropdown
          trigger={["click"]}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomLeft"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`lg:h-[270px]  h-fit  px-7 bg-wildsand dark:bg-darkMineShaft dark:text-white flex flex-col justify-between gap-y-3 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-end">
          <div className="flex flex-col text-[10px]">
            <div className=" text-mineshaft dark:text-white">
              {`${props.mainTitle} - `}
            </div>
            {props.mainValue}
          </div>
          <div className="flex gap-x-3">{props.filterMenus}</div>
        </div>

        <div className="dark:bg-midMineShaft h-full w-full py-3 px-0 rounded-[15px]">
          {props.diagram}
        </div>
      </div>
    </div>
  );
};

export default CustomChartCard;
