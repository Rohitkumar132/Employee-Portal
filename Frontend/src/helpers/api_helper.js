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
  (error) => Promise.reject(error)
);

export default axiosApi;

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
}

export async function post(url, data, headers = {}) {
  return axiosApi
    .post(url, { ...data }, { headers })
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
}
