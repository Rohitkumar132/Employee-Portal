import { get, post } from "helpers/api_helper"

export const getList = async () => {
    const response = await get('/store/get-stores');
    return response;
}

export const addUser = async (data) => {
    const response = await post('/store/add-employee', data);
    return response;
}

export const getCategoriesList = async () => {
    const response = await get('/store/get-store-category');
    return response;
}