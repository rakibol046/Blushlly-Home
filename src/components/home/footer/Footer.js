import React from "react";
import search from "../../../assets/search2.png";
import Frame1 from "../../../assets/Frame1.png";
import Frame2 from "../../../assets/Frame2.png";
import Frame3 from "../../../assets/Frame3.png";
import Frame4 from "../../../assets/Frame4.png";
import logo from "../../../assets/Logo2.png";
import Facebook from "../../../assets/Facebook-white.png";
import Instagram from "../../../assets/Instagram-white.png";
import Threads from "../../../assets/Threads-white.png";
import Twitter from "../../../assets/Twitter-white.png";
import Pinterest from "../../../assets/Pinterest-white.png";
import Linkedin from "../../../assets/Linkedin-white.png";

function Footer() {
  return (
    <div>
      <section
        style={{ backgroundColor: "rgba(221, 221, 221, 1)" }}
        className="text-center p-16"
      >
        <div className="text-3xl pb-5">
          <p>Subscribe For Best</p>
          <p>Beauty Tips</p>
        </div>
        <div className="input-with-btn relative">
          <input type="text" />
          <button className="btn">Subscribe</button>
        </div>
        <div className="pt-5">
          <input type="checkbox" />
          <span className="pl-2">
            I agree that my submitted data is being collected and stored.
          </span>
        </div>
      </section>

      <section
        style={{ backgroundColor: "rgba(29, 26, 26, 1)" }}
        className="lg:px-28 px-4 pt-20 pb-7 text-white"
      >
        <div className="grid lg:grid-cols-3 lg:gap-24">
          <div className="categories">
            <p className="title uppercase mb-5">Categories</p>
            <div className="flex justify-between">
              <p>Beauty</p>
              <p>(4)</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p>Fashion</p>
              <p>(8)</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p>Makeup</p>
              <p>(6)</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p>Body</p>
              <p>(2)</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p>Lifestyle</p>
              <p>(7)</p>
            </div>
            <hr className="my-4" />

            <div className="footer-search">
              <input type="text" placeholder="Search" />
              <img src={search} alt="icon" />
            </div>
          </div>
          <div className="popular-post lg:mt-0 mt-5">
            <p className="title uppercase mb-5">Popular Post</p>

            <div className="flex">
              <img
                src={Frame2}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <div className="pl-5">
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="montserrat text-sm mt-3 text-gray-400">
                  7 Days ago
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <img
                src={Frame4}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <div className="pl-5">
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="montserrat text-sm mt-3 text-gray-400">
                  2 Days ago
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <img
                src={Frame3}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <div className="pl-5">
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="montserrat text-sm mt-3 text-gray-400">
                  4 Days ago
                </p>
              </div>
            </div>
          </div>
          <div className="galary lg:mt-0 mt-5">
            <p className="title uppercase mb-5">Galary</p>
            <div className="grid grid-cols-3 justify-start gap-5">
              <img
                src={Frame4}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <img
                src={Frame3}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <img
                src={Frame2}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <img
                src={Frame1}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <img
                src={Frame3}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
              <img
                src={Frame1}
                alt="frame"
                width="100px"
                height="100px"
                className="object-cover"
              />
            </div>
            <p className="uppercase mt-5 mb-2">Tags</p>
            <div className="grid grid-cols-4 gap-2">
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Bueaty
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Skin
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Makeup
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Hair
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Tips
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Fasion
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Eye
              </a>
              <a
                style={{
                  backgroundColor: "rgba(83, 83, 83, 1)",
                  borderRadius: "20px",
                }}
                className="montserrat text-center py-1"
                href="#"
              >
                Skin
              </a>
            </div>
          </div>
        </div>

        <hr className="my-10" />
        <div className="lg:flex justify-between items-center">
          <img src={logo} alt="logo" />
          <ul className="flex gap-5 ">
            <li>
              <a className="montserrat" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="montserrat" href="#">
                Categoris
              </a>
            </li>
            <li>
              <a className="montserrat" href="#">
                Makeup
              </a>
            </li>
            <li>
              <a className="montserrat" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="montserrat" href="#">
                About
              </a>
            </li>
            <li>
              <a className="montserrat" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-10" />

        <div className=" lg:flex text-center justify-between items-center">
          <div className="social flex justify-center pr-4">
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

          <p className="montserrat">© 2023 PostX. Designed By WPXPO</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
