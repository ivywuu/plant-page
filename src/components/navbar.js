import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";
import hamburger from "./hamburger";

function Navbar() {
  return (
    <nav>
      <div>
        <div className="logo">
          <NavLink to="/">
            <li>Ivy's Plants</li>
          </NavLink>
        </div>

        <div className="pages">
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/plants">
            <li>Plants</li>
          </NavLink>
          <NavLink to="/wishlist">
            <li>Wishlist</li>
          </NavLink>
          <NavLink to="/tools">
            <li>Tools</li>
          </NavLink>
        </div>
      </div>

      <div className="">
        <hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
