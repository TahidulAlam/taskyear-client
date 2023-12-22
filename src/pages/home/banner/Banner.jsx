/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/taskyear.png";
import imgBn from "../../../assets/taskyearBannerImg.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Banner = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white rounded-lg">
        <div>
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-[400px]" src={img} alt="" />
            <h1 className="font-semibold text-3xl text-center py-10">
              Each task must be routed to a final destination.
            </h1>
            {user && user?.email ? (
              <Link to={"dashboard"}>
                <button className="btn btn-outline">Let's Explore</button>
              </Link>
            ) : (
              <Link to={"signin"}>
                <button className="btn btn-outline">Let's Explore</button>
              </Link>
            )}
            {/* <div className=""></div> */}
          </div>
        </div>
        <div className="">
          <img src={imgBn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
