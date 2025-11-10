import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { Link } from 'react-router-dom';

function Navbar() {
    const[open,setOpen]=useState(false)
  return (
    <div className="fixed top-[48px] left-0 w-full  bg-black text-zinc-200 p-4 z-40">
      <div className="flex items-center justify-between bg-black text-zinc-200 p-4 mt-6 md:mt-0">
        {/* logo */}
        <div id="logo" className="flex items-center gap-4 ">
          <div className=" p-3 md:p-4 bg-green-700 rounded-md text-white font-semibold hover:bg-green-500">
            RC
          </div>
          <p className="text-zinc-200 font-normal font-serif">
            RehabCare Clinic
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-start gap-4">
            {["Home", "About", "Team", "Service", "Contact"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="relative list-none font-mono sm:text-sm text-md cursor-pointer group"
                >
                  <a
                    href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  >
                    <span className="relative">
                      {item}
                      <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 
        transition-all duration-300 group-hover:w-full"
                      ></span>
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl 
            hover:bg-blue-700 active:scale-95 transition-all duration-300 
            shadow-md hover:shadow-lg font-semibold"
          >
            Book Your Appointment
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="fixed top-28 right-5 md:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu size={28} />
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-full w-64 bg-black text-white shadow-2xl
          p-6 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <IoMdClose
            size={28}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          {["Home", "About", "Team", "Service", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-green-400 transition"
              onClick={() => setOpen(false)}
            >
              <a
                href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                className="block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl 
          hover:bg-blue-700 active:scale-95 transition-all duration-300 
          shadow-md w-full font-semibold"
        >
          Book Your Appointment
        </button>
      </div>
    </div>
  );
}

export default Navbar