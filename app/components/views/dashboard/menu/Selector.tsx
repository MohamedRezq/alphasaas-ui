"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu, { Item as MenuItem } from "rc-menu";
import Dropdown from "rc-dropdown";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";

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
        <>
          <Menu
            className="p-5 w-[165px]"
            onSelect={(e) => {
              setSelectedOption(e.key);
            }}
            style={{ zIndex: 99999 }}
          >
            {props.items.map((opt) => (
              <MenuItem
                key={`${opt}`}
                className="flex rounded-md items-center text-xxs font-bold hover:bg-lightMercury dark:hover:bg-mineshaft dark:hover:text-white text-dovegray cursor-pointer"
              >
                <input
                  type="radio"
                  id={`${opt}`}
                  name={`${opt}`}
                  value={`${opt}`}
                  checked={selectedOption === opt ? true : false}
                  className="cursor-pointer accent-hippiegreen"
                />
                <label htmlFor="html" className="px-4 cursor-pointer ">
                  {opt}
                </label>
                <br></br>
              </MenuItem>
            ))}
          </Menu>
        </>
      }
      animation="slide-up"
    >
      <div
        className={`flex ${
          props.size == "small"
            ? "w-24 text-xxs py-[5px] rounded-[10px]"
            : "w-[165px] text-sm py-2 rounded-[15px]"
        } justify-around items-center gap-x-2 text-sm bg-bonjour px-5 text-mineshaft dark:text-white pr-6`}
      >
        {props.icon && (
          <Image src={props.icon} alt="calendar" width={16} height={16} />
        )}
        <div
          className={`text-center text-xxs font-medium ${
            props.size == "small" ? "w-16" : "w-40"
          } text-mineshaft`}
        >
          {selectedOption}
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
