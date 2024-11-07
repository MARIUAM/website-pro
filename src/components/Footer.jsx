import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Clockwork Elegance</h1>
          <p className=" text-sm">
          Tick-Tock, It’s Time for Something New!
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              latest
            </a>
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              watch
            </a>
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">watch</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              latest watch
            </a>
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              Premium watch
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              Clockwork Elegance@email.com
            </a>
            <a
              className=" hov  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              +0876532299
            </a>
            <a
              className="  hover:text-orange-500 transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
             Developed By
            <span className=" text-orange-500"> Maryam Saleem </span> |
            Tik Tok Tik 
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
