
import React from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer"; // ✅ Import Footer
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Navbar />
      
      <main className="pt-16 flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
