import React from "react";
import { SongsDummyData } from "../favorite/favoriteSong";
import TrendingSong from "./trendingSong";

function Trending() {
  // const genreData = GenreMapEntries.map((e) => {
  //   const [data] = listGenreMusicsQuery(e[0]);
  //   return { genreName: e[0].replaceAll("_", " "), musicList: data };
  // }).filter((e) => !!e && e.musicList.length);

  return (
    <>
      <h3 className="library_trending_title text-white text-[17px] mt-[30px] mb-2.5 pl-5">
        Trending Songs
      </h3>
      <div className="library_trending custom_scrollbar w-[850px] h-[300px] overflow-y-scroll scroll-smooth px-5 py-0">
        <table className="library_trending_table w-full text-white border-collapse">
          <tbody>
            {SongsDummyData.map((song) => {
              return (
                <TrendingSong
                  key={`trending_song_${song.music_id}`}
                  song={song}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trending;
