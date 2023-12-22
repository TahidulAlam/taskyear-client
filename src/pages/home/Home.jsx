/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./banner/Banner";
import Category from "./category/Category";

const Home = () => {
  return (
    <div>
      <div className="lg:mt-10 mt-7">
        <Banner />
      </div>
      <div className="lg:mt-10 mt-7">
        <h1 className="font-bold text-center text-lg p-10 text-blue-700">
          Very useful for whom..
        </h1>
        <Category />
      </div>
    </div>
  );
};

export default Home;
