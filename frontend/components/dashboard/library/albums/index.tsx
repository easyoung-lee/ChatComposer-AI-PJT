import React, { useEffect, useState } from "react";
import AlbumCover, { DummyCoversData } from "./albumCover";
import { GenreMapEntries } from "../../../../utils/GenreMap";
import { listGenreMusicsQuery } from "../../../../services/musics";

function Albums() {
  const genreData = GenreMapEntries.map((e) => {
    const [data] = listGenreMusicsQuery(e[0]);
    console.log(data);
    return { genreName: e[0].replaceAll("_", " "), musicList: data };
  }).filter((e) => !!e && e.musicList?.length);

  return (
    <div className="library_album ml-5 mt-[30px]">
      <h3 className="libray_h3 text-white text-[17px] mb-[15px]">
        {/* Recently Listened Albums */}
        장르별 음악
      </h3>
      <div className="">
        <div className="library_album_albums flex gap-[15px] overflow-y-hidden overflow-x-scroll custom_scrollbar_x ">
          {!genreData || !genreData.length ? (
            <></>
          ) : (
            genreData.map(({ genreName, musicList }, index) => {
              return (
                <AlbumCover
                  key={`${genreName}_${index}`}
                  genreName={genreName}
                  coverImgSrc={musicList[0].cover_source}
                  numOfSongs={musicList.length}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Albums;
