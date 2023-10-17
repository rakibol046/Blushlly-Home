import React from "react";
import HeadLine from "../../utility/HeadLine";
import image1 from "../../../assets/Image1.png";
import image2 from "../../../assets/Image2.png";
import image3 from "../../../assets/Image3.png";
import image4 from "../../../assets/Image4.png";

function LatestPost() {
  const data = [
    {
      img: image1,
      head: "Hair",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image2,
      head: "Makeup",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image3,
      head: "Tips",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
  ];
  return (
    <div className="px-28 ">
      <HeadLine title="Latest Post" />
      <section className="grid grid-cols-3 gap-6 py-5 ">
        {data.map((data, i) => (
          <div key={i}>
            <div className="">
              <img src={data?.img} alt="img" width="100%" />
              <div className="flex justify-center items-center">
                <div
                  style={{ marginTop: "-6rem", backgroundColor: "white" }}
                  className="content w-4/5 leading-6 px-10 py-4 text-center border-2 border-gray-500 border-solid"
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
      <section className="py-5">
        <div className="">
          <img src={image4} alt="img" width="100%" />
          <div className="flex justify-center items-center  ">
            <div
              style={{ marginTop: "-7.5rem", backgroundColor: "white" }}
              className="content w-4/5  px-32 py-5 text-center border-2 border-gray-500 border-solid"
            >
              <p className="underline montserrat uppercase">Skin</p>
              <p className="text-3xl pt-3">
                Sed dignissim quam nulla, at sodales elit venenatis at. In in
                fringilla
              </p>
              <p className="pt-3">
                Donec eget leo laoreet, faucibus ante et, finibus orci. Nam
                pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras
                bibendum nisi a interdum facilisis…..
              </p>
              <p className="montserrat text-gray-500 pt-3">
                By Sarfraz Jasim - 29 July, 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestPost;
