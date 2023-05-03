import React from "react";
import AlbumCover, { DummyCoversData } from "./albumCover";

function Albums() {
  return (
    <div className="library_album ml-5 mt-[30px]">
      <h3 className="libray_h3 text-white text-[17px] mb-[15px]">
        Recently Listened Albums
      </h3>
      <div className="">
        <div className="library_album_albums flex gap-[15px] overflow-y-hidden overflow-x-scroll custom_scrollbar_x ">
          {DummyCoversData.map((cover) => {
            return (
              <AlbumCover key={`AlbumCover_${cover.music_id}`} cover={cover} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
