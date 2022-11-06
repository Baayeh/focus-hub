import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="flex align-items-center min-h-screen relative">
      <NavBar />
      <main className="md:ml-[15%] xl:ml-[10%] 2xl:ml-[10%] ml-0 sm:ml-0 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
