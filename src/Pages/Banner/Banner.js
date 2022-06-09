import React from "react";
import image from "../../image/undraw_uploading_re_okvh.svg";

const Banner = () => {
  return (
    <div className="bg-black">
      <div class="hero min-h-screen w-3/4 mx-auto bg-black">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            class="md:max-w-md sm:max-w-xs rounded-lg shadow-2xl"
            alt=""
          />
          <div className="text-left">
            <h1 class="sm:text-2xl md:text-5xl font-bold text-white">
              Hello, I'm <br />
              <span className="text-primary">Md. Ahsan Habib</span>
            </h1>
            <h2 className="text-white sm:text-xl md:text-2xl">
              Junior Front End Developer
            </h2>
            <p class="md:py-6 sm:py-2 md:w-10/12 text-accent sm:text-sm">
              I am a skilled professional front-end Developer. My primary focus
              is on keeping our clients happy. I have completed everything for
              Front-end Developer.
            </p>
            <a
              href="https://drive.google.com/file/d/1IHFeHiN5X_PkAq_PFbF5fVekKTb-MFqm/view?usp=sharing"
              class="btn btn-primary btn-outline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
