// Home_Tab Data Fetchers
import { MS_AlphaInsights_BASE_URL } from "@/config";
import axios from "axios";

export const fetchAllLicenses = async (token: string) => {
  try {
    const response = await axios.get(`${MS_AlphaInsights_BASE_URL}/licenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchAllEmployees = async (token: string) => {
  try {
    const response = await axios.get(`${MS_AlphaInsights_BASE_URL}/employees`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
