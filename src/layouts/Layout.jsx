/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/header/Navbar";
import Sidebar from "../components/header/Sidebar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="drawer max-w-full mx-auto bg-blue-50  font-poppins">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-[90vw] mx-auto">
          <Navbar />
          <div className="mt-16 mb-16 flex flex-col min-h-screen">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full  dark:text-blue-200 bg-blue-50 z-50">
            <Sidebar />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
