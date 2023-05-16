import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://k8a504.p.ssafy.io/api",
});

serverApi.interceptors.request.use((config) => {
  if (config.method === "get" && config.url.startsWith("/musics"))
    return config;
  config.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU5MTIwNTUyMzc2MzgyNTI3MjIiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzAyMTk5NTQ2fQ.ieECpuP1paUeGsTD0YVMQFXf4eNAW79MVKohJaKELsk";
  return config;
});

export default serverApi;
