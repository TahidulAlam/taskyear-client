/* eslint-disable no-unused-vars */
import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { FcBusinessman } from "react-icons/fc";
import { BsBank2 } from "react-icons/bs";
import { GiFrankensteinCreature } from "react-icons/gi";
const Category = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <MdDeveloperMode />
          <h1>Developers</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <GiTeacher />
          <h1>Teachers</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <PiStudentFill />
          <h1>Students</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <FcBusinessman />
          <h1 className="whitespace-break-spaces text-center">
            Corporate professionals
          </h1>
        </div>
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <BsBank2 />
          <h1>Bankers</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg text-xl flex justify-center items-center gap-3 py-12 flex-wrap">
          <GiFrankensteinCreature />
          <h1 className="whitespace-break-spaces text-center">
            Content Creators
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
