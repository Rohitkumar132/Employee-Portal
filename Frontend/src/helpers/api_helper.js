import axios from "axios";
import { toast } from "sonner";

const API_URL = process.env.REACT_APP_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("authUser"))?.uid;
  return { Authorization: `Bearer ${token}` };
};

const getHeaders = () => {
  let headers = { ...defaultHeaders };
  headers = { ...headers, ...authHeader() };
  return headers;
};

axiosApi.interceptors.request.use(request => {
  request.headers = getHeaders();
  return request;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("authUser");
      window.location.reload();
      toast.error(error.response.data.message);
    } else if (error.response.status === 500) {
      toast.error(error.response.data.message);
    }
    return Promise.reject(error.response.data)
  }
);

export async function get(url, config = {}) {
  const response = await axiosApi.get(url, { ...config });
  return response.data;
}

export async function post(url, data, config = {}) {
  const response = await axiosApi.post(url, { ...data }, { ...config });
  return response.data;
}

export async function put(url, data, config = {}) {
  const response = await axiosApi.put(url, { ...data }, { ...config });
  return response.data;
}

export async function del(url, config = {}) {
  const response = await axiosApi.delete(url, { ...config });
  return response.data;
}

export default axiosApi;