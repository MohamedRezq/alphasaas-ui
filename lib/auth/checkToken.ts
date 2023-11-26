import { MS_AlphaIdentity_BASE_URL } from "@/config";
import httpServices from "@/utils/httpServices";

type CheckTokenFn = (accessToken: string) => Promise<any>;

export const checkToken: CheckTokenFn = async (accessToken) => {
  try {
    const response = await httpServices.post(
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
