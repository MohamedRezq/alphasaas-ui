"use client";
import React from "react";
//-----> Components <-----------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
import { IStatsCardData } from "@/utils/types";
import ChartMenu from "./DropMenu_ChartMenu";
// import { ChartMenu } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const StatsCard = (props: IStatsCardData) => {
  const subValueStatesToStyles = new Map([
    ["positive", "text-chateaugreen"],
    ["negative", "text-sunsetorange"],
    ["normal", "text-grayish"],
  ]);

  return (
    <div
      style={{ boxShadow: "0px 3px 5px #00000029" }}
      className="rounded-2xl h-[112px] w-[285px] flex bg-wildsand p-1 text-emperor dark:bg-darkMineShaft dark:text-white"
    >
      <div className="w-1/2 flex flex-col items-start justify-center my-auto h-20 gap-y-1 pl-4">
        <div className="text-[10px] font-medium">{props.mainTitle}</div>
        <div className={`text-3xl font-bold dark:text-white text-ellipsis`}>
          {props.mainValue}
        </div>
      </div>
      <div className="bg-white dark:bg-midMineShaft font-medium relative flex flex-col gap-y-1 pl-3 items-start justify-center w-1/2 rounded-tr-2xl rounded-br-2xl text-[11px]">
        {props.subValues.map((item, i) => (
          <div
            key={`${item.title}-${item.value}-${i}`}
            className="flex items-center gap-x-2"
          >
            <div
              className={`w-5 ${subValueStatesToStyles.get(
                item.state
              )} font-bold text-[11px]`}
            >
              {item.value}
            </div>
            <div>{item.title}</div>
          </div>
        ))}
        <Dropdown
          trigger={["click"]}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomLeft"
          overlayClassName="pr-10"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
    </div>
  );
};

export default StatsCard;
