import { useEffect, useState } from "react";
import Library from "../components/dashboard/library";
import MusicPlayer from "../components/dashboard/musicPlayer";
import {
  prefetchListGenreMusicsQuery,
  prefetchListTagMusicsQuery,
} from "../services/musics";
import { GenreMapEntries, TagMapEntries } from "../utils/GenreMap";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenState } from "../store/atoms";
import Link from "next/link";

export default function Home() {
  const [isPrefetched, setIsPrefetched] = useState(false);
  const [opacityClassname, setOpacityClassname] = useState("");
  const [authToken, setAuthToken] = useRecoilState(authTokenState);
  const router = useRouter();
  const [oauthUrl, setOauthUrl] = useState(
    "https://k8a504.p.ssafy.io/api/oauth2/authorization/google?redirect_uri=https://k8a504.p.ssafy.io/oauth/redirect",
  );

  useEffect(() => {
    // if (window.location.host.startsWith("localhost")) {
    //   setOauthUrl(
    //     "https://k8a504.p.ssafy.io/api/oauth2/authorization/google?redirect_uri=https://k8a504.p.ssafy.io/oauth/redirect",
    //   );
    // }
    //데이터를 프리페치하여 메인 페이지의 로딩 시간을 줄입니다.
    Promise.allSettled([
      ...GenreMapEntries.map((e) => prefetchListGenreMusicsQuery(e[0])),
      ...TagMapEntries.map((e) => prefetchListTagMusicsQuery(e[0])),
    ]).then(() => {
      //prefetch가 끝났으면 1초 후 isPrefetched는 true입니다.
      setTimeout(() => setIsPrefetched(true), 1000);
    });
  }, []);

  useEffect(() => {
    if (isPrefetched && authToken) {
      setOpacityClassname("opacity-0");
      setTimeout(() => router.push("/main"), 300);
    }
  }, [isPrefetched]);

  return (
    <div
      className={`transition-all duration-200  ${opacityClassname} bg-red-400`}
    >
      <div>splash페이지입니다.</div>
      {!authToken ? (
        <Link href={oauthUrl} rel="noopener noreferrer">
          Google로 로그인하기
        </Link>
      ) : (
        <>
          <div onClick={() => setAuthToken("")}>로그아웃</div>
        </>
      )}
    </div>
  );
}
