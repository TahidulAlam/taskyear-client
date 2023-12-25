/* eslint-disable no-unused-vars */
import React from "react";
import { ImGoogle3 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const handleSocialSignIn = async (media) => {
    media()
      .then(async (result) => {
        // const userInfo = {
        //   email: result?.user?.email,
        //   name: result?.user?.displayName,
        // };
        // axiosUser.post("api/users", userInfo);
        // await getToken(user?.email);
        Swal.fire("Sign In seccessfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => Swal.fire("invalid input"));
  };
  return (
    <div>
      <div className=" flex justify-center items-center gap-3 p-5">
        {pathname === "/signin" ? (
          <h1 className=" text-sky-950 font-semibold"> Sign in with </h1>
        ) : (
          <h1 className=" text-sky-950 font-semibold"> Sign up with </h1>
        )}

        <div className="flex justify-center items-center gap-3">
          <button
            className="rounded-full hover:bg-slate-200 text-[#0000FF]  dark:hover:bg-slate-200"
            onClick={() => handleSocialSignIn(signInWithGoogle)}
          >
            <ImGoogle3 className="text-5xl  rounded-full " />
          </button>
          <div className="divider lg:divider-horizontal">OR</div>
          <button
            className="rounded-full hover:bg-slate-200 text-[#0000FF]  dark:hover:bg-slate-200"
            onClick={() => handleSocialSignIn(signInWithGithub)}
          >
            <VscGithub className="text-5xl  rounded-full " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social;
