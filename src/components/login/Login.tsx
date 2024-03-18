import React, { useState } from 'react';
import Logo from "../../assets/img/3Dlogo.svg";
import Google from "../../assets/img/google.png";
import  check from "../../assets/img/checkbox.svg";
import  user from "../../assets/img/user.svg";
import  email from "../../assets/img/sms.svg";
import  pass from "../../assets/img/lock.svg";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? 'password' : 'text');
  };

  return (
    <>
      <section className="pt-10">
        <div className="container mx-auto">
          <div className="login max-w-[375px] mx-auto px-5 md:px-0">
            <div className="grid grid-cols-12 gap-3 w-[100%]">
              <div className="col-span-12">
                <img src={Logo} alt="Logo" className="text-center mx-auto mb-10" width={100} height={88}/>
                <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-semibold mb-1">Log In</h1>
                <p className="text-[#9CA3AF] mb-5"> Create your account to get started </p>
                <form className="">
                  <div className="mb-5 flex relative">
                    <img src={user} alt="user" className="absolute z-2 left-[10px] top-[14px]"/>
                    <input type="text" id="name" className=" bg-[#21252A] h-[48px] ps-[40px] border border-[#374151] text-[#9CA3AF] text-sm rounded-lg focus:ring-[#374151] focus:bg-[#21252A] focus:border-[#374151] block w-full p-2.5" placeholder="Your Name" required />
                  </div>
                  <div className="mb-5 flex relative">
                    <img src={email} alt="email" className="absolute z-2 left-[10px] top-[14px]"/>
                    <input type="email" id="email" className="bg-[#21252A] h-[48px] ps-[40px] border border-[#374151] text-[#9CA3AF] text-sm rounded-lg focus:ring-[#374151] focus:bg-[#21252A] focus:border-[#374151] block w-full p-2.5" required placeholder="Email"/>
                  </div>
                  {/* <div className="mb-5 flex relative">
                    <img src={pass} alt="pass" className="absolute z-2 left-[10px] top-[14px]"/>
                    <FaRegEye className="absolute z-2 right-[10px] top-[15px] text-[#9CA3AF]"/>
                    <FaRegEyeSlash className="absolute z-2 right-[10px] top-[15px] text-[#9CA3AF]"/>
                    <input type="password" id="password" className="bg-[#21252A] h-[48px] ps-[40px] border border-[#374151] text-[#9CA3AF] text-sm rounded-lg focus:ring-[#374151] focus:bg-[#21252A] focus:border-[#374151] block w-full p-2.5" required placeholder="Password"/>
                  </div> */}
                  <div className="mb-5 flex relative">
      <img src={pass} alt="pass" className="absolute z-2 left-[10px] top-[14px]"/>
      {passwordVisible ? (
        <FaRegEyeSlash
          onClick={togglePasswordVisibility}
          className="absolute z-2 right-[10px] top-[15px] text-[#9CA3AF] cursor-pointer"
        />
      ) : (
        <FaRegEye
          onClick={togglePasswordVisibility}
          className="absolute z-2 right-[10px] top-[15px] text-[#9CA3AF] cursor-pointer"
        />
      )}
      <input
        type={inputType}
        id="password"
        className="bg-[#21252A] h-[48px] ps-[40px] border border-[#374151] text-[#9CA3AF] text-sm rounded-lg focus:ring-[#374151] focus:bg-[#21252A] focus:border-[#374151] block w-full p-2.5"
        required
        placeholder="Password"
      />
    </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-6 relative">
                      <input  id="red-checkbox" type="checkbox" value="" className="custom-checkbox bg-gray-100 border-gray-300 rounded focus:ring-0 "/>
                      <div className="bg-[#FFFFFF] checked-check absolute">
                        <img src={check} alt="checkbox"/>
                      </div>
                    </div>
                    <label className="ms-2 text-sm text-[#FFFFFF] h-6">I agree to terms & conditions</label>
                  </div>
                  <button type="submit" className="text-white h-[48px]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center btn-primary mb-4">Create an account</button>
                  <div className="sign_in mb-10">
                    <p className="text-[#ffffff] text-sm text-center mb-5">Already have an account? <Link to="/home" className="text-[#04C1F6]">Sign in</Link> </p>
                    <button type="submit" className="border-[#E5E5E5] flex items-center justify-center text-[#374151] h-[48px] bg-[#ffffff] focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center btn-primary-outline mb-4"><img src={Google} height="20" width="20" alt="google" className="me-2"/>Google</button>
                  </div>                 
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>   
      </section>
    </>
  );
}

export default Login;
