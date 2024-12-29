//frontend\src\hooks\useUsers.js

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUsersById,
  updateUser,
} from "../api/userApi";

export const QUERY_KEYS = {
  USERS: ["users"],
  USER: (userId) => ["user", userId],
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: getAllUsers,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.USERS); // Use the constant here
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};

export const useGetUserById = (userId) => {
  return useQuery({
    queryKey: QUERY_KEYS.USER(userId),
    queryFn: () => getUsersById(userId),
    enabled: !!userId, // Only run if userId is truthy
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, data }) => updateUser(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.USERS); // Use the constant here
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.USERS); // Use the constant here
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });
};
