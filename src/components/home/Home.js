import React from "react";
import Header from "./header/Header";
import Slider from "./slider/Slider";
import Categories from "./categories/Categories";
import LatestPost from "./latest-post/LatestPost";
import PopularPost from "./popular-post/PopularPost";
import ad1 from "../../assets/Ad1.png";
import ad2 from "../../assets/Ad2.png";
import MorbiPorttitor from "./morbi-porttitor/MorbiPorttitor";
import RandomPost from "./random-post/RandomPost";
import InstaFeed from "./insta-feed/InstaFeed";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      <LatestPost />
      <div className="ad1 lg:px-28 py-12">
        <img src={ad1} alt="ad2" width="100%" />
      </div>
      <PopularPost />
      <MorbiPorttitor />
      <div className="ad2 lg:px-28 py-12">
        <img src={ad2} alt="ad2" width="100%" />
      </div>
      <RandomPost />
      <InstaFeed />
      <Footer />
    </div>
  );
}

export default Home;
