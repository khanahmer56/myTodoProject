import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";

const HomePage = () => {
  return (
    <>
      <div className="flex bg-black min-h-screen">
        <SideBar />
        <Feed />
      </div>
    </>
  );
};

export default HomePage;
