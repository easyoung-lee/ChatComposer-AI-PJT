import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default axiosApi;
