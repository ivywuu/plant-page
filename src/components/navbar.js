import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";
import hamburger from "./hamburger";

function Navbar() {
  return (
    <nav>
      <div>
        <div className="logo">
          <NavLink to="/">Ivy's Plants</NavLink>
        </div>

        <div className="pages">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/tools">Tools</NavLink>
        </div>
      </div>

      <div className="">
        <hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
