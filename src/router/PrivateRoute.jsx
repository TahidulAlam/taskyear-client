/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <ThreeCircles
          height="100"
          width="100"
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate state={location.pathname} to="/signin"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
