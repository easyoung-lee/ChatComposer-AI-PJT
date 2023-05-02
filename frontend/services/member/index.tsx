import Api from "../../src/utils/customApi"
import { setCookie } from "../../src/utils/handleCookies";

interface LoginResponse {
  status: number;
  data: {
    token: string;
    msg: string;
  }
}

export async function postLogin(
  email: string,
  password: string,
): Promise<LoginResponse | undefined> {
  try {
    const response = (await Api.post("", {
      email,
      password,
    })) as LoginResponse;
    const { token: accessToken } = response.data;
    setCookie("accessToken", accessToken, 3);
    return response as LoginResponse;
  } catch (error) {}
}

interface PostSignupResponse {
  status: number;
  data: {
    msg: string;
  };
}

export async function postSignup(
  email: string,
  password: string,
  nickname: string,
  // genre: string,
): Promise<PostSignupResponse | undefined> {
  try {
    const response = await Api.post("", {
      email,
      password,
      nickname,
      // genre,
    });
    return response as PostSignupResponse;
  } catch (error) {}
}