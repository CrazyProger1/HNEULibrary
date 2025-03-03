import ax from "axios";
import { API_URL } from "../constants/api.ts";
import { toast } from "react-toastify";

export const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    // TODO: token getting from store / local storage / cookies/ smth
    const token = null;

    if (token) config.headers.Authorization = `Bearer ${token}`;

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
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let details = "An unexpected error occurred.";
    const response = error?.response;

    if (response) {
      const { data, status } = response;
      if (status != 500) details = data.errors[0].detail || details;
    }

    console.log(details);
    toast.error(details);
  },
);
