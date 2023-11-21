import { IDashboardDeptSummaryCard, IDashboardHomeData } from "./utils/types";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
export const MS_AlphaInshights_BASE_URL =
  process.env.NEXT_PUBLIC_MS_AlphaInsights_BASE_URL || "";
export const MS_AlphaInsights_AUTH_SECRET_KEY =
  process.env.NEXT_PUBLIC_MS_AlphaInsights_AUTH_SECRET_KEY || "";
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
//-----> STATIC & INIT DATA
export const intervals = ["All Time", "Month", "Quarter", "Year"];
export const initDashboardHomeData: IDashboardHomeData = {
  stats: Array(3).fill({
    mainTitle: "AlphaSaas",
    mainValue: 0,
    mainValueType: "",
    subValues: Array(3).fill({
      value: 0,
      state: "",
      title: "AlphaSaas",
    }),
  }),
  charts: Array(3).fill({
    header: "AlphaSaas",
    mainTitle: "AlphaSaas",
    mainValue: 0,
    subValues: Array(3).fill({
      value: 0,
      title: "AlphaSaas",
    }),
    diagram: {
      type: "Line",
      data: {},
    },
  }),
};
export const initDashboardDepartmentSummaryData: IDashboardDeptSummaryCard[] =
  Array(6).fill({
    title: "AlphaSaas",
    spend: 0,
    percentage: 0,
    users: [],
    apps: [],
  });
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
export const tabs = [
  {
    icon: "/assets/img/icons/house-chimney-blank.svg",
    title: "Home",
    link: "/dashboard",
  },
  {
    icon: "/assets/img/icons/application.svg",
    title: "Applications",
    link: "/dashboard/applications",
  },
  {
    icon: "/assets/img/icons/category.svg",
    title: "Department",
    link: "/dashboard/departments",
  },
  {
    icon: "/assets/img/icons/sync.svg",
    title: "Integration",
    link: "/dashboard/integrations",
  },
  {
    icon: "/assets/img/icons/lightbulb-dollar.svg",
    title: "Opportunities",
    link: "/dashboard/opportunities",
  },
  {
    icon: "/assets/img/icons/renewable.svg",
    title: "Renewal hub",
    link: "/dashboard/renewal",
  },
];
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
export const integrableApplications = new Map([
  ["1", process.env.NEXT_PUBLIC_QUICKBOOKS_AUTH_URL],
  ["2", process.env.NEXT_PUBLIC_ZOHOBOOKS_AUTH_URL],
  ["3", process.env.NEXT_PUBLIC_ZOHOPEOPLE_AUTH_URL],
  ["5", process.env.NEXT_PUBLIC_JIRA_AUTH_URL],
  ["6", process.env.NEXT_PUBLIC_OKTA_AUTH_URL],
]);
