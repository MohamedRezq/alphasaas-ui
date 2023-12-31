import CustomTable from "@/app/components/views/dashboard/tables/CustomTable";
import { fetchAllLicenses } from "@/lib/data/home";
import React from "react";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default async function ApplicationOverviewPage() {
  const data = await fetchAllLicenses("");
  //-------------------------------------------------------------------------//
  return (
    <div>
      <CustomTable data={data} data_type="applications" />
    </div>
  );
}
