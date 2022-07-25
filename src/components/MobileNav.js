import React from "react";

import { NavLink } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-nav-top-container">
          <h1>LAUREN PICKERING</h1>
          <div className="mobile-nav-bottom-container nav-bottom-container">
            Illustrator / Visual Development / Character Design
          </div>
          <div className="nav-link-container">
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Gallery
            </NavLink>
            <NavLink
              exact
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/sketchbook"
            >
              Sketchbook
            </NavLink>
            <NavLink
              exact
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About / Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
