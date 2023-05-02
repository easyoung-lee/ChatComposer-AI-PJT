const post = (urls: string, ...rest): Object => {
  const [url, query] = urls.split("?");
  let res = {
    status: 200,
    data: {},
  };
  let err = {
    status: 0,
    data: {
      msg: "",
    },
  };

  switch (url) {
    case "/auth/sign-up":
      if (rest[0]) {
        res.data = { msg: "회원가입이 완료되었습니다." };
      } else {
        err.status = 400;
        err.data.msg = "회원가입에 실패했습니다.";
      }
      break;

    case "/auth/find-pwd":
      res.data = {
        msg: "입력하신 이메일로 메일을 보내드렸습니다.",
      };
      break;

    case "/auth/reset-pwd":
      res.data = {
        msg: "비밀번호 재설정에 실패했습니다.",
      };
      break;

    case "/auth/login":
      res.data = {
        access_token: "엑세스토큰개쩔어",
        nickname: "닉네임개쩔어",
        university_id: 1,
        email: "eamil@email.com",
      };
      break;

    case "/auth/find-pwd":
      res.data = {
        msg: "입력하신 이메일로 메일을 보내드렸습니다.",
      };
      break;

    default:
      break;
  }

  if (err.status) return Promise.reject(err);
  return Promise.resolve(res);
};

export default post;
