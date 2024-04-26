import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#7D3C13]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-black ">
            <a href="#home">Home</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#about">About Us</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#shop">Product</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#contact">Contct Us</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#gal">Gallery</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#7D3C13]  text-white">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="https://adsp-temp1-pro.vercel.app/">
                <span className="text-3xl font-bold">Fashionista</span>
                {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                   
                      <a href="#home"> Home</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#shop">Product</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#contact">Contct Us</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#gal">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
