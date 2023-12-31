import React from "react";
import logo1 from "../../../assets/Logo1.png";
import searchImg from "../../../assets/search.png";

function Navbar() {
  const [search, setSearch] = React.useState(true);
  const navItem = [
    "Home",
    "Categories",
    "Makeup",
    "Blog",
    "About",
    "Contact Us",
  ];
  return (
    <div className="nav-main-container py-2">
      <div className="logo flex justify-center lg:justify-start">
        <img src={logo1} alt="" />
      </div>
      <nav className="">
        <ul className="lg:flex grid grid-cols-3 gap-2">
          {navItem?.map((value, i) => (
            <li key={i} className="px-3">
              {" "}
              <a className="montserrat" href="">
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="search lg:flex lg:visible hidden gap-2 justify-end">
        <input className="" hidden={search} type="text" placeholder="Search" />
        <span className="montserrat" hidden={!search}>
          Search
        </span>
        <img className="" src={searchImg} alt="" />
      </div> */}
      <div className="head-search">
        <input type="text" placeholder="Search" />
        <img src={searchImg} alt="icon" />
      </div>
    </div>
  );
}

export default Navbar;
