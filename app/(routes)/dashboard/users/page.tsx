import CustomTable from "@/app/components/views/dashboard/tables/CustomTable";
import { getAllEmployees } from "@/lib/data/home";
import React from "react";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default async function ApplicationOverviewPage() {
  const data = await getAllEmployees();
  //-------------------------------------------------------------------------//
  return (
    <div>
      <CustomTable data={data} data_type="users" />
    </div>
  );
}
