import React, { useEffect, useState } from "react";
import AlbumCover, { DummyCoversData } from "./albumCover";
import { GenreMapEntries } from "../../../../utils/GenreMap";
import { listGenreMusicsQuery } from "../../../../services/musics";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { MusicType } from "../../../../types/musics";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

  if (!genreData || !genreData.length) return <></>;

  return (
    <div className="library_album mt-8">
      <h3 className="libray_h3 text-2xl font-bold text-pink-500 text-[17px] mb-[15px] ml-6">
        {/* Recently Listened Albums */}
        장르별 음악
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoHeight={true}
        loop={false}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // pagination={{ clickable: false }}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
      >
        {genreData.map(({ genreName, musicList }, index) => {
          return (
            <SwiperSlide key={`${genreName}_${index}`}>
              <div className="">
                <AlbumCover
                  genreName={genreName}
                  coverImgSrc={musicList[0].cover_source}
                  numOfSongs={musicList.length}
                />
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev pr-8"></div>
        <div className="swiper-button-next pl-8"></div>
      </Swiper>
    </div>
  );
}

export default Albums;
