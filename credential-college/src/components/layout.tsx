import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <main className="px-6 py-8 w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
