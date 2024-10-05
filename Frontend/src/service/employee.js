import { get, post } from "helpers/api_helper"

export const getList = async () => {
    const response = await get('/employee/all-employee');
    return response.data;
}

export const addUser = async (data) => {
    const response = await post('/employee/add-employee', data);
    return response.data;
}