/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/taskyear.png";
const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <img src={logo} className="w-[350px]" alt="" />
        <p className="text-base font-normal leading-6 lg:w-64 text-black text-center">
          Taskyear is a revolutionary task Management website that celebrates
          its first-year milestone today.
        </p>
      </div>
    </div>
  );
};

export default About;
