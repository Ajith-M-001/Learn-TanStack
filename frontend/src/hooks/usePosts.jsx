// hooks/usePosts.js
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/postsApi";

export const QUERY_KEYS = {
  POSTS: "posts",
  INFINITE_POSTS: "infinite-posts",
};

export const usePaginatedPosts = ({ page = 1, limit = 5 }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, page],
    queryFn: () => getPosts({ pageParam: page, limit, mode: "pagination" }),
    keepPreviousData: true,
  });
};

export const useInfinitePosts = ({ limit = 5 }) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.INFINITE_POSTS],
    queryFn: ({ pageParam }) =>
      getPosts({ pageParam, limit, mode: "infinite" }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
};
