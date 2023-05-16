import Link from "next/link";
import React from "react";
import serverApi from "../services/serverApi";
import axios from "axios";

function Login() {
  // const url = `/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect`;
  const url = `/oauth2/authorization/google?redirect_uri=https://k8a504.p.ssafy.io/oauth/redirect`;
  // const url = `/oauth2/authorization/google`;

  const onClick = () => {
    // axios.get(`/api/login?url=${url}`);
    serverApi.get(url).then((res) => {
      console.log(res);
      return res;
    });
  };
  return (
    <div className="bg-slate-500" onClick={onClick} role="button">
      로그인하기
    </div>
  );
}

export default Login;
