import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="lg:px-28 px-2 lg:mb-0 mb-3">
      <TopHeader />
      <div className="h-px invisible lg:visible bg-gray-300"></div>
      <Navbar />
    </div>
  );
}

export default Header;
