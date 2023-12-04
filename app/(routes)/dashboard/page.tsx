import React from "react";
import Selector from "@/app/components/views/dashboard/menu/Selector";
import { IHomeChartResponse, IStatsCardData } from "@/utils/interfaces";
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
  const homechart_card_1: IHomeChartResponse = {
    status: 200,
    locked: false,
    data: {
      cardHeader: "License Usage Summary",
      mainHeader: "Total Licenses",
      mainValue: "$69,030",
      subHeaders: [
        {
          value: "$128",
          title: "Used Licenses",
        },
        {
          value: "$5,608",
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
  };
  const homechart_card_2: IHomeChartResponse = {
    status: 200,
    locked: false,
    data: {
      cardHeader: "Top 4 Apps by Spend",
      mainHeader: "Total Spend",
      mainValue: "$1,700",
      subHeaders: [
        {
          value: "$723",
          title: "Paylocity",
        },
        {
          value: "$598",
          title: "QuickBooks Online",
        },
        {
          value: "$250",
          title: "BetterCloud",
        },
        {
          value: "$130",
          title: "Spiff",
        },
      ],
      diagram: {
        type: "pie",
        data: {
          yAxis: [25, 50, 20, 5],
          xAxis: ["Paylocity", "QuickBooks Online", "BetterCloud", "Spiff"],
          colors: ["#40AC54", "#34DD54", "#82F297", "#84BF8F"],
        },
      },
    },
  };
  const homechart_card_3: IHomeChartResponse = {
    status: 200,
    locked: false,
    data: {
      cardHeader: "Top 3 Departments by Spend",
      mainHeader: "Total Spend",
      mainValue: "$1,570",
      subHeaders: [
        {
          value: "$723",
          title: "HR",
        },
        {
          value: "$598",
          title: "Sales",
        },
        {
          value: "$250",
          title: "IT",
        },
      ],
      diagram: {
        type: "line",
        data: {
          yAxis: [
            {
              name: "Human R.", // name: "Finance"
              data: [260, 260, 320, 660, 250, 660, 590, 200, 300],
            },
            {
              name: "Sales", // name: "Finance"
              data: [200, 360, 320, 400, 550, 580, 210, 400, 650],
            },
            {
              name: "IT", // name: "Finance"
              data: [660, 460, 320, 860, 750, 230, 370, 600, 120],
            },
          ],
          xAxis: [
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
          ],
          colors: ["#A99AFF", "#FF4E00", "#34DD54"],
        },
      },
    },
  };
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
        <HomeChartCard
          card={homechart_card_1}
          additionalClassNames="col-span-2"
        />
        <HomeChartCard
          card={homechart_card_2}
          additionalClassNames="col-span-1"
        />
        <HomeChartCard
          card={homechart_card_3}
          additionalClassNames="col-span-2"
        />
      </div>
    </>
  );
}
