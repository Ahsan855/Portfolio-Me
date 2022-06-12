import React from "react";
import image from "../../image/undraw_uploading_re_okvh.svg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Typed from "react-typed";

const Banner = () => {
  // let typewriter = new Typewriter(app, {
  //   loop: true,
  //   delay: 75,
  // });
  return (
    <div className="bg-black">
      <div className="hero min-h-screen w-3/4 mx-auto bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse sm:px-5">
          <img
            src={image}
            className="md:max-w-md sm:max-w-xs rounded-full shadow-2xl"
            alt=""
          />
          <div
            className="text-left"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <h1 className="sm:text-2xl md:text-5xl font-bold text-white">
              Hello, I'm <br />
              <span className="text-primary">Md. Ahsan Habib</span>
            </h1>
            <p className="text-white sm:text-xl md:text-2xl">
              I'm A
              <Typed
                strings={[
                  "  Front End Developer",
                  "  Full-Stact Developer",
                  "  Junior Web Developer",
                  "  Junior MERN Stact Developer",
                ]}
                typeSpeed={70}
                loop
              />
            </p>
            <p className="md:py-6 sm:py-2 md:w-10/12 text-accent sm:text-sm">
              I am a skilled professional front-end Developer. My primary focus
              is on keeping our clients happy. I have completed everything for
              Front-end Developer.
            </p>
            <a
              href="https://drive.google.com/file/d/1IHFeHiN5X_PkAq_PFbF5fVekKTb-MFqm/view?usp=sharing"
              className="btn btn-primary btn-outline cursor-pointer mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume{" "}
              <AiOutlineCloudDownload className="ml-3 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
