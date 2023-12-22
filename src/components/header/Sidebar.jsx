/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  const navLink = (
    <>
      <li className="text-blue-950 lg:hidden block">
        <NavLink to="/">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      {/* <li className="text-blue-950 lg:hidden block">
        <NavLink to="/addBook">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Add Book</span>
          )}
        </NavLink>
      </li> */}
      <li className="text-blue-950 lg:hidden block">
        <NavLink to="/about">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>About us</span>
          )}
        </NavLink>
      </li>
      <li className="text-blue-950 lg:hidden block">
        <NavLink to="/blogs">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Blogs</span>
          )}
        </NavLink>
      </li>
      <li className="text-blue-950 lg:hidden block">
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
      <div className="hover:bg-transparent flex justify-center items-center gap-4">
        <div>
          {user && user?.email ? (
            <button className="btn bg-blue-700 text-white">Sign Out</button>
          ) : (
            " "
          )}
          {/* <Link to={"/signin"}>
            <button className="btn btn-primary">Signin</button>
          </Link> */}
        </div>
        {/* <Switcher /> */}
      </div>
    </>
  );
  return (
    <div>
      <ul className="mt-20">{navLink}</ul>
    </div>
  );
};

export default Sidebar;
