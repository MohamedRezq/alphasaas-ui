import CustomTable from "@/app/components/views/dashboard/tables/CustomTable";
import { getAllLicenses } from "@/lib/data/home";
import React from "react";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default async function ApplicationOverviewPage() {
  const data = await getAllLicenses();
  //-------------------------------------------------------------------------//
  return (
    <div>
      <CustomTable data={data} />
    </div>
  );
}
