"use client";
import React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
// Custom styles
const StyledDataTable = styled(DataTable)`
  .data-table {
    &-head {
      &-row {
        background-color: #f8f9fa; // Header row background color
      }
    }
    &-striped {
      tbody {
        tr:nth-child(odd) {
          background-color: #f9f9f9; // Odd row background color
        }
      }
    }
  }
`;
const CustomTable = ({
  data = [],
  data_type,
}: {
  data: any[];
  data_type: string;
}) => {
  const columns = new Map([
    [
      "applications",
      [
        {
          name: "ID",
          selector: (row: any) => row?.id,
        },
        {
          name: "Source",
          selector: (row: any) => row?.source,
        },
        {
          name: "ID Source",
          selector: (row: any) => row?.id_source,
        },
        {
          name: "Organization ID",
          selector: (row: any) => row?.organization_id,
        },
        {
          name: "Seller",
          selector: (row: any) => row?.seller,
        },
        {
          name: "Application Name",
          selector: (row: any) => row?.application_name,
        },
        {
          name: "Department ID",
          selector: (row: any) => row?.department_id,
        },
        {
          name: "Billing Cycle",
          selector: (row: any) => row?.billing_cycle,
        },
        {
          name: "Issue Date",
          selector: (row: any) => row?.issue_date,
        },
        {
          name: "Total Licenses Count",
          selector: (row: any) => row?.total_licenses_count,
        },
        {
          name: "Used Licenses Count",
          selector: (row: any) => row?.used_licenses_count,
        },
        {
          name: "Inactive Licenses Count",
          selector: (row: any) => row?.inactive_licenses_count,
        },
        {
          name: "Total Amount Paid",
          selector: (row: any) => row?.total_amount_paid,
        },
        {
          name: "Per User Amount Paid",
          selector: (row: any) => row?.per_user_amount_paid,
        },
        {
          name: "Total Wastage Amount",
          selector: (row: any) => row?.total_wastage_amount,
        },
        {
          name: "Data",
          selector: (row: any) => row?.data,
        },
        {
          name: "Created At",
          selector: (row: any) => row?.created_at,
        },
        {
          name: "Updated At",
          selector: (row: any) => row?.updated_at,
        },
        {
          name: "Deleted At",
          selector: (row: any) => row?.deleted_at,
        },
      ],
    ],
    [
      "users",
      [
        { name: "ID", selector: (row: any) => row.id },
        { name: "ID Source", selector: (row: any) => row.id_source },
        {
          name: "Organization ID",
          selector: (row: any) => row.organization_id,
        },
        {
          name: "Department ID",
          selector: (row: any) => row.department_id,
        },
        { name: "First Name", selector: (row: any) => row.first_name },
        { name: "Last Name", selector: (row: any) => row.last_name },
        { name: "Avatar URL", selector: (row: any) => row.avatar_url },
        {
          name: "Email Address",
          selector: (row: any) => row.email_address,
        },
        { name: "Mobile", selector: (row: any) => row.mobile },
        { name: "Role", selector: (row: any) => row.role },
        { name: "Status", selector: (row: any) => row.status },
        { name: "Data", selector: (row: any) => row.data },
        { name: "Created At", selector: (row: any) => row.created_at },
        { name: "Updated At", selector: (row: any) => row.updated_at },
        { name: "Deleted At", selector: (row: any) => row.deleted_at },
      ],
    ],
  ]);
  return <StyledDataTable columns={columns.get(data_type) ?? []} data={data} />;
};

export default CustomTable;
