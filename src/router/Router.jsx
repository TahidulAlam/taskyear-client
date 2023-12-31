/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import DashBoardHome from "../pages/dashboard/dashboardHome/DashBoardHome";
import About from "../pages/home/about/About";
import Blogs from "../pages/home/blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import TaskBoard from "../pages/dashboard/dashboardHome/taskboard/TaskBoard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {/* <DashBoardHome /> */}
            <TaskBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
