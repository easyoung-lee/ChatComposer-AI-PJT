import React from "react";
import { AlbumCoverType } from "../../../../types/musics";

function FavoriteSong({ song }: { song: AlbumCoverType }) {
  const {
    cover_source: coverSource,
    member: { nickname },
    title,
  } = song;
  return (
    <div className="favorite_song transition-[0.2s] duration-[ease-in-out] p-2.5 rounded-[10px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)] flex-shrink-0">
      <img
        src={coverSource}
        alt=""
        className="favorite_song_img w-[110px] h-[75px] bg-[#00000029] bg-cover shadow-[0_0_5px_rgba(0,0,0,0.498)] rounded-[10px]"
      />
      <h4 className="favorite_song_h4 text-[15px] text-white">{title}</h4>
      <p className="favorite_song_p text-xs text-[rgb(152,152,152)]">
        {nickname}
      </p>
    </div>
  );
}

export default FavoriteSong;

export const SongsDummyData: AlbumCoverType[] = [
  {
    member: { member_id: 1, nickname: "AP Dhillon" },
    cover_source:
      "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    created_at: String(Date.now()),
    favorite_count: 3,
    genre: "Hip-Hop",
    music_id: 1,
    tags: ["사랑", "기쁨", "슬픔"],
    title: "Insane",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 2, nickname: "Travis Scott" },
    cover_source:
      "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
    created_at: String(Date.now()),
    favorite_count: 7,
    genre: "Electronic",
    music_id: 2,
    tags: ["즐거움"],
    title: "Coordinate",
    is_my_favorite: "y",
  },
  {
    member: { member_id: 3, nickname: "Krewella" },
    cover_source:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: String(Date.now()),
    favorite_count: 2,
    genre: "Pop",
    music_id: 3,
    tags: ["개쩌는", "신나는"],
    title: "Alive",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 4, nickname: "N.O.R.E" },
    cover_source:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: String(Date.now()),
    favorite_count: 0,
    genre: "Rock",
    music_id: 4,
    tags: ["사랑", "슬픔"],
    title: "Nothin'",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 5, nickname: "Drake" },
    cover_source:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    created_at: String(Date.now()),
    favorite_count: 2325,
    genre: "R&B",
    music_id: 5,
    tags: ["대충아무감정"],
    title: "Rich Flex",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 6, nickname: "Bad Bunny" },
    cover_source:
      "https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    created_at: String(Date.now()),
    favorite_count: 23,
    genre: "R&B",
    music_id: 6,
    tags: ["아무감정"],
    title: "Efecto",
    is_my_favorite: "y",
  },
  {
    member: { member_id: 1, nickname: "AP Dhillon" },
    cover_source:
      "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    created_at: String(Date.now()),
    favorite_count: 3,
    genre: "Hip-Hop",
    music_id: 7,
    tags: ["사랑", "기쁨", "슬픔"],
    title: "Insane",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 2, nickname: "Travis Scott" },
    cover_source:
      "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
    created_at: String(Date.now()),
    favorite_count: 7,
    genre: "Electronic",
    music_id: 8,
    tags: ["즐거움"],
    title: "Coordinate",
    is_my_favorite: "y",
  },
  {
    member: { member_id: 3, nickname: "Krewella" },
    cover_source:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: String(Date.now()),
    favorite_count: 2,
    genre: "Pop",
    music_id: 9,
    tags: ["개쩌는", "신나는"],
    title: "Alive",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 4, nickname: "N.O.R.E" },
    cover_source:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: String(Date.now()),
    favorite_count: 0,
    genre: "Rock",
    music_id: 10,
    tags: ["사랑", "슬픔"],
    title: "Nothin'",
    is_my_favorite: "y",
  },
  {
    member: { member_id: 5, nickname: "Drake" },
    cover_source:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    created_at: String(Date.now()),
    favorite_count: 2325,
    genre: "R&B",
    music_id: 11,
    tags: ["대충아무감정"],
    title: "Rich Flex",
    is_my_favorite: "n",
  },
  {
    member: { member_id: 6, nickname: "Bad Bunny" },
    cover_source:
      "https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    created_at: String(Date.now()),
    favorite_count: 23,
    genre: "R&B",
    music_id: 12,
    tags: ["아무감정"],
    title: "Efecto",
    is_my_favorite: "y",
  },
];
