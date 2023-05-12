import React from "react";
import LibraryUpper from "./upper";
import Albums from "./albums";
import Trending from "./trending";
import Favorite from "./favorite";

function Library() {
  return (
    <div className="mp_library relative w-[850px] h-full top-0">
      <LibraryUpper />
      <Albums />
      <Trending />
      <Favorite />
    </div>
  );
}

export default Library;
