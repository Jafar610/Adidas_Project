import React from "react";
import img from "../assets/product/girl_image.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function OutfitForBenefit() {
  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl lg:mb-6 lg:text-left lg:text-4xl">
          OUTFITS FOR <span className="text-[#ede734]">BENEFITS</span>
        </h2>

        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-300 bg-[#231f20] lg:flex-row">
          <div className="w-full lg:w-[38%]">
            <img
              src={img}
              alt="Adidas benefit offer"
              className="h-full w-full rounded-t-[2rem] object-cover lg:rounded-l-[2rem] lg:rounded-tr-none"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center px-4 py-6 text-center sm:px-6 sm:py-8 lg:px-10 lg:text-left">
            <h3 className="text-base leading-6 text-white sm:text-lg lg:text-xl">
              <span className="text-[#ede734]">60% OFF + free shipping</span>:
              only for adiClub members.
            </h3>
            <h3 className="mt-3 text-base leading-6 text-white sm:text-lg lg:mt-4 lg:text-xl">
              Check your account and start buying for benefits on{" "}
              <span className="text-[#ede734]">adiWeek</span>.
            </h3>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:justify-around lg:justify-start lg:gap-8">
              <div className="flex items-center justify-center gap-2 text-lg font-extrabold text-white sm:text-xl lg:justify-start">
                <ArrowRightAltIcon fontSize="large" />
                <button>BUY NOW</button>
              </div>

              <div className="flex items-center justify-center gap-2 text-lg font-extrabold text-white sm:text-xl lg:justify-start">
                <ArrowDownwardIcon fontSize="large" />
                <button>WHAT IS ADIDAS?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutfitForBenefit;
