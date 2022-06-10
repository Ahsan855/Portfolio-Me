import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";
import { TbArrowBigUpLine } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="/">
      <Banner />
      <Projects />
      <About />
      <Pricing />
      <Service />
      <Testimonials />
      <Contact />
      <Link
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="btn btn-outline btn-primary rounded-full"
      >
        <TbArrowBigUpLine className="text-6xl" />
      </Link>
    </div>
  );
};

export default Home;
