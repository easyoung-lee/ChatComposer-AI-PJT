import React from "react";

function Favorite() {
  return (
    <div className="library_favorite w-full h-[190px] overflow-hidden mt-10 px-5 py-0">
      <h3 className="library_favorite_h3 text-white text-[17px] mb-2.5">
        Recent Favorite
      </h3>
      <div className="library_favorite_cover flex items-center gap-[5px]">
        <div className="favorite_song transition-[0.2s] duration-[ease-in-out] p-2.5 rounded-[10px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
          <img
            src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt=""
            className="favorite_song_img w-[110px] h-[75px] bg-[#00000029] bg-cover shadow-[0_0_5px_rgba(0,0,0,0.498)] rounded-[10px]"
          />
          <h4 className="favorite_song_h4 text-[15px] text-white">Insane</h4>
          <p className="favorite_song_p text-xs text-[rgb(152,152,152)]">
            AP Dhillon
          </p>
        </div>
        <div className="favorite_song">
          <img
            src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80"
            alt=""
          />
          <h4>Coordinate</h4>
          <p>Travis Scott</p>
        </div>
        <div className="favorite_song">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <h4>Alive</h4>
          <p>Krewella</p>
        </div>
        <div className="favorite_song">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <h4>Nothin'</h4>
          <p>N.O.R.E</p>
        </div>
        <div className="favorite_song">
          <img
            src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            alt=""
          />
          <h4>Rich Flex</h4>
          <p>Drake</p>
        </div>
        <div className="favorite_song">
          <img
            src="https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
            alt=""
          />
          <h4>Efecto</h4>
          <p>Bad Bunny</p>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
