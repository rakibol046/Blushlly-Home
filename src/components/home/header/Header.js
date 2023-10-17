import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="px-28">
      <TopHeader />
      <div className="h-px bg-gray-300"></div>
      <Navbar />
    </div>
  );
}

export default Header;
