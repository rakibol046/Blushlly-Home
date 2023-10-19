import React from "react";
import image10 from "../../../assets/Image10.png";
import Facebook from "../../../assets/Facebook.png";
import Instagram from "../../../assets/Instagram.png";
import Threads from "../../../assets/Threads.png";
import Twitter from "../../../assets/twitter.png";
import Pinterest from "../../../assets/Pinterest.png";
import Linkedin from "../../../assets/Linkedin.png";

function MorbiPorttitor() {
  return (
    <div
      style={{ backgroundColor: "rgba(221, 221, 221, 1)" }}
      className="py-12 mt-7 lg:px-80 px-3 lg:flex"
    >
      <div className="flex justify-center w-full">
        <img className="rounded-full" src={image10} alt="img" />
      </div>
      <div className="pl-10 flex justify-center items-center">
        <div>
          <p className="text-3xl mt-4 lg:mt-0">Morbi Porttitor</p>
          <p className="montserrat pt-2">
            Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
            Vivamus placerat luctus neque nec faucibus. Aliquam Gravida eu
            Tortor vitae tempor. . Mauris condimentum scelerisque ante nec
            ultricies. Vivamus tincidunt nibh velit!
          </p>
          <div className="flex justify-between items-center pt-3">
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
            <span>(85 Posts)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MorbiPorttitor;
