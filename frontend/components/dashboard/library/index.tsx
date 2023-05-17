import React from "react";
import LibraryUpper from "./upper";
import Albums from "./albums";
import Trending from "./trending";
import Favorite from "./favorite";

function Library() {
  return (
    <div className="mp_library relative w-full h-full">
      {/* <LibraryUpper /> */}
      <Albums />
      <Trending />
      <Favorite />
    </div>
  );
}

export default Library;
