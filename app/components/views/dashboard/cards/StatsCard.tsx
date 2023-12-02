import React from "react";
import { IStatsCardData } from "@/utils/interfaces";
import ChartMenu from "../menu/ChartMenu";
//--------------------------------------------------//

const StatsCard = ({
  card,
  locked,
}: {
  card: IStatsCardData;
  locked: boolean;
}) => {
  return (
    <div
      style={{ boxShadow: "0px 3px 5px #00000029" }}
      className={`rounded-2xl h-[112px] w-[285px] flex bg-wildsand p-1 text-emperor dark:bg-darkMineShaft dark:text-white ${
        locked && "locked-card"
      }`}
    >
      <div className="w-1/2 flex flex-col items-start justify-center my-auto h-20 gap-y-1 pl-4">
        <div className="text-[10px] font-medium">{card.main_title.content}</div>
        <div className={`text-3xl font-bold dark:text-white text-ellipsis`}>
          {card.main_value.content}
        </div>
      </div>
      <div className="bg-white dark:bg-midMineShaft font-medium relative flex flex-col gap-y-1 pl-3 items-start justify-center w-1/2 rounded-tr-2xl rounded-br-2xl text-[11px]">
        {card.sub_titles.map((item, i) => (
          <div
            key={`${item.content}-${i}`}
            className="flex justify-between items-center gap-x-1"
          >
            <div
              className={`text-[${
                card.sub_values.at(i)?.metadata.color
              }] text-[11px] font-bold w-8`}
              style={{ color: card.sub_values.at(i)?.metadata.color }}
            >
              {card.sub_values?.at(i)?.content}
            </div>
            <div
              className={`w-12 whitespace-nowrap text-[${item.metadata.color}] font-semibold text-[11px]`}
              style={{ color: item.metadata.color }}
            >
              {item.content}
            </div>
          </div>
        ))}
        <ChartMenu />
      </div>
    </div>
  );
};

export default StatsCard;
