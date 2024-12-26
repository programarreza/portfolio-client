"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createSkill = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      "/skills/create-skill",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSkills = async () => {
  const res = await fetch(`${envConfig.baseApi}/skills`);

  if (!res.ok) {
    throw new Error("Failed to fetch skills data");
  }

  return await res.json();
};