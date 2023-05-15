import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://k8a504.p.ssafy.io/api",
});

export default serverApi;
