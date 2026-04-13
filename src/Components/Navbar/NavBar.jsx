import React from 'react';
import dolarImg from "../../assets/dollar 1.png"
import logo from "../../assets/logo.png"

const NavBar = ({coin}) => {
    return (
      <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            <p>{coin} Coins</p>
            <img src={dolarImg} alt="$" />
          </button>
        </div>
      </div>
    );
};

export default NavBar;