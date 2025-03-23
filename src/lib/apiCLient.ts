import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API;

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.github.com/users/anthonnyygpz",
  headers: {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.status === 401) {
      console.error("Not Authorization");
      sessionStorage.removeItem("token");
      sessionStorage.clear();
    }
    console.error("API Error:", error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
