import React from "react";
import Selector from "@/app/components/views/dashboard/Selector";
import {
  IDashboardHomeData,
  IHomeChartCardData,
  IStatsCardData,
} from "@/utils/types";
import StatsCard from "@/app/components/views/dashboard/StatsCard";
import { intervals } from "@/config";
import HomeChartCard from "@/app/components/views/dashboard/HomeChartCard";
import { getTopSpendingDepartments } from "@/lib/data/home";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default async function HomePage() {
  const response = await getTopSpendingDepartments();
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//

  return (
    <>
      <div className="flex justify-between mb-[14px]">
        <Selector items={intervals} icon="/assets/img/icons/month.svg" />
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-[15px]">
        {/* {data &&
          data.stats.map((card: IStatsCardData, i: number) => (
            <StatsCard
              key={`${card.mainTitle}-${card.mainValue}-${i}`}
              mainTitle={card.mainTitle}
              mainValue={card.mainValue}
              mainValueType={card.mainValueType}
              subValues={card.subValues}
            />
          ))} */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[15px]">
        {/* {data &&
          data.charts.map((card: IHomeChartCardData, i: number) => (
            <div
              className={`col-span-${i % 2 == 0 ? 2 : 1}`}
              key={`${card.mainTitle}-${card.mainValue}-${i}`}
            >
              <HomeChartCard
                header={card.header}
                mainTitle={card.mainTitle}
                mainValue={card.mainValue}
                subValues={card.subValues}
                diagram={card.diagram}
              />
            </div>
          ))} */}
      </div>
    </>
  );
}
