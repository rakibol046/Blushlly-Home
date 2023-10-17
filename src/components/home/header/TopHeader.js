import React from "react";
import Facebook from "../../../assets/Facebook.png";
import Instagram from "../../../assets/Instagram.png";
import Threads from "../../../assets/Threads.png";
import Twitter from "../../../assets/twitter.png";
import Pinterest from "../../../assets/Pinterest.png";
import Linkedin from "../../../assets/Linkedin.png";

function TopHeader() {
  return (
    <div className="main-container flex justify-between items-center py-2">
      <div className="wellcome-msg">
        <span className="montserrat text-gray-500">Welcome There!</span>
      </div>
      <div className="social-and-subscribe flex">
        <div className="social flex pr-4">
          <a className="pr-2" href="#">
            <img src={Facebook} alt="" />
          </a>
          <a className="pr-2" href="#">
            <img src={Instagram} alt="" />
          </a>
          <a className="pr-2" href="#">
            <img src={Threads} alt="" />
          </a>
          <a className="pr-2" href="#">
            <img src={Twitter} alt="" />
          </a>
          <a className="pr-2" href="#">
            <img src={Pinterest} alt="" />
          </a>
          <a className="pr-2" href="#">
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <div className="line w-px bg-gray-300 mr-5"></div>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default TopHeader;
