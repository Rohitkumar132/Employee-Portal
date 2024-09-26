import { get } from "helpers/api_helper"

export const getList = async () => {
    const response = await get('/employee/all-employee');
    return response.data;
}