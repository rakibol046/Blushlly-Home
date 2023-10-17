import React from "react";
import slider from "../../../assets/slider-image.png";
import Carousel from "./Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const sliders = [slider];

function Slider() {
  return (
    <div className="slider-main-content">
      <Carousel autoSlide={false}>
        {sliders.map((img) => (
          <img src={img} width="100%" />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
