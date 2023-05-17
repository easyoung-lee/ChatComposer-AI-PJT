import React, { useEffect, useState } from "react";
import AlbumCover, { DummyCoversData } from "./albumCover";
import { GenreMapEntries } from "../../../../utils/GenreMap";
import { listGenreMusicsQuery } from "../../../../services/musics";
import { MusicType } from "../../../../types/musics";

function Albums() {
  let genreData = GenreMapEntries.map((e) => {
    const [data] = listGenreMusicsQuery(e[0]);
    console.log(data);
    return { genreName: e[0].replaceAll("_", " "), musicList: data };
  }).filter((e) => !!e && e.musicList?.length);

  /* 로컬 테스트용 코드 */
  genreData = [
    {
      genreName: "POP",
      musicList: [
        {
          music_id: 1,
          title: "string",
          genre: "POP",
          tags: ["string"],
          favorite_count: 1,
          created_at: "2023-05-17T02:07:26",
          cover_source: "/dummy/covers/cover1.png",
          is_my_favorite: "n",
          member: { nickname: "노정환", memberId: 2 },
        },
      ],
    },
  ];

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
