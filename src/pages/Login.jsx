import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import axios from "axios";
import { RiLoader5Fill } from "react-icons/ri";
import Cookies from "js-cookie";

function Login() {
  const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_API;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [authing, setAuthing] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthing(true);

    try {
      const response = await axios.post(`${apiUrl}/user/login`, {
        email,
        password,
      });
      setAuthing(false);
      // console.log(response.data.jwt)
      Cookies.set("usr", response.data.jwt, {
        expires: 7,
        path: "/",
      });
      setTimeout(() => {
        navigate("/");
      }, 200);
    } catch (error) {
      setAuthing(false);
      if (error.status === 403) {
        setErrorEmail("incorrect cridentials, try again!");
      }
      // console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Login - Upfront";
  }, []);
  return (
    <>
      <div className=" w-full h-fit min-h-svh flex flex-col text-sm dark:bg-[#111] text-lightBlackText dark:text-[#f1f1f1] ">
        {/* topbar */}
        <div className="w-full p-10 max-md:p-4 ">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="w-fit h-fit">
              <img src={"./logo.png"} className="h-9" loading="lazy" />
            </div>
            <h1 className="font-semibold text-2xl leading-[18px]">
              ihute <br />{" "}
              <span className="text-sm opacity-7 0 font-normal">
                Truck Booking
              </span>
            </h1>
          </Link>
        </div>
        {/* form */}
        <div className="w-full max-w-[400px] p-5 mx-auto h-full flex-1 flex flex-col items-start justify-center gap-2">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="font-medium opacity-70 pb-4 text-sm">
              Hi, Welcome back!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-2 w-full h-fit "
          >
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Email</h1>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                autoComplete="on"
                placeholder="E.g. johndoe@gmail.com"
                className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 focus:ring-2 focus:ring-mainColor dark:bg-[#282828] rounded-md placeholder:text-text-color/40 outline-none "
                id="email"
              />
            </label>
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Password</h1>
              <div className="w-full h-fit relative">
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 pr-12 focus:ring-2 focus:ring-mainColor dark:bg-[#282828] rounded-md placeholder:text-text-color/40 outline-none"
                  name="ps"
                  id="ps"
                />
                <div
                  onClick={handleShowPassword}
                  className=" absolute top-0 bottom-0 right-3 m-auto text-xl w-fit h-fit p-1 opacity-70 cursor-pointer select-none"
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </div>
              </div>
            </label>
            {errorEmail !== "" && (
              <p className="text-xs text-red-600 ">{errorEmail}</p>
            )}
            <div className="flex items-center justify-end w-full py-1">
              <Link
                to="/forgotPassword"
                className="text-mainColor font-medium w-fit outline-none"
              >
                Forgot password?
              </Link>
            </div>
            <label className="w-full mt-1">
              <button
                type="submit"
                title="Login"
                className={`w-full h-[40px] bg-mainColor hover:bg-mainColor-hover text-white rounded-md font-semibold flex items-center justify-center gap-1 transition select-none outline-none ${
                  authing ? "pointer-events-none opacity-75" : ""
                }`}
              >
                {authing ? (
                  <div className="flex items-center gap-1">
                    <RiLoader5Fill className="text-2xl animate-LoaderFast " />
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <p>Login</p>
                  </div>
                )}
              </button>
            </label>
            <div className="flex items-center justify-center w-full py-4 gap-1 max-sm:flex-col">
              <h1>Not registered yet? </h1>
              <Link
                to="/signup"
                className="text-mainColor font-medium w-fit flex items-center gap-1 outline-none "
              >
                Create an account <MdArrowOutward />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
