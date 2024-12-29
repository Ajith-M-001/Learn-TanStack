//frontend\src\api\axiosInstance.js

import axios from "axios";

// Access environment variables
const environment = import.meta.env.VITE_ENVIRONMENT;
console.log(environment);

const baseURL =
  environment === "production"
    ? import.meta.env.VITE_PRODUCTION_BASE_URL
    : import.meta.env.VITE_DEVELOPMENT_BASE_URL;

console.log(baseURL);

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add custom logic here, like attaching tokens or modifying headers before each request
    const token = localStorage.getItem("authToken"); // Example: Fetch token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach the token to the request
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // You can handle the response here if necessary
    return response;
  },
  (error) => {
    // You can handle errors globally here
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized error globally (e.g., redirect to login page)
      console.log("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
