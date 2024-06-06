import axios from "axios";

const axiosDefault = axios.create({
  baseURL: "http://192.168.3.9:8080",
  withCredentials: true, // Send cookies with cross-origin requests
});

export default axiosDefault;
