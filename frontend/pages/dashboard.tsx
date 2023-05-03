import React from "react";
import styled from "styled-components";
import Sidebar from "../components/dashboard/sidebar";
import Library from "../components/dashboard/library";
import MusicPlayer from "../components/dashboard/musicPlayer";

function dashboard() {
  return (
    // 대시보드 디자인 출처 : https://codepen.io/utbaz/pen/VwBWebL
    <StyledDashboard>
      <main className="mp_main relative -translate-x-2/4 -translate-y-2/4 w-[1300px] h-[860px] shadow-[4px_4px_50px_rgba(0,0,0,0.49)] backdrop-blur-[100px] z-[99] rounded-[20px] left-2/4 top-2/4 bg-black/50">
        <Sidebar />
        <Library />
        <MusicPlayer />
        <small className="develop_by absolute bottom-[-60px] text-[15px] right-0">
          Project by{" "}
          <span className="develop_by_span text-xl font-black">Utba Zafar</span>
        </small>
      </main>
    </StyledDashboard>
  );
}

export default dashboard;

export const StyledDashboard = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  & {
    width: 100vw;
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1610713818311-4078be4c6936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80);
    background-size: cover;
    background-position: center;
    font-family: "Poppins", sans-serif;
  }
  /* 
  .mp_main {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1300px;
    height: 860px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.49);
    backdrop-filter: blur(100px);
    border-radius: 20px;
    z-index: 99;
  } */

  /* ------------------ Sidebar ------------------- */

  /* .mp_sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
  } */

  /* .mp_sidebar .sidebar_logo img {
    width: 50px;
    margin-bottom: 30px;
  } */

  /* .mp_sidebar .sidebar_menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  } */

  /* .mp_sidebar .sidebar_menu img {
    width: 20px;
    transition: 0.2s ease-in-out;
  } */
  /* 
  .mp_sidebar .sidebar_menu img:hover {
    cursor: pointer;
    scale: 1.2;
  } */

  /* .mp_sidebar .sidebar_logout img {
    width: 30px;
    transition: 0.2s ease-in-out;
  }

  .mp_sidebar .sidebar_logout img:hover {
    cursor: pointer;
    scale: 1.2;
  } */

  /* ------------------ Library ------------------- */
  /* 
  .mp_library {
    position: relative;
    top: 0;
    left: 100px;
    width: 850px;
    height: 100%;
  } */

  /* ------------------ Library (part 1 )------------------- */

  /* .mp_library .library_search {
    padding-top: 30px;
    width: 850px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */

  /* .library_search .searchbar {
    width: 600px;
    height: 40px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  } */

  /* .library_search .searchbar img {
    width: 20px;
    margin-left: 20px;
  } */

  /* .library_search .searchbar p {
    color: #fff;
    margin-left: 10px;
    font-size: 12px;
  } */

  /* .library_search .account {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
  } */

  /* .library_search .account .person {
    width: 40px;
  } */

  /* .library_search .account p {
    color: #fff;
    font-size: 16px;
  } */

  /* ------------------ Library (part 2 )------------------- */
  /* 
  .library_album {
    margin-top: 30px;
    margin-left: 20px;
  } */

  /* .library_album h3 {
    color: #fff;
    font-size: 17px;
    margin-bottom: 15px;
  } */

  /* .library_album .library_album_albums {
    display: flex;
    gap: 15px;
  } */

  /* .library_album_covers {
    position: relative;
    width: 190px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    box-shadow: 0 0 5px #000;
    transition: 0.2s ease-in-out;
  } */

  /* .library_album_covers:hover {
    cursor: pointer;
    scale: 1.05;
  } */

  /* .library_album_covers img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
  } */

  /* .library_album_covers .album_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -4;
    border-radius: 10px;
  } */

  /* .library_album_covers span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #00000029;
    backdrop-filter: blur(10px);
    border-radius: 0 0 10px 10px;
  } */

  /* .library_album_covers h5 {
    color: #fff;
    font-size: 15px;
    z-index: 2;
  } */

  /* .library_album_covers p {
    color: #fff;
    font-size: 12px;
    z-index: 2;
  } */

  /* ------------------ Library (part 3 )------------------- */
  /* .library_trending {
    width: 850px;
    height: 300px;
    padding: 0 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
  } */

  /* .library_trending_title {
    color: #fff;
    font-size: 17px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left: 20px;
  } */

  /* .library_trending table {
    width: 100%;
    color: #fff;
    border-collapse: collapse;
  } */

  /* .library_trending img {
    width: 20px;
  } */

  /* .library_trending table tr {
    border: solid;
    border-width: 0.2px 0;
    border-color: rgba(125, 125, 125, 0.419);
    border-top: none;
    transition: 0.2s ease-in-out;
  }

  .library_trending table tr:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  } */

  /* .library_trending_table_tr_td {
    padding: 10px;
  }

  .library_trending_table_tr_td_p {
    font-size: 13px;
  } */

  /* .library_trending table tr .song {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: -25%;
  }

  .library_trending table tr .song_h4 {
    font-size: 15px;
  }

  .library_trending table tr .song_p {
    font-size: 13px;
    color: rgb(152, 152, 152);
  } */

  /* .library_trending .library_trending_song_cover {
    width: 60px;
    border-radius: 8px;
  } */

  /* ------------------ Library (part 4 )------------------- */

  /* .library_favorite {
    width: 100%;
    height: 190px;
    margin-top: 40px;
    padding: 0 20px;
    overflow: hidden;
  } */

  /* .library_favorite_h3 {
    color: #fff;
    font-size: 17px;
    margin-bottom: 10px;
  } */

  /* .library_favorite .library_favorite_cover {
    display: flex;
    align-items: center;
    gap: 5px;
  } */
  /* 
  .library_favorite .library_favorite_cover .favorite_song {
    padding: 10px;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
  }

  .library_favorite .library_favorite_cover .favorite_song:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  } */

  /* .library_favorite .library_favorite_cover .favorite_song_img {
    width: 110px;
    height: 75px;
    background-color: #00000029;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.498);
  } */

  /* .library_favorite .library_favorite_cover .favorite_song_h4 {
    font-size: 15px;
    color: #fff;
  }

  .library_favorite .library_favorite_cover .favorite_song_p {
    font-size: 12px;
    color: rgb(152, 152, 152);
  } */

  /* ------------------ Playlist ------------------- */

  /* .mp_playlist {
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 20px 20px 0;
  } */

  /* .mp_playlist_h3 {
    position: absolute;
    top: 10%;
    left: 20px;
    color: #fff;
    font-size: 17px;
  }

  .mp_playlist .mp_playlist_content {
    position: absolute;
    top: 16%;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
  }

  .mp_playlist .mp_playlist_content hr {
    border: none;
    height: 0.5px;
    width: 100%;
    margin-top: -8px;
    background: rgba(125, 125, 125, 0.419);
  }

  .mp_playlist .mp_playlist_song {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s ease-in-out;
    padding: 5px 0;
  }

  .mp_playlist .mp_playlist_song:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .mp_playlist .mp_playlist_song .mp_tracks_album {
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 10px;
  }

  .mp_tracks_album img {
    width: 60px;
  }

  .mp_tracks_album h4 {
    font-size: 15px;
    color: #fff;
  }

  .mp_tracks_album p {
    font-size: 13px;
    color: rgb(152, 152, 152);
  } */

  /* ------------------ Player ------------------- */

  /* .mp_playlist_player {
    position: absolute;
    left: 17px;
    bottom: 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: 240px;
    width: 90%;
    box-shadow: 0 0 20px rgb(0, 0, 0);
    transition: 0.2s ease-in-out;
  }

  .mp_playlist_player:hover {
    cursor: pointer;
    scale: 1.02;
  }

  .mp_playlist_player img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .mp_playlist_controller {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #0000007b;
    backdrop-filter: blur(10px);
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .mp_playlist_controller .mp_playlist_control_song {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mp_playlist_controller .mp_playlist_control_song h4 {
    font-size: 20px;
    color: #fff;
  }

  .mp_playlist_controller .mp_playlist_control_song p {
    font-size: 15px;
    color: rgb(152, 152, 152);
  }

  .mp_playlist_controller .mp_playlist_control {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .mp_playlist_controller .mp_playlist_control img {
    width: 30px;
    transition: 0.2s ease-in-out;
  }

  .mp_playlist_controller .mp_playlist_control img:hover {
    cursor: pointer;
    scale: 1.2;
  } */
  /* 
  .develop_by {
    position: absolute;
    bottom: -60px;
    right: 0;
    font-size: 15px;
  }

  .develop_by span {
    font-size: 20px;
    font-weight: 900;
  } */
`;
