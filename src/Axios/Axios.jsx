import axios from "axios";




export const axiosInstalled = axios.create({
    baseURL: 'http://localhost:5000',  // base URL for all API
    withCredentials: true,
  });