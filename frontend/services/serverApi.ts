import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://k8a504.p.ssafy.io/api",
});

serverApi.interceptors.request.use((config) => {
  if (config.method === "get" && config.url.startsWith("/musics"))
    return config;
  config.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU5MTIwNTUyMzc2MzgyNTI3MjIiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzAyMTI1MTQ1fQ.hg7XWY_gJ4g7m_IAaQMB1Aj6HBDk98eRrw4BrxFVaqk";
  return config;
});

export default serverApi;
