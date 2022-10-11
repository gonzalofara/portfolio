import React from "react";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiJsonwebtokens,
  SiRedux,
  SiMaterialui,
  SiReact,
  SiTailwindcss,
  SiLeaflet,
  SiWechat,
  SiStripe,
  SiAuth0,
  SiPaypal,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiSequelize,
  SiPostgresql,
  SiMinutemailer,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import "../Languages/Languages.css";
const Projects = () => {
  return (
    <div id="projects" className="md:py-12 bg-gray-900">
      <section className="flex justify-center items-center bg-gray-900 md:py-14 relative ">
        <div className="mx-auto md:px-8 px-4 w-9/12">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
              Some projects
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-2 lg:w-1/2 md:w-10/12 w-11/12">
              Click on the thumbnail to open demo in a new tab.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-6 mt-8">
            <div className="lg:w-1/2 mt-1 sm:mt-0">
              <div className="sm:flex items-center justify-between gap-x-1">
                <div
                  className="sm:w-1/2 relative hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() =>
                    window.open("https://cotizador-criptojs.netlify.app/")
                  }
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-teal-500 rounded-2xl">
                      Frontend
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100">
                        Crypto quoter
                      </h2>
                      <div className="flex items-center gap-1">
                        <SiHtml5 fill="orange" size={20} />
                        <SiJavascript fill="yellow" size={20} />
                        <SiTailwindcss color="#00bcd4" size={25} />
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665201965/Screenshot_2022-10-08_at_01-04-45_Cotizar_Criptomonedas_pr06ur.png"
                    className="w-full h-[200px] "
                    alt="chair"
                  />
                </div>
                <div
                  className="sm:w-1/2 relative mt-1 sm:mt-0 hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() =>
                    window.open("https://pacientes-vet.netlify.app/")
                  }
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-teal-500 rounded-2xl">
                      Frontend
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100">
                        Vet patient monitoring
                      </h2>
                      <div className="flex items-center gap-1">
                        <TbBrandReactNative color="#0097a7" size={25} />
                        <SiTailwindcss color="#00bcd4" size={25} />
                        <GrStorage className="lstorage" size={20} />
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665204315/Screenshot_2022-10-08_at_01-44-24_Citas_React_dx7nff.png"
                    className="w-full h-[200px]"
                    alt="chair"
                  />
                </div>
              </div>
              <div
                className="relative mt-1 hover:cursor-pointer contrast-50 hover:contrast-100"
                onClick={() => window.open("https://mascotapps.vercel.app/")}
              >
                <div>
                  <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-yellow-200 rounded-2xl">
                    FullStack
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-4 p-4 w-full bg-gradient-to-r from-gray-900  to-transparent ">
                    <h2 className="text-xl font-semibold 5 text-gray-50">
                      MascotApp
                    </h2>
                    <div className="flex items-center gap-1">
                      <SiReact color="#00bcd4" size={22} />
                      <SiRedux color="#673ab7" size={22} />
                      <SiJsonwebtokens color="#e91e63" size={22} />
                      <SiLeaflet color="#8bc34a" size={22} />
                      <SiWechat color="#7bdcb5" size={22} />
                      <SiStripe color="#03a9f4" size={20} />
                      <SiAuth0 color="#ff9800" size={20} />
                      <SiPaypal color="#4fc3f7" size={20} />
                      <GrStorage className="lstorage" size={20} />
                      <SiTailwindcss color="#00bcd4" size={22} />
                      <SiMaterialui color="#004dcf" size={22} />
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <SiNodedotjs color="#ffc107" size={22} />
                      <SiTypescript color="#00bcd4" size={22} />
                      <SiExpress color="#673ab7" size={22} />
                      <SiPostgresql color="#3850d6" size={22} />
                      <SiSequelize color="#0097a7" size={22} />
                      <SiMinutemailer color="#8bc34a" size={22} />
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665205231/Screenshot_2022-10-08_at_01-59-35_Mascotapp_zu2kut.png"
                  alt="sitting place"
                  className="w-full h-[275px] mt-1 md:mt-1 hidden sm:block"
                />
                <img
                  className="w-full mt-1 sm:hidden h-[275px]"
                  src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665205231/Screenshot_2022-10-08_at_01-59-35_Mascotapp_zu2kut.png"
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-1 lg:ml-1 lg:mt-0 md:mt-0 mt-1 lg:flex flex-col justify-between">
              <div
                className="relative mt-1 sm:mt-1 md:mt-1 lg:mt-0 hover:cursor-pointer contrast-50 hover:contrast-100
                "
                onClick={() =>
                  window.open("https://github.com/gonzalofara/PI-Pokemon-main")
                }
              >
                <div>
                  <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-yellow-200 rounded-2xl">
                    FullStack
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-4 p-4 w-full bg-gradient-to-r from-gray-900 to-transparent ">
                    <h2 className="text-xl font-semibold 5 text-gray-50">
                      Pokemons - @Henry
                    </h2>
                    <div className="flex items-center gap-1">
                      <SiReact color="#00bcd4" size={22} />
                      <SiRedux color="#673ab7" size={22} />
                      <SiCss3 color="#00bcd4" size={20} />
                      <SiNodedotjs color="#ffc107" size={22} />
                      <SiExpress color="#673ab7" size={22} />
                      <SiPostgresql color="#3850d6" size={22} />
                      <SiSequelize color="#0097a7" size={22} />
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665278893/pokeapiimg_w9uj58.png"
                  alt="sitting place"
                  className="w-full sm:block hidden mt-1 md:mt-0 h-[275px]"
                />
                <img
                  className="w-full sm:hidden mt-1"
                  src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665278893/pokeapiimg_w9uj58.png"
                  alt="sitting place"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-1 gap-x-1 md:mt-1 mt-1 ">
                <div
                  className="relative mt-1 sm:mt-0 w-full hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() =>
                    window.open("https://jsproject1-carrito.netlify.app/")
                  }
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-teal-500 rounded-2xl">
                      Frontend
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold text-gray-100">
                        Online<br></br> university
                      </h2>
                      <div className="flex items-center gap-1">
                        <SiHtml5 fill="orange" size={20} />
                        <SiJavascript fill="#edd505" size={20} />
                        <SiCss3 color="#00bcd4" size={20} />
                        <GrStorage className="lstorage" size={20} />
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665260743/Screenshot_2022-10-08_at_17-24-24_Carrito_efgnhq.png"
                    className="w-full h-[200px] sm:mt-0 mt-1"
                    alt="img"
                  />
                </div>
                <div
                  className="relative w-full mt-1 sm:mt-0 hover:cursor-pointer contrast-50 hover:contrast-100"
                  onClick={() =>
                    window.open("https://blogdecafegf.netlify.app/")
                  }
                >
                  <div>
                    <p className="md:p-2 p-2 text-xs font-medium leading-3 text-black absolute top-8 right-2 bg-teal-500 rounded-2xl">
                      Frontend
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-900 to-transparent">
                      <h2 className="text-xl font-semibold 5 text-gray-100">
                        Coffee blog
                      </h2>
                      <div className="flex items-center gap-1">
                        <SiHtml5 fill="orange" size={20} />
                        <SiJavascript fill="#edd505" size={20} />
                        <SiCss3 color="#00bcd4" size={20} />
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dyzge4vha/image/upload/v1665281372/Screenshot_2022-10-08_at_23-07-00_BlogDeCaf%C3%A9_foqatp.png"
                    className="w-full h-[200px] sm:mt-0 mt-1"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
