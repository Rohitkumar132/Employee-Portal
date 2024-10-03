import axios from "axios";

//apply base url for axios
const API_URL = process.env.REACT_APP_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

const token = JSON.parse(localStorage.getItem("authUser"))?.uid;

axiosApi.defaults.headers.common["Authorization"] = token;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosApi;

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
}
