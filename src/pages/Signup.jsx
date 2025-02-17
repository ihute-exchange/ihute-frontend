import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import axios from "axios";
import { RiLoader5Fill } from "react-icons/ri";
import Cookies from "js-cookie";
function Signup() {
  const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_API;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [address, setAddress] = useState("2");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [authing, setAuthing] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthing(true);
    if (password === password2) {
      setErrorPassword("");
      try {
        const response = await axios.post(`${apiUrl}/user/signup`, {
          fullName,
          email,
          password,
          address,
          phoneNumber,
        });
        setAuthing(false);
        // console.log(response.data.jwt)
        Cookies.set("usr", response.data.jwt, {
          expires: 7,
          path: "/",
        });
      } catch (error) {
        setAuthing(false);
        const msg = error.response?.data?.msg || "";
        if (error.response?.status === 401) {
          setErrorEmail(msg);
        } else {
          // console.log(error);
        }
      } finally{
        navigate('/')
      }
    } else {
      setAuthing(false);
      setErrorPassword("Password doesn't match");
    }
  };
  return (
    <>
      <div className="dark:bg-dark-body dark:text-[#f1f1f1] text-lightBlackText dark:bg-lightBlackText w-full h-fit min-h-svh flex flex-col text-sm text-text-color">
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
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <p className="font-medium opacity-70 pb-4 text-sm">
              Hi there, Excited to have you
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-2 w-full h-fit "
          >
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Full Names</h1>
              <input
                required
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                name="name"
                placeholder="E.g. John doe  "
                className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
                id="fullnames"
              />
            </label>
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Email</h1>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="E.g. johndoe@gmail.com"
                className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
                id="email"
              />
            </label>
            {errorEmail !== "" && (
              <p className="text-xs text-red-600">{errorEmail}</p>
            )}
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Address</h1>
              <input
                required
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="address"
                placeholder="E.g. Kigali, Rwanda"
                className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
                id="address"
              />
            </label>
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Phone Number</h1>
              <input
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                name="phone"
                placeholder="+250"
                className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
                id="phone"
              />
            </label>
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Password</h1>
              <div className="w-full h-fit relative">
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 pr-12 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
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
            {errorPassword !== "" && (
              <p className="text-xs text-red-600">{errorPassword}</p>
            )}
            <label className="w-full">
              <h1 className="mb-2 font-semibold">Comfirm Password</h1>
              <div className="w-full h-fit relative">
                <input
                  required
                  onChange={(e) => setPassword2(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password again"
                  className="w-full h-[40px] ring-1 ring-lightCardStrongGrayBg dark:ring-[#333] p-4 pr-12 focus:ring-2 bg-white focus:ring-mainColor outline-none rounded-md placeholder:text-text-color/40 dark:bg-[#2f2f2f] dark:ring-transparent dark:placeholder:text-[#5f5f5f] dark:text-[#f1f1f1] "
                  id="confirm_ps"
                />
              </div>
            </label>
            {errorPassword !== "" && (
              <p className="text-xs text-red-600">{errorPassword}</p>
            )}
            <label className="w-full mt-5">
              <button
                type="submit"
                title="Login"
                className={`w-full h-[40px] bg-mainColor  text-white rounded-md font-semibold flex items-center justify-center gap-1 transition select-none ${
                  authing ? "pointer-events-none opacity-75" : ""
                }`}
              >
                {authing ? (
                  <div className="flex items-center gap-1">
                    <RiLoader5Fill className="text-2xl animate-LoaderFast" />
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <p>Sign Up</p>
                  </div>
                )}
              </button>
            </label>
            <div className="flex items-center justify-center w-full py-4 gap-1 max-sm:flex-col">
              <h1>Allready registered? </h1>
              <Link
                to="/login"
                className="text-mainColor font-medium w-fit flex items-center gap-1 "
              >
                Login <MdArrowOutward />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
