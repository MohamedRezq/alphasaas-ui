"use client";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
//-----> Components <-----------------------------------------//
import Menu from "rc-menu";
//-----> Redux <----------------------------------------------//
// import { removeUser } from "@/src/store/slices/user";
import Image from "next/image";
import { useTheme } from "next-themes";
import { destroyCookie } from "nookies";
import { dateFormatter } from "@/utils/formatters";
//-----> Assets <---------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const UserMenu = ({ them }: { them: string }) => {
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  const handleUserLogout = () => {
    destroyCookie(null, "alpha_dashboard_session");
    destroyCookie(null, "alpha_dashboard_access_token");
    destroyCookie(null, "alpha_dashboard_refresh_token");
    router.push(`/login`);
  };
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  type IconType = {
    text: string;
    url: string;
    action: MouseEventHandler<HTMLImageElement>;
  };
  const icons: IconType[] = [
    {
      text: "User",
      url: "/assets/img/user.svg",
      action: () => {},
    },
    {
      text: "Settings",
      url: "/assets/img/Layer 2.svg",
      action: () => {},
    },
    {
      text: "Organisation",
      url: "/assets/img/briefcase.svg",
      action: () => {},
    },
    {
      text: "Payment",
      url: "/assets/img/wallet (1).svg",
      action: () => {},
    },
    {
      text: `${theme === "light" ? "Dark" : "Light"} mode`,
      url: "/assets/img/brightness.svg",
      action: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
    },
    {
      text: "Logout",
      url: "/assets/img/power.svg",
      action: handleUserLogout,
    },
  ];
  const date = dateFormatter();
  //----------------------------------------------------------------------------------//

  return (
    <Menu onSelect={() => {}}>
      <div className="h-[279px] text-mineshaft text-[10px] dark:text-white px-[8px] pt-[8px] pb-[23px] w-[285px] rounded-2xl bg-white dark:bg-[#3E3E3E] flex flex-col justify-between">
        <div className="w-full bg-[#F9F9F9] pt-[23px] pb-[40px] gap-y-[28px] px-[30px] rounded-2xl h-[188px] dark:bg-darkMineShaft grid grid-cols-3">
          {icons.map((icon: IconType, index: number) => (
            <div
              key={`icon-${icon.text}`}
              className="flex w-[68px] flex-col justify-center items-center gap-y-[10px]"
            >
              <Image
                src={icon.url}
                alt={icon.text}
                width={24}
                height={0}
                className="h-auto cursor-pointer"
                onClick={icon.action}
              />
              <p onClick={icon.action} className="cursor-pointer">
                {icon.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-[#959595] dark:text-white opacity-70 self-end flex flex-col gap-y-[3px] text-right pr-[22px]">
          <div>Last Synced</div>
          <div>{date}</div>
        </div>
      </div>
    </Menu>
  );
};

export default UserMenu;
