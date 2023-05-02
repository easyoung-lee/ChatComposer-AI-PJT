// import { AlertError, AlertWarning } from "./alertToastify";
import axios from "axios";
import MockupService from "./MockupService";
// import getHeaders from "./getHeaders";
import { getCookie } from "./handleCookies";

export const ApiMock = MockupService;

const Api = axios;

Api.defaults.baseURL = "http://localhost:8081/api";
// Api.defaults.baseURL = "https://j8a504.p.ssafy.io/api";
Api.defaults.withCredentials = true;

Api.interceptors.request.use(
  (config) => {
    if (!config.url.split("/").includes("auth")) {
      const accessToken = getCookie("accessToken");
      config.headers["X-AUTH-TOKEN"] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const status = error.response.status;
//     if (status < 400 || status > 500)
//       AlertError("알 수 없는 오류가 발생했습니다");
//     else if (status === 500) {
//       if (error.config.url === "/auth/login")
//         AlertWarning("잘못된 사용자 정보입니다.");
//       else AlertError("서버에서 오류가 발생했습니다");
//     }
//     if (error.response && error.response.data)
//       return Promise.reject(error.response.data);
//     else return Promise.reject(error.message);
//   },
// );
export default Api;
