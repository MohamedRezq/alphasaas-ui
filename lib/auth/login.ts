import { MS_AlphaIdentity_BASE_URL } from "@/config";
import axios from "axios";

type LoginFn = (username: string, password: string) => Promise<any>;

export const login: LoginFn = async (username, password) => {
  const userData = {
    email: username,
    password: password,
  };
  try {
    const response = await axios.post(
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
