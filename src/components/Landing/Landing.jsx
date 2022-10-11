import React from "react";
import NavBar from "../NavBar/NavBar";
import Tecnologies from "../Tecnologies/Tecnologies";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import { ContactUs } from "../Email/ContactUs";

const Landing = () => {
  return (
    <div id="home">
      <NavBar></NavBar>
      <section className="text-white bg-gray-900">
        {/* <SideBar /> */}

        <div className="px-4 py-28 sm:py-0 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-full p-1 my-8 shadow-xl  bg-gradient-to-r from-blue-500 to-purple-400 w-[200px] mx-auto">
              <img
                src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665114819/Sin_t%C3%ADtulo-1_xyjxfb.png"
                alt="img"
                className="bg-gray-900 rounded-full saturate-100"
              />
            </div>
            <p className="max-w-xl mx-auto  sm:leading-relaxed sm:text-xl">
              Hello World! I'm
            </p>
            <h1 className="text-8xl grid font-extrabold text-transparent sm:text-8xl bg-clip-text bg-gradient-to-r from-blue-500  to-purple-400 ">
              Gonzalo Fara
              <span className="text-lg sm:block bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 ">
                FULLSTACK WEB DEVELOPER
              </span>
              <SideBar />
            </h1>
          </div>
        </div>
      </section>
      <Tecnologies />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;
