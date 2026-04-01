import axios from "axios";
import { getErrorMessage } from "../utils/errorHandler";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = getErrorMessage(error);

    // Attach readable message
    error.customMessage = message;

    return Promise.reject(error);
  }
);

export default axiosInstance;