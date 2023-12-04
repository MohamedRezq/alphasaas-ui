"use client";
import React from "react";
import DotsLoader from "../../../common/DotsLoader";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartDiagram = ({
  type,
  colors,
  xAxis,
  yAxis,
}: {
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
  colors: string[];
  xAxis: string[];
  yAxis: { name: string; data: number[] }[];
}) => {
  const typeToOptions = new Map([
    [
      "pie",
      {
        chart: {
          type: "donut",
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: (value: any) => {
              return `${value}%`;
            },
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        labels: xAxis,
        colors: colors,
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
    [
      "bar",
      {
        chart: {
          type: type || "line", // Default to line chart if type is not provided
          height: "100%",
          width: "100%",
        },
        noData: {
          text: "No Data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#A99AFF",
            fontSize: "14px",
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "10px",
            borderRadius: 3,
            colors: {
              backgroundBarColors: [],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        colors: colors,
        series: yAxis,
        xaxis: {
          categories: xAxis,
          labels: {
            show: true,
            rotate: 0,
            // style: {
            //   colors: theme === "dark" && Array(props.xData.length).fill("white"),
            //   fontSize: "8px",
            //   fontWeight: 600,
            // },
          },
        },
        yaxis: {
          labels: {
            formatter: (value: any) => {
              return `$ ${Math.round(value || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            },
            // style: {
            //   colors: theme === "dark" && ["white"],
            //   fontFamily: "Quicksand",
            //   fontWeight: 700,
            // },
          },
        },
        fill: {
          opacity: 1,
        },
      },
    ],
    [
      "line",
      {
        chart: {
          type: type || "line",
        },
        noData: {
          text: "No Data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#A99AFF",
            fontSize: "14px",
          },
        },
        yaxis: {
          labels: {
            formatter: (value: any) => {
              return `$${value}`;
            },
            style: {
              // colors: theme === "dark" && ["white"],
              fontFamily: "Quicksand",
              fontWeight: 700,
            },
          },
        },
        legend: {
          fontFamily: "Quicksand",
          fontWeight: 500,
          color: "#2C2C2C",
          offsetY: 0,
          labels: {
            colors: colors,
            useSeriesColors: false,
          },
          marginTop: "10px",
          itemMargin: {
            horizontal: 10,
            vertical: 0,
          },
        },
        colors: colors,
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          colors: undefined,
          width: 1,
          dashArray: 0,
        },
        xaxis: {
          categories: xAxis,
          // type: "category",
          // labels: {
          //   show: true,
          //   style: {
          //     colors: theme === "dark" && Array(props.xData.length).fill("white"),
          //     fontFamily: "Quicksand",
          //     fontWeight: 700,
          //     fontSize: "5pt",
          //   },
          // },
          // fontFamily: "Quicksand",
          // fontWeight: 700,
        },
      },
    ],
  ]);
  return (
    <div className="mixed-chart">
      {typeof window !== "undefined" && yAxis ? (
        <ReactApexChart
          options={typeToOptions?.get(type || "") ?? ({} as any)}
          type={type || "line"}
          width={"100%"}
          height={"100%"}
          series={yAxis}
        />
      ) : (
        <div className="flex justify-center items-center text-xs text-gray-400">
          <DotsLoader />
        </div>
      )}
    </div>
  );
};

export default ChartDiagram;
