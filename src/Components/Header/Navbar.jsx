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
      <div>
        <div>
          <a href=""><img src={logo} alt="Adidas logo" /></a>
          <a href="">Women</a>
          <a href="">Men</a>
          <a href="">Kids</a>
          <a href="">News</a>
          <a href="">Sport</a>
          <a href="">Adidas World</a>
          <div>
            <input type="text" placeholder="Forum Mid Parley" />
            <SearchIcon/>
          </div>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <ShoppingBagOutlinedIcon/>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
