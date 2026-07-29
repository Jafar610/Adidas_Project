import React from "react";
import logo from "../../assets/Addidas_white_logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <>
      <div className="bg-[#231F20] py-4">
        {/* logo */}
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-20" />
        </div>

        {/* navigation */}
        <div className="text-white flex justify-around align-center gap-4">
          <div className="flex flex-col justify-center text-sm text-gray-300">
            <h2 className="text-3xl font-bold text-white">INFO</h2>
            <p>Terms and Conditions</p>
            <p>Cookies</p>
            <p>Privacy Politics</p>
          </div>

          <div  className="flex flex-col justify-center text-sm text-gray-200">
            <h2 className="text-3xl font-bold text-white">COLLECTIONS</h2>
            <p>Ultraboost</p>
            <p>Confirmed</p>
            <p>NMD</p>
            <p>Originals</p>
          </div>

          <div  className="flex flex-col justify-center text-sm text-gray-200">
            <h2 className="text-3xl font-bold text-white">SPORTS</h2>
            <p>Football</p>
            <p>Basketball</p>
            <p>Running</p>
            <p>Training</p>
          </div>

          <div  className="flex flex-col justify-center text-sm text-gray-200" >
            <h2 className="text-3xl font-bold text-white">SUPPORT</h2>
            <p>Customer</p>
            <p>F.A.Q.</p>
            <p>Shipping</p>
            <p>adiClub</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">FOLLOW US</h2>
            <div className="flex justify-center align-center gap-6">
              <FacebookRoundedIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </div>

            <div className="flex justify-center align-center gap-6">
                <InstagramIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
            </div>
          </div>
        </div>

        {/* payment */}
        <div></div>
      </div>
    </>
  );
}

export default Footer;
