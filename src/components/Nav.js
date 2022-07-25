import React from "react";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-top-container">
          <h1>LAUREN PICKERING</h1>
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
        <div className="nav-bottom-container">
          Illustrator / Visual Development / Character Design
        </div>
      </div>
    </>
  );
}

export default Nav;
