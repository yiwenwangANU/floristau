import axios from "axios";

const API_BASE_URL = process.env.DATABASE_URL;

const axiosAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Interceptor to attach CSRF token
axiosAuth.interceptors.request.use((config) => {
  const csrfMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (csrfMatch) {
    config.headers["X-CSRF-TOKEN"] = csrfMatch[1];
  }
  return config;
});

export default axiosAuth;
