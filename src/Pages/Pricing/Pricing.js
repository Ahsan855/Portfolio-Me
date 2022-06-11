import React from "react";

const Pricing = () => {
  return (
    <div className="mb-16" id="skills">
      <h1 className="text-primary text-4xl text-center font-bold">
        <span className="text-accent">My</span> Skills
      </h1>
      <progress className="progress progress-primary w-56"></progress>

      <div className="grid md:grid-cols-2 grid-cols-1 md:px-20 mt-16">
        <div data-aos="fade-right">
          <h1 className="text-primary text-left text-2xl font-semibold">
            Additionally, I look forward to finding a new challenge every day
          </h1>
          <p className="text-left">
            A great deal of my experience is in web development, using a variety
            of scripting languages like React, JavaScript, HTML, and CSS A
            responsive and eye-catching website using bootstrap, Tailwind-CSS.
          </p>
          <button className="border-1 px-2 font-bold border-primary hover:bg-primary hover:text-white py-2 rounded-full mt-8 shadow-sm shadow-primary">
            A professional course from Programming-hero
          </button>
        </div>
        <div data-aos="fade-left" className="text-left md:ml-28 mt-10">
          JavaScripts
          <progress
            className="progress progress-primary w-56 ml-4"
            value="85"
            max="100"
          ></progress>
          <br />
          React
          <progress
            className="progress progress-primary w-56 ml-14"
            value="70"
            max="100"
          ></progress>
          <br />
          Node Js
          <progress
            className="progress progress-primary w-56 ml-10"
            value="80"
            max="100"
          ></progress>
          <br />
          Express
          <progress
            className="progress progress-primary w-56 ml-10"
            value="50"
            max="100"
          ></progress>
          <br />
          MongoDB
          <progress
            className="progress progress-primary w-56 ml-6"
            value="60"
            max="100"
          ></progress>
          <br />
          Html
          <progress
            className="progress progress-primary w-56 ml-16"
            value="100"
            max="100"
          ></progress>
          <br />
          CSS
          <progress
            className="progress progress-primary w-56 ml-16"
            value="70"
            max="100"
          ></progress>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
