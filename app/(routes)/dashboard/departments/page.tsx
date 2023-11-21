import React from "react";
import Selector from "@/app/components/views/dashboard/Selector";
import { IDashboardDeptSummaryCard } from "@/utils/types";
import { intervals } from "@/config";
import DeptSummaryCard from "@/app/components/views/dashboard/DeptSummaryCard";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default function DeparmtentOverviewPage() {
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <>
      <div className="flex justify-between mb-[14px]">
        <Selector items={intervals} icon="/assets/img/icons/month.svg" />
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-[15px]">
        {/* {data &&
          data.map((card: IDashboardDeptSummaryCard) => (
            <DeptSummaryCard
              key={`dept-summary-card-${card?.title}`}
              title={card?.title}
              spend={card?.spend}
              apps={card?.apps}
              users={card?.users}
              percentage={card?.percentage}
            />
          ))} */}
      </div>
    </>
  );
}
