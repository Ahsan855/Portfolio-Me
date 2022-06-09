import React from "react";
import image1 from "../../image/screencapture-toolkits-websites-web-app-2022-06-09-18_47_12.png";
import image2 from "../../image/screencapture-book-store-e6ec1-web-app-2022-06-09-18_46_19.png";
import image3 from "../../image/screencapture-digital-geaget-netlify-app-2022-06-09-18_45_17.png";
import image4 from "../../image/screencapture-constraction-app-web-app-2022-06-09-19_16_54.png";
const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl font-bold text-2xl title-font mb-2 text-gray-900">
                My <span className="border-b-4 border-primary">Projects</span>
              </h1>
            </div>
            <p className="lg:w-1/3 w-full leading-relaxed text-gray-500">
              I can do efficiently HTML, CSS3, Bootstrap, Tailwind, JavaScript,
              ReactJs, Github, Git, Node Js. Making the right choice is as easy
              as selecting your Company fron-end developer.
            </p>
          </div>
          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="xl:w-1/4 md:w-1/2 text-left p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image1}
                  alt="content"
                />
                <h3 className="tracking-wides text-sm font-medium title-font">
                  <span className="text-primary">Used:</span>
                  firebase,react,firebase hooks,tailwind,MongoDb,Nodejs
                </h3>
                <h2 className="text-lg text-primary font-medium title-font mb-4">
                  ToolKits <span>(full-Stact)</span>
                </h2>
                <ul className="text-sm mb-3">
                  <li>* Create a auto parts websites</li>
                  <li>* Home page is responsived</li>
                  <li>* Dashboard added items and delete items</li>
                  <li>* Create blog section this websites</li>
                </ul>
                <div className="grid grid-cols-3">
                  <button className="btn-sm btn-primary rounded-full btn-outline-sm">
                    <a href="https://toolkits-websites.web.app/" target="blank">
                      View
                    </a>
                  </button>
                  <button className="mx-1 btn-sm btn-primary rounded-full btn-outline-sm">
                    <a
                      href="https://github.com/Ahsan855/Toolkits-Client"
                      target="blank"
                    >
                      Client
                    </a>
                  </button>
                  <button className="btn-sm btn-primary rounded-full btn-outline-sm">
                    <a
                      href="https://github.com/Ahsan855/Toolkits-server"
                      target="blank"
                    >
                      Server
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 text-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image2}
                  alt="content"
                />
                <h3 className="tracking-wides text-sm font-medium title-font">
                  <span className="text-primary">Used:</span>
                  firebase,react,firebase hooks,tailwind,MongoDb,Nodejs
                </h3>
                <h2 className="text-lg text-primary font-medium title-font mb-4">
                  Book-House <span>(full-Stact)</span>
                </h2>
                <ul className="text-sm mb-3">
                  <li>* Create a auto parts websites</li>
                  <li>* Home page is responsived</li>
                  <li>* Dashboard added items and delete items</li>
                  <li>* Create blog section this websites</li>
                </ul>
                <div className="grid grid-cols-3">
                  <button className="btn-sm btn-primary rounded-full btn-outline-sm">
                    <a href="https://book-store-e6ec1.web.app/" target="blank">
                      View
                    </a>
                  </button>
                  <button className="mx-1 btn-sm btn-primary rounded-full btn-outline-sm">
                    <a
                      href="https://github.com/Ahsan855/book-wareHouse"
                      target="blank"
                    >
                      Client
                    </a>
                  </button>
                  <button className=" btn-sm btn-primary rounded-full btn-outline-sm">
                    <a
                      href="https://github.com/Ahsan855/Book-ware-House-server"
                      target="blank"
                    >
                      Server
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 text-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image3}
                  alt="content"
                />
                <h3 className="tracking-wides text-sm font-medium title-font">
                  <span className="text-primary">Used:</span>
                  firebase,react,firebase hooks,tailwind
                </h3>
                <h2 className="text-lg text-primary font-medium title-font mb-4">
                  Digital <span>(front-end)</span>
                </h2>
                <ul className="text-sm mb-3">
                  <li>* Create a auto parts websites</li>
                  <li>* Home page is responsived</li>
                  <li>* Dashboard added items and delete items</li>
                  <li>* Create blog section this websites</li>
                </ul>
                <button className="btn-sm btn-primary rounded-full btn-outline-sm">
                  <a href="https://digital-geaget.netlify.app/" target="blank">
                    View Site
                  </a>
                </button>
                <button className=" ml-3 btn-sm btn-primary rounded-full btn-outline-sm">
                  <a
                    href="https://github.com/Ahsan855/Digital-Gaget"
                    target="blank"
                  >
                    Code Site
                  </a>
                </button>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 text-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image4}
                  alt="content"
                />
                <h3 className="tracking-wides text-sm font-medium title-font">
                  <span className="text-primary">Used:</span>
                  firebase,react,firebase hooks,tailwind
                </h3>
                <h2 className="text-lg text-primary font-medium title-font mb-4">
                  Constractions <span>(front-end)</span>
                </h2>
                <ul className="text-sm mb-3">
                  <li>* Create a auto parts websites</li>
                  <li>* Home page is responsived</li>
                  <li>* Dashboard added items and delete items</li>
                  <li>* Create blog section this websites</li>
                </ul>
                <button className="btn-sm btn-primary rounded-full btn-outline-sm">
                  <a href="https://constraction-app.web.app/" target="blank">
                    View Site
                  </a>
                </button>
                <button className=" ml-3 btn-sm btn-primary rounded-full btn-outline-sm">
                  <a
                    href="https://github.com/Ahsan855/Constraction-projects"
                    target="blank"
                  >
                    Code Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
