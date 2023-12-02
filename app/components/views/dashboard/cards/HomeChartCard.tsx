import React from "react";
import { IHomeChartCardData } from "@/utils/interfaces";
import ChartDiagram from "../charts/ChartDiagram";

const HomeChartCard = ({ url }: { url: string }) => {
  const res = {
    locked: true,
    header: "License Usage Summary",
    mainTitle: "Total Licenses",
    mainValue: 69030,
    subValues: [
      {
        value: 128,
        title: "Used Licenses",
      },
      {
        value: 5608,
        title: "Unused Licenses",
      },
    ],
    diagram: {
      type: "bar",
      data: {
        yAxis: [
          {
            name: "Used",
            data: [1100, 700, 550, 1300, 520, 850], // [1100, 700, 550, 1300, 520, 850]
          },
          {
            name: "Unused",
            data: [120, 300, 520, 90, 350, 450], // [120, 300, 520, 90, 350, 450]
          },
        ],
        xAxis: ["Marketing", "Finance", "HR", "IT", "Engineering", "R&D"],
        colors: ["#A99AFF", "#FF4E00"],
      },
    },
  };
  return (
    <div
      className="relative col-span-2 rounded-2xl lg:h-[239px] text-lightMineShaft w-full font-semibold "
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      {res?.locked && <div className="overlay-locked-card"></div>}
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-5 py-1">
        {res?.header}
        {/*  */}
      </div>
      <div
        className={`lg:h-[210px] h-fit pl-7 pr-3 bg-wildsand dark:bg-darkMineShaft dark:text-white  flex flex-col md:flex-row gap-y-1 whitespace-nowrap pt-2 pb-3 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="flex flex-col mt-5 mr-1 text-[10px]">
          <div>{res?.mainTitle}</div>
          <div className="text-[20px] font-bold text-mineshaft dark:text-white opacity-80 mt-1 mb-5">
            ${res?.mainValue}
          </div>
          {res?.subValues?.map((item, i: number) => (
            <div
              key={`${item.value}-${i}`}
              className="flex items-center gap-x-2 ml-1 text-[10px] font-medium"
            >
              <div className="font-bold w-7">${item.value}</div>
              <div className="text-grayish font-medium dark:text-white">
                {item?.title?.length > 15
                  ? `${item.title.slice(0, 15)}...`
                  : item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="dark:bg-midMineShaft h-full w-full py-1 px-2 rounded-[15px]">
          <ChartDiagram
            yAxis={res?.diagram.data?.yAxis}
            xAxis={res?.diagram.data?.xAxis}
            type={(res?.diagram.type as any) || "bar"}
            colors={res?.diagram.data.colors}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeChartCard;
