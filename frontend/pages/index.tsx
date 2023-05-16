import { useEffect, useState } from "react";
import Library from "../components/dashboard/library";
import MusicPlayer from "../components/dashboard/musicPlayer";
import {
  prefetchListGenreMusicsQuery,
  prefetchListTagMusicsQuery,
} from "../services/musics";
import { GenreMapEntries, TagMapEntries } from "../utils/GenreMap";
import { useRouter } from "next/router";

export default function Home() {
  const [isPrefetched, setIsPrefetched] = useState(false);
  const [opacityClassname, setOpacityClassname] = useState("");
  const router = useRouter();

  useEffect(() => {
    //데이터를 프리페치하여 메인 페이지의 로딩 시간을 줄입니다.
    Promise.allSettled([
      ...GenreMapEntries.map((e) => prefetchListGenreMusicsQuery(e[0])),
      ...TagMapEntries.map((e) => prefetchListTagMusicsQuery(e[0])),
    ]).then(() => {
      //prefetch가 끝났으면 1초 후 isPrefetched는 true입니다.
      setTimeout(() => setIsPrefetched(true), 3000);
    });
  }, []);

  useEffect(() => {
    if (isPrefetched) {
      // setOpacityClassname("opacity-0");
      // setTimeout(() => router.push("/main"), 300);
    }
  }, [isPrefetched]);

  return (
    <div
      className={`transition-all duration-200  ${opacityClassname} bg-red-400`}
    >
      <div>splash페이지입니다.</div>
      <a
        className="bg-red-400"
        href="https://k8a504.p.ssafy.io/api/oauth2/authorization/google?redirect_uri=https://k8a504.p.ssafy.io/"
      >
        로그인링크
      </a>
      <a
        className="bg-red-400"
        href="https://k8a504.p.ssafy.io/api/oauth2/authorization/google?redirect_uri=https://k8a504.p.ssafy.io/oauth/redirect
        "
      >
        로그인링크
      </a>
    </div>
  );
}
