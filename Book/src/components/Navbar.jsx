import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import assets from "../assets/assets";
function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link>
        <img
          className="w-36 h-15 border border-none"
          src={assets.heart_logo}
          alt=""
        />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-black">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/calenderpanel"
          className="flex flex-col items-center gap-1"
        >
          <p>Calender</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/appoinment" className="flex flex-col items-center gap-1">
          <p>Appoinment</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="About Us" className="flex flex-col items-center gap-1">
          <p>About Us</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <Link to='/login'>
        <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
        </Link>
        <div className="group relative">
          <img
            onClick={() => setVisible(true)}
            className="sm:hidden w-5 cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>
      <div
        className={`absolute top-0 bottom-o right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-700">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img className="w-2" src={assets.drop_down} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 border pl-6"
            to="/"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 border pl-6"
            to="/calenderpanel"
            onClick={() => setVisible(false)}
          >
            Calender
          </NavLink>
          <NavLink
            className="py-2 border pl-6"
            to="Appoinment"
            onClick={() => setVisible(false)}
          >
            Appoinment
          </NavLink>
          <NavLink
            className="py-2 border pl-6"
            to="about"
            onClick={() => setVisible(false)}
          >
            Abount Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
