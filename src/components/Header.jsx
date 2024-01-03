import React from "react";
import RoyalSweets from "../images/Royal Sweets-logos.jpeg";
import { IoIosHome } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className=" max-w-screen my-2 p-4 flex items-center justify-between bg-gray-800 text-gray-200">
      <div className="">
        <img
          className="mx-16 ml-5 sm:h-28 w-36 "
          src={RoyalSweets}
          alt="royal sweets"
        />
      </div>
      <div className="text-xl sm:text-3xl text-amber-100 ml-20">
        <h1>King Street, Southall</h1>
      </div>
      <div className="px-2 sm:px-8">
        <ul className="flex gap-5 font-bold  ">
          <Link
            to="/"
            className="flex hover:underline underline-offset-4 decoration-amber-500 decoration-[5px] ]"
          >
            <IoIosHome className="hidden sm:inline text-2xl hover:text-amber-500 hover:scale-125" />
            <li className="hover:shadow-lg shadow-red-400">Home</li>
          </Link>
          <Link
            to="/about"
            className="flex hover:underline underline-offset-4 decoration-amber-500 decoration-[5px]"
          >
            <BsInfoCircleFill className=" hidden sm:inline text-2xl hover:text-amber-500 hover:scale-110" />
            <li>About</li>
          </Link>
          <Link
            to="/location"
            className="flex hover:underline underline-offset-4 decoration-amber-500 decoration-[5px]"
          >
            <FaLocationDot className="hidden sm:inline text-2xl hover:text-amber-500 hover:scale-110" />
            <li>Location</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
