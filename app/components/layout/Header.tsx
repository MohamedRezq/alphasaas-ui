"use client";
import React, { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Image from "next/image";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
//-----> Components <-----------------------------------------//
import { HiBell } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import Dropdown from "rc-dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { refreshToken } from "@/lib/auth/refreshToken";
//-----> Assets <---------------------------------------------//
import calendarIcon from "@/public/assets/img/icons/calendar.svg";
import dropDownIcon from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Sidebar from "./Sidebar";
import DropMenu_Items from "@/app/components/views/dashboard/DropMenu_Items";
import DropMenu_User from "@/app/components/views/dashboard/menu/UserMenu";
import { ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME } from "@/config";
import { dateFormatter } from "@/utils/formatters";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//
type HeaderProps = {
  headerTitle: string;
};
//----------------------------------------------------------------------------------//

const Header = (props: HeaderProps) => {
  //----------------------------------------------------------------------------------//
  const refreshTokenHandler = async (refresh_token: string) => {
    const res = await refreshToken(refresh_token);
    if (!res?.error) {
      setCookie(null, "alpha_dashboard_access_token", res.auth_key, {
        maxAge: ACCESS_TOKEN_LIFETIME, // Access token lifetime
        // path: "/",
      });
      setCookie(null, "alpha_dashboard_refresh_token", res.refresh_key, {
        maxAge: REFRESH_TOKEN_LIFETIME, // Refresh token lifetime
        // path: "/",
      });
    }
  };
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  useEffect(() => {}, [theme]);
  //----------------------------------------------------------------------------------//
  const [isMobileDrawerOpen, toggleMobileDrawer] = useState(false);
  const [loading, setLoading] = useState(true);
  //----------------------------------------------------------------------------------//
  useEffect(() => {
    setLoading(true);
    let {
      alpha_dashboard_access_token,
      alpha_dashboard_refresh_token,
      alpha_dashboard_session,
    } = parseCookies();
    //--> If no session stored in cookies
    if (!alpha_dashboard_session || !alpha_dashboard_refresh_token)
      redirect(`/login`);
    //--> Check if auth_key is still valid
    if (!alpha_dashboard_access_token && alpha_dashboard_refresh_token) {
      const newKeys = refreshTokenHandler(alpha_dashboard_refresh_token);
      if (!newKeys) redirect(`/login`);
    }
    setLoading(false);
  }, []);
  //----------------------------------------------------------------------------------//
  return (
    <div className="w-full flex flex-col-reverse gap-y-3 items-center md:flex-row justify-between text-mineshaft dark:text-white">
      <div className="text-[30px] font-medium opacity-70 self-start md:self-auto mt-3">
        {props.headerTitle}
      </div>
      <div className="flex gap-x-4 items-center self-end lg:self-auto">
        <div className="flex text-mineshaft items-center gap-x-2 text-xs sm:text-sm bg-bonjour rounded-xl px-4 py-2 pr-6">
          <Image src={calendarIcon} alt="calendar" width={16} />
          <div className="opacity-70">{dateFormatter(Date.now())}</div>
        </div>
        <Dropdown
          trigger={["click"]}
          overlay={
            <DropMenu_Items items={["Notification 1", "Notification 2"]} />
          }
          animation="slide-up"
          onVisibleChange={() => {}}
        >
          <div className="relative cursor-pointer hover:bg-mineshaft rounded-full hover:bg-opacity-10">
            <HiBell className="text-cuttysark w-7 h-7" />
            <div className="h-4 w-4 bg-thunderbird font-bold rounded-full flex items-center justify-center text-xxs absolute top-[2px] border border-white -right-1 text-white p-2">
              12
            </div>
          </div>
        </Dropdown>

        <div className="flex gap-x-1 items-center">
          <div className="rounded-full h-12 w-12 border border-cuttysark p-1">
            <Image
              src="/assets/img/user.png"
              alt="user"
              width={40}
              height="0"
              className="h-auto"
            />
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={<DropMenu_User them={theme || ""} />}
            openClassName="mt-[20px]"
            overlayClassName="pt-0 pl-0 pr-0 pb-0 user-menu"
            animation="slide-up"
            onVisibleChange={() => {}}
          >
            <Image
              src={dropDownIcon}
              alt="Menu"
              width={12}
              className="w-3 cursor-pointer"
            />
          </Dropdown>
        </div>
        <button
          className="lg:hidden text-hippiegreen dark:text-white text-2xl font-bold mx-2"
          onClick={() => {
            toggleMobileDrawer(!isMobileDrawerOpen);
          }}
        >
          <RxHamburgerMenu />
        </button>
        <Drawer
          open={isMobileDrawerOpen}
          onClose={() => {
            toggleMobileDrawer(!isMobileDrawerOpen);
          }}
          direction="left"
          className="bla bla bla"
        >
          <Sidebar />
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
