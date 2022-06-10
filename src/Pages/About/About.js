import React from "react";
import image1 from "../../image/image 1.png";
import image2 from "../../image/Screenshot_2.png";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-primary text-4xl font-bold">
        About <span className="border-b-4 border-primary text-accent">Me</span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div
              data-aos="fade-down-right"
              className="rounded-lg h-64 overflow-hidden"
            >
              <img
                alt="content"
                className="object-cover object-center md:h-full md:w-full sm:w-1/2 sm:h-1/2"
                // className="object-cover object-center h-full w-full"
                src={image2}
              />
            </div>
            <div
              data-aos="fade-down-left"
              className="flex flex-col sm:flex-row mt-10"
            >
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-300 text-gray-400">
                  <img src={image1} alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Md.Ahsan Habib
                  </h2>
                  <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                  <p className="text-base">Junior front-end Developer</p>
                  <button className="btn-primary btn-outline btn mt-4">
                    Hire Me
                  </button>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  I am a skilled professional front-end Developer. My primary
                  focus is on keeping our clients happy. I have completed
                  everything for Front-end Developer. Whatever I can do
                  efficiently HTML, CSS3, Bootstrap, Tailwind, JavaScript,
                  ReactJs, Github, Git, Node Js. Making the right choice is as
                  easy as selecting your Company as a Front-end Developer.
                </p>
                <a className="text-primary inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
