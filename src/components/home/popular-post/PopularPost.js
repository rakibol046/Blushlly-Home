import React from "react";
import HeadLine from "../../utility/HeadLine";
import image5 from "../../../assets/Image5.png";
import image6 from "../../../assets/Image6.png";
import image7 from "../../../assets/Image7.png";
import image8 from "../../../assets/Image8.png";
import image9 from "../../../assets/Image9.png";

function PopularPost() {
  const data = [
    {
      img: image5,
      head: "Hair",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image6,
      head: "Makeup",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image7,
      head: "Tips",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
  ];
  return (
    <div className="lg:px-28">
      <HeadLine title="Popular Post" />
      <section className="lg:grid lg:grid-cols-3 lg:gap-6 py-5">
        {data.map((data, i) => (
          <div key={i}>
            <div className="mb-20 lg:mt-0">
              <img src={data?.img} alt="img" width="100%" />
              <div className="flex justify-center items-center">
                <div
                  style={{ marginTop: "-6rem", backgroundColor: "white" }}
                  className="content w-4/5 leading-6 lg:px-10 px-0 py-4 text-center border-2 border-gray-500 border-solid"
                >
                  <p className="underline montserrat uppercase">{data?.head}</p>
                  <p className="text-2xl">{data?.title}</p>
                  <p className="montserrat text-gray-500">
                    By {data?.saler} - {data?.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="lg:grid lg:grid-cols-2 lg:gap-6 py-5">
        <div className="mb-20 lg:mt-0">
          <img src={image8} alt="img" width="100%" />
          <div className="flex justify-center items-center  ">
            <div
              style={{ marginTop: "-7.5rem", backgroundColor: "white" }}
              className="content w-4/5  lg:px-8 px-0 py-4 text-center border-2 border-gray-500 border-solid"
            >
              <p className="underline montserrat uppercase">Skin</p>
              <p className="text-3xl pt-1">
                Sed dignissim quam nulla, at sodales elit venenatis at. In in
                fringilla
              </p>
              <p className="montserrat text-gray-500 pt-1">
                By Sarfraz Jasim - 29 July, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={image9} alt="img" width="100%" />
          <div className="flex justify-center items-center  ">
            <div
              style={{ marginTop: "-7.5rem", backgroundColor: "white" }}
              className="content w-4/5  lg:px-8 px-0 py-4 text-center border-2 border-gray-500 border-solid"
            >
              <p className="underline montserrat uppercase">Tips</p>
              <p className="text-3xl pt-1">
                Sed dignissim quam nulla, at sodales elit venenatis at. In in
                fringilla
              </p>
              <p className="montserrat text-gray-500 pt-1">
                By Sarfraz Jasim - 29 July, 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularPost;
