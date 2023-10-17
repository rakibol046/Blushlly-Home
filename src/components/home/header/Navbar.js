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
      <div className="logo">
        <img src={logo1} alt="" />
      </div>
      <nav className="">
        <ul className="flex">
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
      <div className="search flex gap-2 justify-end">
        <input className="" hidden={search} type="text" placeholder="Search" />
        <span className="montserrat" hidden={!search}>
          Search
        </span>
        <img className="" src={searchImg} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
