/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/taskyear.png";
const Dashboard = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(
    window.innerWidth <= 768
  );
  const { user, logOut } = useAuth();
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsTabletOrMobile(isMobile);
      if (isMobile) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 grid-cols-none">
        <div className="lg:col-span-2">
          {isTabletOrMobile && (
            <button className="p-5 fixed" onClick={toggleSidebar}>
              {showSidebar ? (
                <CgClose className="text-3xl" />
              ) : (
                <CgMenuLeftAlt className="text-3xl" />
              )}
            </button>
          )}

          {showSidebar && (
            <div
              className={`fixed top-0 left-0 h-screen w-auto bg-white shadow-lg z-50 transition-transform transform duration-500 ease-in-out ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="px-6 py-4 top-0 left-0 h-screen bg-slate-100 sidebar-content">
                <div className="flex justify-center items-center gap-2">
                  <img className="w-36" src={logo} alt="" />
                  <br />
                  {isTabletOrMobile && (
                    <button className="lg:hidden block" onClick={closeSidebar}>
                      <CgClose className="text-3xl" />
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center flex-col gap-5 py-5">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center">
                    {user?.displayName}
                  </h2>
                </div>
                <div className="px-2 md:px-0 lg:py-6 py-3 space-y-2 md:space-y-0 md:space-x-2 lg:text-xl text-base font-medium text-black flex flex-col justify-between h-[65%]">
                  <ul className=" rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap  text-start">
                    {/* <li className="py-1 px-2 hover:bg-slate-300 rounded-lg">
                      <NavLink to={"newTask"}>Create New Task</NavLink>
                    </li> */}
                    {/* <li className="py-1 px-2 hover:bg-slate-300 rounded-lg">
                      <NavLink to={"oldtask"}>Previous Task</NavLink>
                    </li> */}
                    <li className="py-1 px-2 hover:bg-slate-300 rounded-lg">
                      <NavLink
                        to={"/"}
                        className=" py-2 rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap text-start"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="py-1 px-2 hover:bg-slate-300 rounded-lg">
                      <NavLink
                        to={"/about"}
                        className=" py-2 rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap text-start"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="py-1 px-2 hover:bg-slate-300 rounded-lg">
                      <NavLink
                        to={"/blog"}
                        className=" py-2 rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap text-start"
                      >
                        Blog
                      </NavLink>
                    </li>

                    {/* <NavLink
                      to={"/petlisting"}
                      className=" py-2 rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap text-start"
                    >
                      About
                    </NavLink>
                    <NavLink
                      to={"/donation"}
                      className=" py-2 rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap text-start"
                    >
                      Blog
                    </NavLink> */}
                  </ul>
                  <button
                    className="btn flex justify-center items-center gap-5 bg-blue-700 text-white rounded-lg  py-2"
                    onClick={() => logOut()}
                  >
                    Sign Out <FaSignOutAlt />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <main className="lg:col-span-10">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
