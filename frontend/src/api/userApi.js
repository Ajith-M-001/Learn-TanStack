//frontend\src\api\userApi.js

import axiosInstance from "./axiosInstance";

const USER_URL = "/users";

// ** Create a new user (POST) **
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post(`${USER_URL}/add`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// ** Get all users (GET) **
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`${USER_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

// ** Get user by ID (GET) **
export const getUsersById = async (userId) => {
  try {
    const response = await axiosInstance.get(`${USER_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};

// ** Update a user by ID (PUT) **
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await axiosInstance.put(
      `${USER_URL}/${userId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

// ** Delete a user by ID (DELETE) **
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(`${USER_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};
