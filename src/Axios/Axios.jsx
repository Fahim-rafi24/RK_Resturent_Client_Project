import axios from "axios";



// axios make auto body to stringyfy. So no need to make data Json formate

export const axiosInstalled = axios.create({
  baseURL: 'http://localhost:5000',  // base URL for all API
  withCredentials: true,
});





// link was just used in here , ConformItem.jsx as a fetch, 