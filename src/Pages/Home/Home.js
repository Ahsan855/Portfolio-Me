import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div id="/">
      <Banner />
      <Projects />
      <About />
      <Pricing />
      <Service />
    </div>
  );
};

export default Home;
