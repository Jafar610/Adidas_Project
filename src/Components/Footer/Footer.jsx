import React from "react";
import logo from "../../assets/Addidas_white_logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import visa from "../../assets/PaymentLogo/Visa.png";
import express from "../../assets/PaymentLogo/A.Express.png";
import vCard from "../../assets/PaymentLogo/Vector.png";
function Footer() {
  return (
    <>
      <div className="bg-[#231F20] py-6 md:py-8">
        {/* logo */}
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-20 md:w-24" />
        </div>

        {/* navigation */}
        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap justify-center gap-8 px-4 text-white sm:gap-6 md:justify-around lg:gap-8">
          <div className="flex w-full flex-col items-center text-center text-sm text-gray-300 sm:w-[45%] md:w-auto md:items-start md:text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              INFO
            </h2>
            <p>Terms and Conditions</p>
            <p>Cookies</p>
            <p>Privacy Politics</p>
          </div>

          <div className="flex w-full flex-col items-center text-center text-sm text-gray-200 sm:w-[45%] md:w-auto md:items-start md:text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              COLLECTIONS
            </h2>
            <p>Ultraboost</p>
            <p>Confirmed</p>
            <p>NMD</p>
            <p>Originals</p>
          </div>

          <div className="flex w-full flex-col items-center text-center text-sm text-gray-200 sm:w-[45%] md:w-auto md:items-start md:text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              SPORTS
            </h2>
            <p>Football</p>
            <p>Basketball</p>
            <p>Running</p>
            <p>Training</p>
          </div>

          <div className="flex w-full flex-col items-center text-center text-sm text-gray-200 sm:w-[45%] md:w-auto md:items-start md:text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              SUPPORT
            </h2>
            <p>Customer</p>
            <p>F.A.Q.</p>
            <p>Shipping</p>
            <p>adiClub</p>
          </div>

          <div className="mt-2 flex w-full flex-col items-center text-center sm:w-auto md:mt-0 md:items-start md:text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              FOLLOW US
            </h2>
            <div className="mt-3 flex justify-center gap-6 md:justify-start">
              <FacebookRoundedIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </div>

            <div className="mt-2 flex justify-center gap-6 md:justify-start">
              <InstagramIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </div>
          </div>
        </div>

        {/* payment */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 py-2">
          <img src={visa} alt="" className="w-5" />
          <img src={vCard} alt="" className="w-5" />
          <img src={express} alt="" className="w-5" />
        </div>
      </div>
    </>
  );
}

export default Footer;
