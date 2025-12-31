import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FiAward, FiClock, FiMapPin } from "react-icons/fi";
import therapy from '../images/first.jpg'
function About() {
  return (
    <div id="about">
      <div className="bg-neutral-900 text-neutral-200 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            {/* Tag */}
            <p className="inline-block px-3 py-1 border border-blue-600 text-blue-300 rounded-lg text-sm mb-4">
              About PhysioCore
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Dedicated to Your{" "}
              <span className="text-green-500">Health & Recovery</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-neutral-400">
              At PhysioCore Clinic, we believe that every patient deserves
              personalized, compassionate care. Our team of experienced
              physiotherapists combines cutting-edge techniques with a holistic
              approach to help you achieve your health and wellness goals.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm">
              {[
                "Evidence-based treatment approaches",
                "Personalized treatment plans",
                "Ongoing patient education",
                "State-of-the-art equipment and facilities",
                "Multidisciplinary team approach",
                "Insurance and direct billing available",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
                <FiAward className="text-2xl mx-auto mb-2 text-blue-400" />
                <p className="font-semibold">Certified Excellence</p>
                <p className="text-xs text-neutral-400">
                  Licensed physiotherapists with advanced certifications
                </p>
              </div>

              <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
                <FiClock className="text-2xl mx-auto mb-2 text-blue-400" />
                <p className="font-semibold">Flexible Hours</p>
                <p className="text-xs text-neutral-400">
                  Morning and evening slots available
                </p>
              </div>

              <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
                <FiMapPin className="text-2xl mx-auto mb-2 text-blue-400" />
                <p className="font-semibold">Convenient Location</p>
                <p className="text-xs text-neutral-400">
                  Easily accessible with ample parking
                </p>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl mt-8 text-sm italic">
              <p className="text-green-400">
                "Our mission is to empower individuals to achieve their optimal
                physical potential through comprehensive, evidence-based
                physiotherapy care."
              </p>
              <p className="mt-2 text-neutral-400">
                — Dr. Pankaj Vats, Clinic Director
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5">
            {/* Image */}
            <img
              src={therapy}
              alt="clinic"
              className="rounded-xl w-full object-cover"
            />

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
                <p className="text-3xl">4+</p>
                <p>Years of Excellence</p>
              </div>

              <div className="bg-blue-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
                <p className="text-3xl">200+</p>
                <p>Successful Treatments</p>
              </div>
            </div>

            {/* Accreditation */}
            <div className="bg-blue-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
              Accredited by the Canadian Physiotherapy Association
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About