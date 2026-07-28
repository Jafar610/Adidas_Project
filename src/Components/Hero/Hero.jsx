import React from "react";
import heroImage from "../../assets/Adidas-Hero.jpg";
import logoImage from "../../assets/Adidas-logo.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Hero() {
  return (
    <>
      <section
        className="bg-cover bg-center h-125 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative">
          <span
            className="bg-cover  bg-center absolute top-50 left-40 h-30 w-50 "
            style={{ backgroundImage: `url(${logoImage})` }}
          ></span>

          <div className="absolute top-50 left-10">
            <h2 className="flex text-5xl w-150 font-extrabold tracking-widest z-10 bg-gradient-to-r from-[#d63b2c] to-[#070504] bg-clip-text text-transparent">
              ADICLUB IS SHOWING OFF.
            </h2>
            <p className="text-white w-120 text-lg font-[Oswald]">
              Exclusive releases for our members and more ways to unlock those things that you love.
            </p>

            <div className="flex gap-2 text-white mt-10 font-extrabold text-xl">
              <ArrowRightAltIcon style={{fontSize: '50px'}} />
              <button>SEE MORE</button>
            </div>

            <div className="flex gap-2 text-white font-extrabold text-xl">
              <ArrowRightAltIcon style={{fontSize: '50px'}} />
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
