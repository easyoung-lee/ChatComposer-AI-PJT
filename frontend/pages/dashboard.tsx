import React from "react";
import styled from "styled-components";
import Sidebar from "../components/dashboard/sidebar";
import Library from "../components/dashboard/library";
import MusicPlayer from "../components/dashboard/musicPlayer";

function dashboard() {
  return (
    // 대시보드 디자인 출처 : https://codepen.io/utbaz/pen/VwBWebL
    <StyledDashboardContainer>
      <main className="mp_main relative -translate-x-2/4 -translate-y-2/4 w-[1300px] h-[860px] shadow-[4px_4px_50px_rgba(0,0,0,0.49)] backdrop-blur-[100px] z-[99] rounded-[20px] left-2/4 top-2/4 bg-black/50">
        <Sidebar />
        <Library />
        <MusicPlayer />
        <small className="develop_by absolute bottom-[-60px] text-[15px] right-0">
          Project by{" "}
          <span className="develop_by_span text-xl font-black">Utba Zafar</span>
        </small>
      </main>
    </StyledDashboardContainer>
  );
}

export default dashboard;

export const StyledDashboardContainer = styled.div`
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

  .custom_scrollbar::-webkit-scrollbar {
    width: 10px;
  }
  .custom_scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.33);
  }
  .custom_scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.321);
  }
`;
