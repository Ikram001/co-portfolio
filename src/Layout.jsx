
import React from "react";
import Navbar from "./assets/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
