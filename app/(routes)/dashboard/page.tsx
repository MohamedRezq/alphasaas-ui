import React from "react";
import Selector from "@/app/components/views/dashboard/menu/Selector";
import {
  IDashboardHomeData,
  IHomeChartCardData,
  IStatsCardData,
} from "@/utils/interfaces";
import StatsCard from "@/app/components/views/dashboard/cards/StatsCard";
import HomeChartCard from "@/app/components/views/dashboard/cards/HomeChartCard";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default async function HomePage() {
  const homeStats = [
    {
      main_title: {
        content: "Total Saas Spent",
        metadata: {
          color: "#545454",
        },
      },
      main_value: {
        content: "$69k",
        metadata: {
          color: "#545454",
        },
      },
      sub_titles: [
        {
          content: "Total User",
          metadata: {
            color: "#545454",
          },
        },
        {
          content: "Per User Spent",
          metadata: {
            color: "#545454",
          },
        },
      ],
      sub_values: [
        {
          content: "70",
          metadata: {
            color: "#32AD49",
          },
        },
        {
          content: "$986",
          metadata: {
            color: "#32AD49",
          },
        },
      ],
    },
    {
      main_title: {
        content: "Total apps",
        metadata: {
          color: "#545454",
        },
      },
      main_value: {
        content: 1,
        metadata: {
          color: "#545454",
        },
      },
      sub_titles: [
        {
          content: "Free",
          metadata: {
            color: "#545454",
          },
        },
        {
          content: "Paid",
          metadata: {
            color: "#545454",
          },
        },
      ],
      sub_values: [
        {
          content: 0,
          metadata: {
            color: "#32AD49",
          },
        },
        {
          content: 1,
          metadata: {
            color: "#32AD49",
          },
        },
      ],
    },
    {
      main_title: {
        content: "Renewals",
        metadata: {
          color: "#545454",
        },
      },
      main_value: {
        content: 0,
        metadata: {
          color: "#545454",
        },
      },
      sub_titles: [
        {
          content: "Pending",
          metadata: {
            color: "#545454",
          },
        },
        {
          content: "Upcoming",
          metadata: {
            color: "#545454",
          },
        },
        {
          content: "Renewed",
          metadata: {
            color: "#545454",
          },
        },
      ],
      sub_values: [
        {
          content: 0,
          metadata: {
            color: "#FF5252",
          },
        },
        {
          content: 0,
          metadata: {
            color: "#898989",
          },
        },
        {
          content: 0,
          metadata: {
            color: "#2C9F41",
          },
        },
      ],
    },
  ];
  const homeCharts = [
    {
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
    },
    {
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
        type: "pie",
        data: {
          yAxis: [30, 25, 25, 10],
          xAxis: ["Marketing", "Finance", "HR", "IT"],
          colors: ["#40AC54", "#34DD54", "#82F297", "#84BF8F"],
        },
      },
    },
  ];
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//

  return (
    <>
      <div className="flex justify-between mb-[14px]">
        <Selector
          items={["All Time", "Last 6 Months", "Last  Year"]}
          icon="/assets/img/icons/month.svg"
        />
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-[15px]">
        {homeStats.map((card: IStatsCardData, i: number) => (
          <StatsCard
            key={`${card.main_title}-${card.main_value}-${i}`}
            card={card}
            locked={true}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[15px]">
        {homeCharts.map((card: IHomeChartCardData, i: number) => (
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
        ))}
      </div>
    </>
  );
}
