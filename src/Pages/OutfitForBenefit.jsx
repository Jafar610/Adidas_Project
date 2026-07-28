import React from "react";
import img from "../assets/product/girl_image.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function OutfitForBenefit() {
  return (
    <div className="relative">
      <h2 className="absolute top-15 left-80 text-4xl w-60 font-bold text-white">OUTFITS FOR <span className="text-[#ede734]">BENEFITS</span> </h2>
      <div className="flex justify-start align-center border border-gray-300 rounded-4xl mx-35 my-5 bg-[#231f20]">
        <div className="w-80 ">
          <img src={img} alt="" className="rounded-l-4xl" />
        </div>

        <div className="flex flex-col justify-center align-center pl-10">
          <h3 className="text-white text-xl py-3">
            <span className="text-[#ede734]">60% OFF + free shipping</span>: only for adiClub members.
          </h3>
          <h3 className="text-white text-xl pb-5">
            Check your account and start buying for benefits on{" "}
            <span className="text-[#ede734]">adiWeek</span>.
          </h3>
          <div className="flex justify-around align-center mt-10">
            <div className="flex align-center text-white font-extrabold text-2xl gap-2">
              <ArrowRightAltIcon fontSize="large"/>
              <button>BUY NOW</button>
            </div>

            <div className="flex align-center text-white font-extrabold text-2xl gap-2">
              <ArrowDownwardIcon fontSize="large" />
              <button>WHAT IS ADIDAS?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutfitForBenefit;
