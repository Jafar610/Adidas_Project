import React from "react";
import images from "./Card";

function Cards() {
  const { img1, img2, img3, img4 } = images;
  return (
    <div className="bg-white py-8">
      <h1 className="py-3 px-4 text-2xl font-bold sm:px-6">MOST INTERESTING</h1>

      <div className="grid gap-4 px-4 pb-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <img src={img1} alt="" className="w-full rounded-2xl object-cover shadow-sm" />
        <img src={img2} alt="" className="w-full rounded-2xl object-cover shadow-sm" />
        <img src={img3} alt="" className="w-full rounded-2xl object-cover shadow-sm" />
        <img src={img4} alt="" className="w-full rounded-2xl object-cover shadow-sm" />
      </div>
    </div>
  );
}

export default Cards;
