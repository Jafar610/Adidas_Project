import React from "react";
import images from "./Card";

function Cards() {
  const { img1, img2, img3, img4 } = images;
  return (
    <div className="bg-white py-8 ">
      <h1 className="py-3 px-25 text-2xl font-bold">MOST INTERESTING</h1>

      <div className="flex justify-center align-center gap-8 w-full h-80 pb-6">
        <img src={img1} alt="" className="w-65" />
        <img src={img2} alt="" className="w-65" />
        <img src={img3} alt="" className="w-65" />
        <img src={img4} alt="" className="w-65" />
      </div>
    </div>
  );
}

export default Cards;
