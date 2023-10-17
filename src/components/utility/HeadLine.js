import React from "react";

function HeadLine({ title }) {
  return (
    <div className="flex py-5 justify-between items-center">
      <div className="line h-0.5 w-full bg-gray-500"></div>
      <strong className="title whitespace-nowrap px-4 text-2xl">{title}</strong>
      <div className="line h-0.5 w-full bg-gray-500"></div>
    </div>
  );
}

export default HeadLine;
