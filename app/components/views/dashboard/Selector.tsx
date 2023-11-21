"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "rc-dropdown";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import DropMenu_RadioItems from "./DropMenu_RadioItems";

interface ISelectorProps {
  items: string[];
  icon?: string;
  size?: string;
}

const Selector = (props: ISelectorProps) => {
  const [selectedOption, setSelectedOption] = useState(props.items[0]);
  //---------------------------------------------------------------------//
  return (
    <Dropdown
      trigger={["click"]}
      overlay={
        <DropMenu_RadioItems
          selectedOption={selectedOption}
          options={props.items}
          setterFunction={setSelectedOption}
        />
      }
      animation="slide-up"
    >
      <div
        className={`flex ${
          props.size == "small"
            ? "w-24 text-xxs py-[5px] rounded-[10px]"
            : "w-[145px] text-sm py-2 rounded-[15px]"
        } justify-around items-center gap-x-2 text-sm bg-bonjour px-5 text-mineshaft dark:text-white pr-6`}
      >
        {props.icon && (
          <Image src={props.icon} alt="calendar" width={16} height={16} />
        )}
        <div
          className={`text-center font-medium ${
            props.size == "small" ? "w-16" : "w-40"
          } text-mineshaft`}
        >
          {props.items[0]}
        </div>
        <Image
          src={dropDown}
          alt="Menu"
          width={props.size == "small" ? 8 : 10}
          className={`${
            props.size == "small" ? "w-[8px] h-[4px]" : "w-[10px] h-[6px]"
          } cursor-pointer`}
        />
      </div>
    </Dropdown>
  );
};

export default Selector;
