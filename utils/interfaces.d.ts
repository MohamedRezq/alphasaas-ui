import { ReactNode } from "react";

export interface IUserCredentials {
  username: string;
  password: string;
}

export interface IStatsCardData {
  main_title: {
    content: string | number;
    metadata: {
      color: string;
    };
  };
  main_value: {
    content: string | number;
    metadata: {
      color: string;
    };
  };
  sub_titles: {
    content: string | number;
    metadata: {
      color: string;
    };
  }[];
  sub_values: {
    content: string | number;
    metadata: {
      color: string;
    };
  }[];
}

export interface IHomeChartCardData {
  header: string;
  mainTitle: string;
  mainValue: number;
  subValues: {
    value: number;
    title: string;
  }[];
  diagram: {
    type: any;
    data: {
      xAxis: string[];
      yAxis: any[];
      colors: string[];
    };
    // size: number; // col-span:(1 or 2)
  };
}

export interface IDashboardHomeData {
  stats: IStatsCardData[];
  charts: IHomeChartCardData[];
}

export interface IAppAvatar {
  logo: string;
  name: string;
  url?: string;
}

export interface IUserAvatar {
  image: string;
  name: string;
}

export interface IDashboardDeptSummaryCard {
  title: string;
  spend: number;
  percentage: number;
  users: IUserAvatar[];
  apps: IAppAvatar[];
}

export interface ICustomChartCard {
  header: string;
  mainTitle: string;
  mainValue: ReactNode;
  filterMenus: ReactNode[];
  diagram: ReactNode;
  size: number;
}

export interface ISaasCardProps {
  logo_url: string;
  name: string;
  description: string;
  active?: boolean;
  disabled?: boolean;
  id: string;
  category_id: string;
}

export enum license_type {
  "free" = "free",
  "paid" = "paid",
}

export enum integration_status {
  "pending" = "pending",
  "active" = "active",
  "disabled" = "disabled",
  "error" = "error",
}

export interface IApiOrganizationApplication {
  id?: number;
  category_id: string;
  organization_id: string;
  license_type?: license_type;
  application_id: number;
  vendor_name?: string;
  vendor_id?: string;
  department_id?: number;
  integration_status?: integration_status;
  data?: string;
  active?: boolean;
}

export interface IBubble {
  label: string;
  xPos: number;
  yPos: number;
  radius: number;
  color: string;
  value?: number;
}
