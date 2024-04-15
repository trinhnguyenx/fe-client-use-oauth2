import axiosApiInstance from "../api"
import axios from "axios"
axios.defaults.URL = import.meta.env.VITE_API_URL

export const refreshAccessToken = async () => {
    const refresh_token = localStorage.getItem("refresh_token")
    const data = {
        refresh_token: refresh_token,
    }
    return await axios.post("/auth/refresh", data)
}
export const loginApi = async (data) => {
    return await axiosApiInstance.post("/auth/login", data)
}
export const registerApi = async (data) => {
    return await axiosApiInstance.post("/auth/register", data)
}
export const getInfo = async () => {
    return await axiosApiInstance.get("/users/me")
}
export const getOauth = async (clientID) => {
    return await axios.get("/authorzation/Oauth")
}
