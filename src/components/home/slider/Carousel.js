import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "react-feather"

import leftArrow from '../../../assets/Left-Arrow.png'
import rightArrow from '../../../assets/Right-Arrow.png'

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {/* Data will be dynamic with slider image */}
      <div className="invisible lg:visible absolute inset-0 flex items-center justify-between p-4">
        <div className="slider-content leading-9">
          <p className="montserrat underline">SKIN</p>

          <strong className="" style={{ fontSize: "32px" }}>
            Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat
          </strong>
          <p className="montserrat">By Sarfraz Jasim - 29 July, 2023</p>
          <p className="montserrat pt-2">
            {" "}
            <a href="#">Continue Reading {"->"}</a>
          </p>
          <div className="line h-px w-36 bg-white"></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="lg:p-20 p-0 rounded-full shadow text-gray-800"
        >
          {/* <leftArrow size={40} /> */}
          <img src={leftArrow} alt="" />
        </button>
        <button
          onClick={next}
          className="lg:p-20 p-0 rounded-full shadow text-gray-800"
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}