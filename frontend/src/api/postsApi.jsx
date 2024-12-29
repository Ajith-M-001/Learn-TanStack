import axiosInstance from "./axiosInstance";

const POST_URL = "/posts";

export const getPosts = async ({
  pageParam = 1,
  limit = 5,
  mode = "pagination",
}) => {
  try {
    const response = await axiosInstance.get(
      `${POST_URL}/${mode}?page=${pageParam}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};
