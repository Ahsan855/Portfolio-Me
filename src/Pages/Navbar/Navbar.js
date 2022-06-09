import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <a
                  href="https://form.jotform.com/221594069555464"
                  target="blank"
                  to="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <h1 className="text-accent font-extrabold text-2xl">
            Ahsan <span className="text-primary">Habib</span>
          </h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="mr-2">
              <a
                href="https://form.jotform.com/221594069555464"
                target="blank"
                to="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
