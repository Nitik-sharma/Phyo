import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import therapy from "../images/therapists.jpg";
import therapy1 from "../images/first.jpg";
import { HiOutlineHeart } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-between px-10 py-10 flex-col md:flex-row 
      bg-gradient-to-r from-[#004e36] via-black to-[#1e3a8a] text-white"
      aria-label="RehabCare Physiotherapy Clinic Home"
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="mt-6 md:w-1/2 pr-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* ✅ ONE & ONLY H1 */}
        <h1 className="font-bold text-2xl md:text-5xl p-5 md:p-7 font-serif">
          RehabCare Physiotherapy Clinic – Your Journey to{" "}
          <span className="text-green-600">Recovery</span> Starts Here
        </h1>

        <p className="text-xl p-4 md:text-2xl font-light font-mono md:p-6 text-gray-300">
          Experience personalized physiotherapy and rehabilitation care from
          certified professionals focused on pain relief, mobility improvement,
          and long-term recovery.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 p-5 mt-4 md:p-6">
          <motion.button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Book physiotherapy appointment at RehabCare Clinic"
          >
            <Link to="/appointment-form">Book Physiotherapy Assessment</Link>
            <HiArrowLongRight />
          </motion.button>

          <motion.button
            className="px-4 py-2 rounded bg-gray-900 text-blue-400 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about RehabCare Physiotherapy Clinic"
          >
            Learn More
          </motion.button>
        </div>

        {/* STATS (NO H1 HERE ❌) */}
        <motion.div
          className="flex gap-2 items-center mt-5 md:mt-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <article className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md">
            <HiOutlineHeart className="text-green-700" size={36} />
            <h3 className="font-bold text-xl m-2">500+</h3>
            <p className="text-center text-gray-400">Patients Treated</p>
          </article>

          <article className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md">
            <MdAdminPanelSettings className="text-blue-800" size={36} />
            <h3 className="font-bold text-xl m-2">4+ Years</h3>
            <p className="text-center text-gray-400">Clinical Experience</p>
          </article>

          <article className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md">
            <CiUser className="text-green-700" size={36} />
            <h3 className="font-bold text-xl m-2">High</h3>
            <p className="text-center text-gray-400">Patient Satisfaction</p>
          </article>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGES */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={therapy}
          alt="Physiotherapist providing rehabilitation treatment to patient"
          className="w-full mt-4 rounded-md shadow-md"
          loading="lazy"
        />

        <motion.img
          src={therapy1}
          alt="Modern physiotherapy clinic treatment session"
          className="w-full mt-4 rounded-md shadow-md"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

export default Home;
