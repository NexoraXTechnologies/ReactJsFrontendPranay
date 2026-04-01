import axiosInstance from "../lib/axios";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const authService = {
  // ============================
  // REGISTER
  // ============================
  register(payload) {
    return axiosInstance.post(API_ENDPOINTS.auth.register, payload);
  },

  // ============================
  // LOGIN
  // ============================
  login(payload) {
    return axiosInstance.post(API_ENDPOINTS.auth.login, payload);
  },

  // ============================
  // GET PROFILE
  // ============================
  getProfile() {
    return axiosInstance.get(API_ENDPOINTS.auth.profile);
  },

  // ============================
  // LOGOUT (optional backend call)
  // ============================
  logout() {
    return axiosInstance.post(API_ENDPOINTS.auth.logout);
  },

  // ============================
  // REFRESH TOKEN (if you use it)
  // ============================
  refreshToken(payload) {
    return axiosInstance.post(API_ENDPOINTS.auth.refreshToken, payload);
  },
};