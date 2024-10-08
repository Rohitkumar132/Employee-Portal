import axios from "axios";

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
  (error) => Promise.reject(error.response.data)
);

export async function get(url, config = {}) {
  const response = await axiosApi.get(url, { ...config });
  return response.data;
}

export async function post(url, data, headers = {}) {
  const response = await axiosApi.post(url, { ...data }, { headers });
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