import { MS_AlphaIdentity_BASE_URL } from "@/config";
import axios from "axios";

type RefreshTokenFn = (refreshToken: string) => Promise<any>;

export const refreshToken: RefreshTokenFn = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${MS_AlphaIdentity_BASE_URL}/api/users/token/refresh`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    return response?.data;
  } catch (error: any | null) {
    console.log("error: ", error?.response?.data?.error?.message);
    return { error: error?.response?.data?.error?.message };
  }
};
