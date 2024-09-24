import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

if(!API_URL){
    throw new Error("API_URL is not defined")
}

const axiosInstance = axios.create({
    baseURL: API_URL,

});

export default axiosInstance


