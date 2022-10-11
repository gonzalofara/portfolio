import React from "react";
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
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import "./Languages.css";

const Languages = () => {
  return (
    <div className="bg-gray-900 w-full mx-auto grid content-center">
      <h2 className="text-medium mb-4 text-center underline text-gray-100">
        Programming languages & libraries
      </h2>
      <div className="mx-auto lg:flex lg:gap-1 md:grid md:grid-cols-10 grid grid-cols-5 gap-2 items-center">
        <SiHtml5 color="#ff6900" size={40} />
        <SiJavascript color="#ffc107" size={40} />
        <SiCss3 color="#00bcd4" size={40} />
        <SiReact color="#00bcd4" size={40} />
        <SiRedux color="#673ab7" size={40} />
        <SiJsonwebtokens color="#e91e63" size={40} />
        <SiLeaflet color="#8bc34a" size={40} />
        <SiWechat color="#7bdcb5" size={40} />
        <SiStripe color="#03a9f4" size={40} />
        <SiAuth0 color="#ff9800" size={40} />
        <SiPaypal color="#4fc3f7" size={40} />
        <GrStorage className="lstorage" size={40} />
        <SiTailwindcss color="#00bcd4" size={40} />
        <SiMaterialui color="#004dcf" size={40} />
        <SiNodedotjs color="#ffc107" size={40} />
        <SiTypescript color="#00bcd4" size={40} />
        <SiExpress color="#673ab7" size={40} />
        <SiPostgresql color="#3850d6" size={40} />
        <SiSequelize color="#0097a7" size={40} />
        <SiMinutemailer color="#8bc34a" size={40} />
      </div>
    </div>
  );
};

export default Languages;
