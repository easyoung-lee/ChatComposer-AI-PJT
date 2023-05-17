import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Sidebar from "./dashboard/sidebar";
import Navbar from "./navbar";

function Layout({ children }) {
  const router = useRouter();
  // const excetionRoutes = ["/login", "/signup"];
  const excetionRoutes = ["/"];

  //excetionRoutes 포함된 경로에서는 레이아웃 적용 안함
  let isExcetion = false;
  excetionRoutes.forEach((path) => {
    if (router.pathname === path) isExcetion = true;
  });
  if (isExcetion) return children;

  //그 외에는 레이아웃 적용
  return (
    <>
      <div className="dashboard_container" style={{ background: "#edf2f7" }}>
        <div className="lg:w-10/12 mx-auto bg-white">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
