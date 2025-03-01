import ax from "axios";
import { API_URL } from "../constants/api.ts";

export const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = null;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = "en";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
