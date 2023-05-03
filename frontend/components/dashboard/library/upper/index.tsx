import React from "react";
import Searchbar from "./searchbar";
import Account from "./account";

function LibraryUpper() {
  return (
    <div className="library_search w-[850px] h-[60px] flex justify-between items-center pt-[30px]">
      <Searchbar />
      <Account />
    </div>
  );
}

export default LibraryUpper;
