/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import Switcher from "../shared/Switcher";
import logo from "../../assets/taskyear.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signInOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const navLink = (
    <>
      <li className="hidden lg:block">
        <NavLink to="/">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      {/* <li className="hidden lg:block">
        <NavLink to="/addBook">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Add Book</span>
          )}
        </NavLink>
      </li> */}
      <li className="hidden lg:block">
        <NavLink to="/about">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>About us</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        <NavLink to="/blogs">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Blogs</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        {user && user?.email ? (
          <NavLink to="/dashboard">
            {({ isActive, isPending, isTransitioning }) => (
              <span className={isActive ? "active" : ""}>DashBoard</span>
            )}
          </NavLink>
        ) : (
          " "
        )}
      </li>
      {/* <div className="hover:bg-transparent flex justify-center items-center gap-4">
        <div>
          {user && user?.email ? (
            <button
              className="btn bg-blue-700 text-white"
              onClick={() => signInOut()}
            >
              Sign Out
            </button>
          ) : (
            " "
          )}
        </div>
      </div> */}
    </>
  );
  return (
    <div>
      <div className=" navbar lg:w-[90vw] w-full py-3 mx-auto fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-white/30">
        <div className="flex-none lg:hidden text-slate-950 text-2xl z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
            onClick={handleSidebarToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path> */}
              {isSidebarOpen ? (
                // Your close icon path data
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link to={"/"}>
            {/* <LogoImg width={logowidth}></LogoImg> */}
            <h1 className="text-3xl font-semibold text-[#0000FF]">Taskyear</h1>
            {/* <img className="w-36" src={logo} alt="" /> */}
          </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal flex items-center font-medium gap-2 ">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
