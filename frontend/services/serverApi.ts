import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://k8a504.p.ssafy.io/api",
});

serverApi.interceptors.request.use((config) => {
  if (config.method === "get" && config.url.startsWith("/musics"))
    return config;
  if (config.url.startsWith("/oauth2")) return config;

  console.log(
    JSON.parse(localStorage.getItem("recoil-persist")).AuthTokenState,
  );

  const getToken = () => {
    let token = "";
    const recoilState = localStorage.getItem("recoil-persist");
    if (recoilState) {
      const newToken = JSON.parse(recoilState)?.AuthTokenState;
      if (newToken) {
        token = newToken;
      }
    }
    return token;
  };
  console.log(`Bearer ${getToken()}`);
  config.headers["Authorization"] = `Bearer ${getToken()}`;
  return config;
});

export default serverApi;
