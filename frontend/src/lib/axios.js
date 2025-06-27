import axios from "axios";

//axios.create takes a object of url
export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ?"http://localhost:3000/api" : "/api",
    withCredentials: true,
}
);