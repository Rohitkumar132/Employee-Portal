import { get, post } from "helpers/api_helper"

export const loginUser = async (data) => {
    const response = await post('/login', data);
    return response;
}
