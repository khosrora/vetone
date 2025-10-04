import axios from "axios";
import { signOut } from "next-auth/react";
import { LINK_LANDINGPAGE } from "@repo/lib/links";

// Create axios instance
const axiosInstance = axios.create();

// Response interceptor to handle 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Handle 401 Unauthorized errors
      console.log("401 Unauthorized - signing out user");
      await signOut({ redirect: true, callbackUrl: LINK_LANDINGPAGE });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
