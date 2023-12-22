/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../components/social/Social";
import { isValidEmail, isValidPassword } from "../../utils/validation";
import Swal from "sweetalert2";
import img from "../../assets/taskyear.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
const SignUp = () => {
  const { user, createUser, updateUser } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // console.log(createUser);
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = {
      name,
      email,
    };
    if (isValidEmail(email) && isValidPassword(password)) {
      createUser(email, password).then(async (res) => {
        updateUser(name).then(() => Swal.fire("account create seccessfully"));
        // axiosUser.post("api/users", userInfo);
        // await getToken(user?.email);
        navigate("/dashboard");
      });
    } else {
      if (!isValidEmail(email)) {
        return Swal.fire("invalid email");
      } else if (!isValidPassword(password)) {
        return Swal.fire("plz use strong password");
      } else {
        return Swal.fire("plz use strong password and proper mail");
      }
    }
  };
  return (
    <div>
      <div
        className="relative lg:grid lg:grid-cols-2 min-h-screen
      overflow-hidden"
      >
        <div className="hidden lg:flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img className="w-96" src={img} alt="" />
            <h1 className="font-semibold text-3xl text-center p-10 ">
              Taskyear : Each task must be routed to a final destination.
            </h1>
          </div>
        </div>
        <div className="w-full p-6 m-auto  lg:max-w-xl">
          <Social></Social>
          <div className="flex justify-center items-center gap-4">
            <hr className="w-2/6 border" />
            <h1 className=" text-lg">or</h1> <hr className="w-2/6 border" />
          </div>
          <form className="mt-6" onSubmit={handleCreateUser}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 "
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="Enter your Full Name"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 "
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-gray-500" />
                  ) : (
                    <AiFillEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide  text-white font-medium transition-colors duration-200 transform bg-[#0000FF] dark:bg-[#0000FF]  rounded-md hover:bg-[#0101db]  focus:outline-none focus:bg-gray-600 ">
                Sign Up{" "}
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-[#0000FF] ">
            {" "}
            Already Have an account?{" "}
            <Link
              to={"/signin"}
              className="font-medium text-[#0000FF]  hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
