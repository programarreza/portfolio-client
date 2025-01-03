"use server";
import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createBlog = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/blogs/create-blog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getBlogs = async () => {
  const res = await fetch(`${envConfig.baseApi}/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }

  return await res.json();
};

export const getSingleBlog = async (blogId: string) => {
  const res = await fetch(`${envConfig.baseApi}/blogs/${blogId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return await res.json();
};

export const updateBlog = async (args: any) => {

  try {
    const { data } = await axiosInstance.patch(
      `/blogs/${args?.blogId}`,
      args?.blogData
    );

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteBlog = async (blogId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/blogs/${blogId}`);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
