"use client";
import React from "react";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { VERSION_NUMBER } from "@/config";

const Sidebar = () => {
  //-------------------------------------------------------//
  const pathname = usePathname();
  //-------------------------------------------------------//
  const tabs = [
    {
      icon: "/assets/img/icons/house-chimney-blank.svg",
      title: "Home",
      link: "/dashboard",
    },
    {
      icon: "/assets/img/icons/application.svg",
      title: "Applications",
      link: "/dashboard/applications",
    },
    {
      icon: "/assets/img/icons/category.svg",
      title: "Department",
      link: "/dashboard/departments",
    },
    {
      icon: "/assets/img/icons/sync.svg",
      title: "Integration",
      link: "/dashboard/integrations",
    },
    {
      icon: "/assets/img/icons/lightbulb-dollar.svg",
      title: "Opportunities",
      link: "/dashboard/opportunities",
    },
    {
      icon: "/assets/img/icons/renewable.svg",
      title: "Renewal hub",
      link: "/dashboard/renewal",
    },
  ];
  //-------------------------------------------------------//
  const activeTab = tabs.find((tab) => tab.link === pathname)?.title;
  //-------------------------------------------------------//
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
          <div key={`${tab?.title}-${i}`}>
            <SidebarItem
              title={tab?.title}
              active={tab?.title === activeTab}
              icon={tab?.icon}
              link={tab?.link}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[10px] opacity-50 font-light">
          Version {VERSION_NUMBER}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
