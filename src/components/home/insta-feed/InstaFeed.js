import React from "react";
import HeadLine from "../../utility/HeadLine";
import Frame1 from "../../../assets/Frame1.png";
import Frame2 from "../../../assets/Frame2.png";
import Frame3 from "../../../assets/Frame3.png";
import Frame4 from "../../../assets/Frame4.png";

function InstaFeed() {
  return (
    <div className="lg:px-28 px-2">
      <HeadLine title="Instagram Feed" />
      <div className="grid grid-cols-4 gap-5">
        <img src={Frame1} alt="frame" width="100%" />
        <img src={Frame2} alt="frame" width="100%" />
        <img src={Frame3} alt="frame" width="100%" />
        <img src={Frame4} alt="frame" width="100%" />
      </div>
      <button className="btn w-full my-8 ">Follow Us</button>
    </div>
  );
}

export default InstaFeed;
