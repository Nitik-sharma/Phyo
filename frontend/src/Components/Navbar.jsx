import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import Modal from "../Pages/Modal";
import AppointmentForm from "../Pages/AppointmentForm";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <nav
      className="fixed top-[48px] left-0 w-full bg-black text-zinc-200 p-4 z-40"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between bg-black text-zinc-200 p-4 mt-6 md:mt-0">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-4"
          aria-label="RehabCare Physiotherapy Clinic Home"
        >
          <div className="p-3 md:p-4 bg-green-700 rounded-md text-white font-semibold hover:bg-green-500">
            RC
          </div>
          <span className="text-zinc-200 font-normal font-serif">
            RehabCare Clinic
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-start gap-4">
            {["Home", "About", "Team", "Service", "Contact"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="relative list-none font-mono sm:text-sm text-md group"
                >
                  <a
                    href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                    className="cursor-pointer"
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
            onClick={() => setFormOpen(true)}
            aria-label="Book physiotherapy appointment at RehabCare Clinic"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl 
            hover:bg-blue-700 active:scale-95 transition-all duration-300 
            shadow-md hover:shadow-lg font-semibold"
          >
            Book Physiotherapy Appointment
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="fixed top-28 right-5 md:hidden cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open mobile navigation menu"
        >
          <RxHamburgerMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-full w-64 bg-black text-white shadow-2xl
        p-6 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close mobile navigation"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          {["Home", "About", "Team", "Service", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                className="block hover:text-green-400 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setFormOpen(true)}
          aria-label="Book physiotherapy assessment"
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl 
          hover:bg-blue-700 active:scale-95 transition-all duration-300 
          shadow-md w-full font-semibold"
        >
          Book Physiotherapy Assessment
        </button>
      </div>

      {/* Appointment Modal */}
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <AppointmentForm />
      </Modal>
    </nav>
  );
}

export default Navbar;
