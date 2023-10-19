import React from "react";
import skin from "../../../assets/skin.png";
function Categories() {
  const categories = [
    {
      img: skin,
      title: "Skin",
    },
    {
      img: skin,
      title: "Hair",
    },
    {
      img: skin,
      title: "Makeup",
    },
    {
      img: skin,
      title: "Tips",
    },
    {
      img: skin,
      title: "Spa",
    },
  ];
  return (
    <div className="categories-container lg:grid lg:grid-cols-5 lg:gap-5 grid grid-cols-2 gap-2 lg:px-28 px-1 py-10">
      {categories.map((cat, i) => (
        <div key={i}>
          <div className="category overflow-hidden relative">
            <img
              className="categories-img  brightness-50"
              width="100%"
              src={cat?.img}
              alt=""
            />
            <div className="title absolute  inset-0 flex items-center justify-between">
              <div className="m-auto">
                <span className="montserrat backdrop-invert-0 bg-white/20 uppercase text-white rounded-3xl px-6 py-1.5 border-2 border-white border-solid">
                  {cat?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
