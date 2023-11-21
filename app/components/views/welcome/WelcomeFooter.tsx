import Link from "next/link";
import React from "react";
import ActiveBtn from "./ActiveBtn";
import Image from "next/image";
import logo from "@/public/assets/img/AlphaS wordmark.svg";
import Bullets from "./Bullets";

interface IWelcomeFooterProps {
  title: string;
  nextLink?: string;
  backLink?: string;
  step: number;
}
const WelcomeFooter = (props: IWelcomeFooterProps) => {
  return (
    <>
      <div className="flex gap-y-2 mt-16 items-center w-full px-10 sm:w-[410px] lg:w-[615px] justify-between">
        {props.backLink ? (
          <Link href={props.backLink}>
            <ActiveBtn text="Back" />
          </Link>
        ) : (
          <div className="w-16"></div>
        )}
        <div className="text-emperor text-[10px]">{props.title}</div>
        {props.nextLink ? (
          <Link href={props.nextLink}>
            <ActiveBtn text="Next" />
          </Link>
        ) : (
          <div className="w-16"></div>
        )}
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={props.step} />
      </div>
    </>
  );
};

export default WelcomeFooter;
