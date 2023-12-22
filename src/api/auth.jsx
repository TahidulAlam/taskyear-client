import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Error tracked in the interceptor ", error.response);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // await clearToken();
      window.location.replace("/signin");
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
