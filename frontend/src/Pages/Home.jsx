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
    <div
      id="home"
      className="flex items-center justify-between px-10 py-10 flex-col md:flex-row bg-gradient-to-r from-[#004e36] via-black to-[#1e3a8a] text-white"
    >
      {/* LEFT SIDE */}
      <motion.div
        id="text"
        className="mt-6 md:w-1/2 pr-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-bold text-2xl md:text-5xl p-5 md:p-7 font-serif">
          Your Journey to <span className="text-green-600">Recovery</span>{" "}
          Starts Here
        </h1>

        <p className="text-xl p-4 md:text-2xl font-light font-mono md:p-6 text-gray-300">
          Experience personalized physiotherapy care with our expert team. We're
          dedicated to helping you achieve optimal health and mobility.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 p-5 mt-4 md:p-6">
          <motion.button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={"/appointment-form"}>Book Your Assessment</Link>{" "}
            <HiArrowLongRight />
          </motion.button>

          <motion.button
            className="px-4 py-2 rounded bg-gray-900 text-blue-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* STATS SECTION */}
        <motion.div
          className="flex gap-2 items-center mt-5 md:mt-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* FIRST CARD */}
          <motion.div
            className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <HiOutlineHeart className="text-green-700" size={36} />
            <h1 className="font-bold text-xl m-2">500+</h1>
            <p className="text-center font-light text-gray-400">
              Happy Patients
            </p>
          </motion.div>

          {/* SECOND CARD */}
          <motion.div
            className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <MdAdminPanelSettings className="text-blue-800" size={36} />
            <h1 className="font-bold text-xl m-2">4+</h1>
            <p className="text-center font-light text-gray-400">Experience</p>
          </motion.div>

          {/* THIRD CARD */}
          <motion.div
            className="bg-gray-950 p-4 md:p-5 flex flex-col items-center rounded-md shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <CiUser className="text-green-700" size={36} />
            <h1 className="font-bold text-xl m-2">90%</h1>
            <p className="text-center font-light text-gray-400">Success Rate</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGES */}
      <motion.div
        id="image"
        className="md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={therapy}
          alt="therapy"
          className="w-full mt-4 rounded-md shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />

        <motion.img
          src={therapy1}
          alt=""
          className="w-full mt-4 rounded-md shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </div>
  );
}

export default Home;
