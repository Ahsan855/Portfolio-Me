import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" fixed z-50 w-full">
      <div className="">
        <div className="navbar bg-black px-28">
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
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
                <Link
                  className="text-white"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Service
                </Link>
              </li>

              <li className="mr-2">
                <a
                  className="text-white"
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
    </div>
  );
};

export default Navbar;
