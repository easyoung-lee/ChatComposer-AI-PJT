const get = (urls: string, ...rest): Object => {
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
    case "/auth/check-email":
      res.data = {
        msg: "Y",
      };
      break;
    }

  if (err.status) return Promise.reject(err);
  return Promise.resolve(res);
};

export default get;
