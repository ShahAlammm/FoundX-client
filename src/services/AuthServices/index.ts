"use server";

import AxiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const registerUser = async (UserData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", UserData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default registerUser;
