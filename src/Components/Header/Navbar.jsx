import React from "react";
import SmallHeader from "./SmallHeader";
import logo from '../../assets/Adidas-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function Navbar() {
  return (
    <section>
      <SmallHeader />
      <div className="flex justify-center align-center">
        <div className="flex justify-center align-center gap-5 py-4 text-2xl font-sm uppercase">
          <a href="" className="pr-10"><img src={logo} alt="Adidas logo" className="w-15" /></a>
          <a href="">Women</a>
          <a href="">Men</a>
          <a href="">Kids</a>
          <a href="">News</a>
          <a href="">Sport</a>
          <a href="">Adidas World</a>
          <div className="relative ">
            <input type="text" placeholder="Forum Mid Parley" className="border border-gray-200 outline-none rounded-sm bg-gray-200 px-2 text-lg py-1" />
            <SearchIcon className="absolute right-3 bottom-1"/>
          </div>
          <PersonOutlineOutlinedIcon fontSize="large"/>
          <FavoriteBorderOutlinedIcon fontSize="large"/>
          <ShoppingBagOutlinedIcon fontSize="large"/>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
