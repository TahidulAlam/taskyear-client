/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/taskyear.png";
const Footer = () => {
  return (
    <div>
      <section className="flex flex-col lg:justify-end font-poppins">
        <div className="w-full bg-blue-50 pt-11 ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div className="flex items-center justify-center pb-3 border-b border-gray-300  lg:justify-between">
              <div className="hidden mr-12 lg:block">
                <span className="text-gray-700 dark:text-gray-400">
                  Get connected with us
                </span>
              </div>
              <div className="flex justify-center ">
                <Link
                  to={"/"}
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                  </svg>
                </Link>
                <Link
                  to={"/"}
                  className="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" w-5 h-5 bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap py-10 -mx-3">
              <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
                <img src={logo} className="w-24" alt="" />
                <p className="text-base font-normal leading-6 lg:w-64 dark:text-gray-400">
                  Taskyear is a revolutionary task Management website that
                  celebrates its first-year milestone today.
                </p>
              </div>
              <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                <ul>
                  <li className="mb-4">
                    <Link
                      to={"/"}
                      className="inline-block text-base font-normal dark:text-gray-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to={"/"}
                      className="inline-block text-base font-normal dark:text-gray-400"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="inline-block text-base font-normal dark:text-gray-400">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
                <h2 className="mb-4 text-lg font-bold ">Newsletter</h2>
                <div className="flex flex-wrap">
                  <div className="w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0">
                    <input
                      type="email "
                      className="inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-100 border rounded-md dark:placeholder-gray-400 dark:text-gray-400  dark:bg-gray-100"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="w-full py-1 lg:w-auto lg:py-0">
                    <Link
                      to={"/"}
                      className="inline-block w-full px-5 py-4 font-medium leading-4 text-center bg-blue-800 
                      text-white rounded-md  hover:bg-blue-300"
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-center bg-blue-800  text-gray-50">
            <span>© Copyright 2023 . All Rights Reserved</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
