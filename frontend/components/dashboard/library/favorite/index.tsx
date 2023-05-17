import React from "react";
import FavoriteSong, { SongsDummyData } from "./favoriteSong";

function Favorite() {
  return (
    <div className="library_favorite w-full h-[190px] overflow-hidden mt-10 px-5 py-0">
      <h3 className="libray_h3 text-2xl font-bold text-pink-500 text-[17px] mb-[15px] ml-1">
        음악 재생
      </h3>
      <div className="library_favorite_cover flex  items-center gap-[5px] overflow-x-scroll custom_scrollbar_x">
        {SongsDummyData.map((song) => {
          return (
            <FavoriteSong key={`favorite_song_${song.music_id}`} song={song} />
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
