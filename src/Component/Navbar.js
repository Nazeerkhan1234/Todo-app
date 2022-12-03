import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const myStyle2 = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={myStyle2} to="/home">
        Home
      </NavLink>
      <NavLink style={myStyle2} to="/about">
        About
      </NavLink>
      <NavLink style={myStyle2} to="/contact">
        Contact
      </NavLink>
      <NavLink style={myStyle2} to="/Product">
        Product
      </NavLink>
      <NavLink style={myStyle2} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
