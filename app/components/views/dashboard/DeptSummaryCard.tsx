"use client";
import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import Link from "next/link";
import Image from "next/image";
import {
  IAppAvatar,
  IDashboardDeptSummaryCard,
  IUserAvatar,
} from "@/utils/types";
import ChartMenu from "./DropMenu_ChartMenu";
import Tooltip from "@/app/components/common/Tooltip";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//

const DeptSummaryCard = (props: IDashboardDeptSummaryCard) => {
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  return (
    <div
      className="w-[285px] text-mineshaft dark:text-white rounded-2xl h-fit font-bold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8 dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-5 py-1">
        <Link
          href={`/dashboard/details?department=${props.title}`}
          className=" cursor-pointer"
        >
          {props.title}
        </Link>
        <Dropdown trigger={["click"]} overlay={ChartMenu} animation="slide-up">
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`h-fit pl-5 pr-3 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap pt-[11px] pb-[29px] rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="flex text-mineshaft dark:text-white flex-col gap-y-1 text-[10px]">
          <div>Total Spend</div>
          <div className="flex gap-x-4 items-center">
            <div className="text-[20px] font-bold text-emperor dark:text-white  mb-1">
              ${props.spend}
            </div>
            <div className="flex items-center justify-center flex-col text-hippiegreen text-[6px]">
              <div className="text-[8px]">
                {props.percentage > 0 ? (
                  <BiSolidUpArrow />
                ) : (
                  <BiSolidDownArrow />
                )}
              </div>
              <div>{props.percentage} %</div>
            </div>
          </div>
          <div className="mt-2">{props.apps.length || 0} apps</div>
          <div className=" grid grid-cols-5 gap-2 mr-[83px]">
            {props?.apps?.map((app: IAppAvatar, i: number) => (
              <Tooltip
                key={`dept-card-info-${app.name}-${i}`}
                element={
                  <Link
                    href={app?.url || "/"}
                    target="_blank"
                    className={`w-7 h-7 rounded-md flex justify-center items-center`}
                  >
                    <Image
                      src={
                        app.logo ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2slI8T_f12PxFTpgNOSkFQKVFJ2UQcIkJJOafROU&s"
                      }
                      alt={app.name}
                      width={25}
                      height={25}
                      className="rounded-sm w-inherit h-inherit"
                    />
                  </Link>
                }
                text={app.name}
              />
            ))}
          </div>
          <div className="mt-3">{props.users.length || 0} users</div>
          {props.users.length > 8 ? (
            <div className="flex items-center -space-x-3">
              {props?.users?.slice(0, 3).map((user: IUserAvatar, i: number) => (
                <Tooltip
                  additionalClassNames={`z-${
                    (i + 1) * 10
                  }  bg-opacity-100 opacity-100`}
                  key={`dept-card-info-${user?.name}-${i}`}
                  element={
                    <Image
                      src={`/assets/img/avatar_${
                        Math.floor(Math.random() * (8 - 1 + 1)) + 1
                      }.png`}
                      alt={user?.name}
                      width={25}
                      height={25}
                      className="rounded-full h-7 w-7 border-2 border-white"
                    />
                  }
                  text={user.name}
                />
              ))}
              <div className="text-[8px] bg-opacity-100 opacity-100 z-50 rounded-full border border-white h-6 w-6 flex items-center justify-center bg-hippiegreen text-white">
                {props?.users.length - 3}+
              </div>
            </div>
          ) : (
            <div className="flex gap-1 flex-wrap">
              {props?.users?.map((user: IUserAvatar, i: number) => (
                <Tooltip
                  additionalClassNames={`z-${
                    (i + 1) * 10
                  }  bg-opacity-100 opacity-100`}
                  key={`dept-card-info-${user?.name}-${i}`}
                  element={
                    <Image
                      src={`/assets/img/avatar_${
                        Math.floor(Math.random() * (8 - 1 + 1)) + 1
                      }.png`}
                      alt={user?.name}
                      width={25}
                      height={25}
                      className="rounded-full h-7 w-7 border-2 border-white"
                    />
                  }
                  text={user.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeptSummaryCard;
