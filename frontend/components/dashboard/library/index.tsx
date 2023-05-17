import React, { useEffect } from "react";
import LibraryUpper from "./upper";
import Albums from "./albums";
import Trending from "./trending";
import Favorite from "./favorite";
import { useRecoilValue } from "recoil";
import { genreDataState, selectedGenreState } from "../../../store/atoms";
import { IconMusic } from "@tabler/icons-react";
import Link from "next/link";

function Library() {
  const genreSet = useRecoilValue(genreDataState);
  const selectedGenre = useRecoilValue(selectedGenreState);
  // useEffect(() => {
  //   console.log(genreSet);
  // }, [genreSet]);
  return (
    <div className="mp_library relative w-full h-full">
      {/* <LibraryUpper /> */}
      <div className="h-[20px] w-full"></div>
      <div className="relative w-full max-w-2xl mx-auto border mt-5 p-5 text-center">
        <Link
          href={"/produce"}
          className="bg-black absolute rounded top-0 left-0 w-full h-full z-[6] opacity-0 hover:opacity-60"
        >
          <IconMusic
            className="library_album_covers_img absolute z-[4] w-[100px] top-[30%] left-1/2 translate-x-[-50%] translate-y-[-50%] 가운데에넣기"
            size={48}
            strokeWidth={2}
            color={"#ffffff"}
          />
          <div className="text-pink-100 absolute z-[4] w-[100px] top-[45%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
            클릭하여 이동
          </div>
        </Link>
        <h3 className="libray_h3 text-2xl font-bold text-pink-500 text-[17px] mb-[15px] ml-6">
          새로운 음악 작곡하기
        </h3>
        <img src="banner.png" className="max-w-sm mx-auto" />
      </div>
      <Albums />
      <Trending genre={selectedGenre} />
      <Favorite />
      {genreSet.map((e, index) => {
        return <Favorite genre={e} key={e + index} />;
      })}
      <div className="h-[300px] w-full"></div>
    </div>
  );
}

export default Library;
