import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" w-full sticky top-0 z-50">
      <div className="">
        <div className="navbar bg-black md:px-28">
          <div className="navbar-start">
            <h1 className="text-accent font-extrabold text-2xl">
              Ahsan <span className="text-primary">Habib</span>
            </h1>

            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
                <li className="mr-2">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Service
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Blogs
                  </Link>
                </li>

                <li className="mr-2">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-64}
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
                  offset={-64}
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
                  offset={-64}
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
                  offset={-64}
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
                  offset={-64}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  className="text-white"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                >
                  Blogs
                </Link>
              </li>

              <li className="mr-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
