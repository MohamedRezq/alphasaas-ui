"use client";
import React, { useState } from "react";
//-----> Components <-----------------------------------------//
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { tabs } from "@/config";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const Sidebar = () => {
  //----------------------------------------------------------------------------------//
  const [activeTab, setActiveTab] = useState("Home");
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <div
      className={`w-[250px] min-w-[250px] dark:bg-darkMineShaft h-full xl:h-[96vh] flex flex-col px-5 py-10 justify-between lg:rounded-2xl bg-hippiegreen text-white`}
    >
      <div>
        <Link
          href="/dashboard"
          className="mb-16 flex items-center justify-center cursor-pointer text-[30px] font-bold text-center"
        >
          alpha
        </Link>

        {tabs.map((tab, i) => (
          <div
            key={`${tab.title}-${i}`}
            onClick={() => setActiveTab(tab.title)}
          >
            <SidebarItem
              title={tab.title}
              active={tab.title == activeTab ? true : false}
              icon={tab.icon}
              link={tab.link}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <SidebarItem
          name="Settings"
          active={false}
          icon={<IoSettingsSharp />}
          link="/dashboard"
        /> */}
        <div className="text-[10px] opacity-50 font-light">Version 0.01</div>
      </div>
    </div>
  );
};

export default Sidebar;
