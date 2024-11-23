import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/navbar";

interface MainLayout {}

const MainLayout: React.FC<MainLayout> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
