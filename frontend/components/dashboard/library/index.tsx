import React, { useEffect } from "react";
import LibraryUpper from "./upper";
import Albums from "./albums";
import Trending from "./trending";
import Favorite from "./favorite";
import { useRecoilValue } from "recoil";
import { genreDataState } from "../../../store/atoms";

function Library() {
  const genreSet = useRecoilValue(genreDataState);
  // useEffect(() => {
  //   console.log(genreSet);
  // }, [genreSet]);
  return (
    <div className="mp_library relative w-full h-full">
      {/* <LibraryUpper /> */}
      <div className="h-[20px] w-full"></div>
      <Albums />
      <Trending />
      <Favorite />
      {genreSet.map((e, index) => {
        return <Favorite genre={e} key={e + index} />;
      })}
      <div className="h-[300px] w-full"></div>
    </div>
  );
}

export default Library;
