import React from "react";
import HeadLine from "../../utility/HeadLine";
import DotLine from "../../utility/DotLine";
import image11 from "../../../assets/Image11.png";
import image12 from "../../../assets/Image12.png";
import image13 from "../../../assets/Image13.png";
import image14 from "../../../assets/Image14.png";
import image15 from "../../../assets/Image15.png";
import image16 from "../../../assets/Image16.png";

function RandomPost() {
  const data = [
    {
      img: image11,
      head: "Hair",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image12,
      head: "SPA",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image13,
      head: "Makeup",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image14,
      head: "SPA",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image15,
      head: "Hair",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
    {
      img: image16,
      head: "Makeup",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      des: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      saler: "Sarfraz Jasim",
      date: "29 July, 2023",
    },
  ];
  return (
    <div className="lg:px-28">
      <HeadLine title="Random Post" />
      <br />
      {data.map((data, index) => (
        <div>
          <div className="overflow-hidden relative">
            <div className={`flex ${index % 2 ? "justify-end" : ""}`}>
              <img src={data?.img} className="lg:w-1/2 w-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-between invisible lg:visible">
              <div
                className={`${
                  index % 2 ? "random-content-reverse" : "random-content"
                }`}
              >
                <p className="montserrat underline uppercase text-gray-500 mb-5">
                  {data?.head}
                </p>

                <strong className="" style={{ fontSize: "32px" }}>
                  {data?.title}
                </strong>
                <p className="montserrat w-4/5 mt-5 text-gray-500">
                  {data?.des}
                </p>
                <p className="montserrat mt-5 text-gray-500">
                  By {data?.saler} - {data?.date}
                </p>
              </div>
            </div>
          </div>
          {/* <br /> */}
          <DotLine />
        </div>
      ))}

      <div className="text-center">
        <button
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
          className="btn montserrat px-44 mb-5"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default RandomPost;
