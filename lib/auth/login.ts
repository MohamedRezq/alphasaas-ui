import { MS_AlphaIdentity_BASE_URL } from "@/config";
import httpServices from "@/utils/httpServices";

type LoginFn = (username: string, password: string) => Promise<any>;

export const login: LoginFn = async (username, password) => {
  const userData = {
    email: username,
    password: password,
  };
  try {
    const response = await httpServices.post(
      `${MS_AlphaIdentity_BASE_URL}/api/users/signin`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error: any | null) {
    console.log("error: ", error?.response?.data?.error?.message);
    return { error: error?.response?.data?.error?.message };
  }
};
