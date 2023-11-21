// pages/index.js
import {
  MS_AlphaInshights_BASE_URL,
  MS_AlphaInsights_AUTH_SECRET_KEY,
} from "@/config";
import axios from "axios";
import jwt from "jsonwebtoken";

export const getTopSpendingDepartments = async () => {
  try {
    const secretKey = MS_AlphaInsights_AUTH_SECRET_KEY;
    const token = jwt.sign(
      { username: "alphasaas@demo.io", organization_id: 1 },
      secretKey,
      { expiresIn: "1h" }
    );

    const response = await axios.post(
      `${MS_AlphaInshights_BASE_URL}/stats/get-top-spending-departments`,
      { organization_id: 1, time_interval: "last_year" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllLicenses = async () => {
  try {
    const secretKey = MS_AlphaInsights_AUTH_SECRET_KEY;
    const token = jwt.sign(
      { username: "alphasaas@demo.io", organization_id: 1 },
      secretKey,
      { expiresIn: "1h" }
    );

    const response = await axios.get(`${MS_AlphaInshights_BASE_URL}/licenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
