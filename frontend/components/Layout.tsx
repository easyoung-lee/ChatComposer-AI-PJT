import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Sidebar from "./dashboard/sidebar";

function Layout({ children }) {
  const router = useRouter();
  const excetionRoutes = ["/login", "/signup"];

  //excetionRoutes 포함된 경로에서는 레이아웃 적용 안함
  let isExcetion = false;
  excetionRoutes.forEach((path) => {
    if (router.pathname.startsWith(path)) isExcetion = true;
  });
  if (isExcetion) return children;

  //그 외에는 레이아웃 적용
  return (
    // 대시보드 디자인 출처 : https://codepen.io/utbaz/pen/VwBWebL
    <StyledDashboardContainer>
      <main className="mp_main relative -translate-x-2/4 -translate-y-2/4 w-[1300px] h-[860px] shadow-[4px_4px_50px_rgba(0,0,0,0.49)] backdrop-blur-[100px] z-[99] rounded-[20px] left-2/4 top-2/4 bg-black/50">
        <Sidebar />
        <div className="relative w-[1200px] h-full left-[100px] top-0">
          {children}
        </div>
      </main>
    </StyledDashboardContainer>
  );
}

export default Layout;

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
  .custom_scrollbar_x::-webkit-scrollbar {
    height: 10px;
  }
  .custom_scrollbar_x::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.33);
  }
  .custom_scrollbar_x::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.321);
  }
`;
