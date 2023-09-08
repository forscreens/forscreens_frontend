import axios from "axios";

export const BASE_URL = 'http://localhost:8091';

export const axiosCall = axios.create({
    baseURL: BASE_URL
});