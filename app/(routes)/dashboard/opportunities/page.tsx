import React from "react";
import Selector from "@/app/components/views/dashboard/menu/Selector";
import { intervals } from "@/config";
import CustomChartCard from "@/app/components/views/dashboard/CustomChartCard";
import ChartDiagram from "@/app/components/views/dashboard/charts/ChartDiagram";
import TitleHR from "@/app/components/common/TitleHR";
import OpportFinanceAlert from "@/app/components/views/dashboard/OpportFinanceAlert";
import SimpleBubbleChart from "@/app/components/views/dashboard/charts/SimpleBubbleChart";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default function OpportPage() {
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//

  return (
    <>
      <div className="flex justify-between mb-[14px]">
        <Selector items={intervals} icon="/assets/img/icons/month.svg" />
      </div>
      <TitleHR text="Your SaaS Spend Health" />
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-[15px]">
        <OpportFinanceAlert />
        <CustomChartCard
          header="Budget Vs. Spend"
          mainTitle="Total Spent"
          filterMenus={[
            <Selector key={`filter-menu-1`} size="small" items={intervals} />,
            <Selector key={`filter-menu-2`} size="small" items={intervals} />,
            <Selector key={`filter-menu-3`} size="small" items={intervals} />,
          ]}
          mainValue={
            <div className="text-[20px] font-bold text-[#2C2C2C] dark:text-white opacity-90">
              <span className="text-[#509051]">$10,000</span>/
              <span className="text-[#FF6C6C]">$12,000</span>
            </div>
          }
          diagram={<ChartDiagram />}
          size={2}
        />
        <CustomChartCard
          header="Savings Potential"
          mainTitle="Total Savings"
          filterMenus={[
            <Selector key={`filter-menu`} size="small" items={intervals} />,
          ]}
          mainValue={
            <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white ">
              $3956
              {/* {Math.round(chartData.value || 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
              <span className="text-[#509051] text-[8px]">Apx.</span>
            </div>
          }
          diagram={
            <SimpleBubbleChart
              height={117}
              width={270}
              bubbles={[
                {
                  label: "Unused",
                  color: "#ED3131",
                  xPos: 0.5,
                  yPos: 0.75,
                  radius: 1.5,
                },
                {
                  label: "Inactive",
                  color: "#B4B4B4",
                  xPos: 6,
                  yPos: 4.75,
                  radius: 0.75,
                },
                {
                  label: "Low Usage",
                  color: "#E0D33E",
                  xPos: 7,
                  yPos: 1.15,
                  radius: 0.9,
                },
              ]}
            />
          }
          size={1}
        />
        <CustomChartCard
          header="Overlapping Application"
          mainTitle="Total potential"
          filterMenus={[
            <Selector key={`filter-menu`} size="small" items={intervals} />,
          ]}
          mainValue={
            <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white ">
              $3956
              {/* {Math.round(chartData.value || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
              <span className="text-[#509051] text-[8px]">Apx.</span>
            </div>
          }
          diagram={
            <SimpleBubbleChart
              height={117}
              width={270}
              bubbles={[
                {
                  label: "Unused",
                  color: "#ED3131",
                  xPos: 0.5,
                  yPos: 0.75,
                  radius: 1.5,
                },
                {
                  label: "Inactive",
                  color: "#B4B4B4",
                  xPos: 6,
                  yPos: 4.75,
                  radius: 0.75,
                },
                {
                  label: "Low Usage",
                  color: "#E0D33E",
                  xPos: 7,
                  yPos: 1.15,
                  radius: 0.9,
                },
                {
                  label: "Unused",
                  color: "#ED3131",
                  xPos: 30.5,
                  yPos: 0.75,
                  radius: 1.5,
                },
                {
                  label: "Inactive",
                  color: "#B4B4B4",
                  xPos: 36,
                  yPos: 4.75,
                  radius: 0.75,
                },
                {
                  label: "Low Usage",
                  color: "#E0D33E",
                  xPos: 37,
                  yPos: 1.15,
                  radius: 0.9,
                },
                {
                  label: "Unused",
                  color: "#ED3131",
                  xPos: 60.5,
                  yPos: 0.75,
                  radius: 1.5,
                },
                {
                  label: "Inactive",
                  color: "#B4B4B4",
                  xPos: 66,
                  yPos: 4.75,
                  radius: 0.75,
                },
                {
                  label: "Low Usage",
                  color: "#E0D33E",
                  xPos: 67,
                  yPos: 1.15,
                  radius: 0.9,
                },
              ]}
            />
          }
          size={2}
        />
      </div>
    </>
  );
}
