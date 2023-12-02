import { MS_AlphaIdentity_BASE_URL } from "@/config";
import axios from "axios";

type CheckTokenFn = (accessToken: string) => Promise<any>;

export const checkToken: CheckTokenFn = async (accessToken) => {
  try {
    const response = await axios.post(
      `${MS_AlphaIdentity_BASE_URL}/api/users/check_token`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response?.data;
  } catch (error: any | null) {
    console.log("error: ", error?.response?.data?.error?.message);
    return { error: error?.response?.data?.error?.message };
  }
};
