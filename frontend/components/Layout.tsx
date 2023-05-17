import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Sidebar from "./dashboard/sidebar";

function Layout({ children }) {
  const router = useRouter();
  // const excetionRoutes = ["/login", "/signup"];
  const excetionRoutes = ["/loggin"];

  //excetionRoutes 포함된 경로에서는 레이아웃 적용 안함
  let isExcetion = false;
  excetionRoutes.forEach((path) => {
    if (router.pathname.startsWith(path)) isExcetion = true;
  });
  if (isExcetion) return children;

  //그 외에는 레이아웃 적용
  return (
    // 대시보드 디자인 출처 : https://codepen.io/utbaz/pen/VwBWebL
    <div className="dashboard_container">
      {/* <div className="lg:w-10/12 xl:w-8/12 mx-auto"> */}
      <main className="mp_main relative -translate-x-2/4 -translate-y-2/4 w-[1300px] h-[660px] max-h-screen shadow-[4px_4px_50px_rgba(0,0,0,0.49)] backdrop-blur-[100px] z-[99] rounded-[20px] left-2/4 top-2/4 bg-black/50">
        {/* <Sidebar />
        {/* <div className="relative w-[1200px] h-full left-[100px] top-0"> */}
        {children}
        {/* </div> */}
      </main>
      {/* </div> */}
    </div>
  );
}

export default Layout;
