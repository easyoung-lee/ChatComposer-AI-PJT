const handleCookies = {
  //날짜는 일 수로 입력 받습니다.
  setCookie(key: string, value: string, expiredays: number): void {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie =
      key +
      "=" +
      encodeURI(value) +
      "; path=/; expires=" +
      todayDate.toUTCString() +
      ";";
  },

  //쿠키에서 받고 싶은 key를 문자열로 입력하면 해당하는 값을 반환합니다.
  getCookie(targetKey: string): string {
    let result = {} as { [key: string]: string };
    if (document.cookie) {
      result = document.cookie
        .split("; ")
        .map((cookie) => {
          const [key, value] = cookie.split("=");
          return { key: key, value: value };
        })
        .find((element) => element.key === targetKey);
    }
    return result?.value || "";
  },

  //쿠키의 만료시간을 0으로 바꿔서 쿠키를 삭제합니다.
  delCookie(key: string): void {
    let todayDate = new Date();
    document.cookie =
      key + "=; path=/; expires=" + todayDate.toUTCString() + ";";
  },
};

export const { getCookie, setCookie, delCookie } = handleCookies;
export default handleCookies;
