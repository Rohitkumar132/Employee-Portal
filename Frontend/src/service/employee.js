import { get } from "helpers/api_helper"

export const getList = async () => {
    const response = await get('/employees/list');
    return response.data;
}