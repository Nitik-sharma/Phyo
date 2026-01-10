import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiAward, FiClock, FiMapPin } from "react-icons/fi";
import therapy from "../images/first.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-neutral-900 text-neutral-200 py-16 px-4"
      aria-label="About RehabCare Physiotherapy Clinic"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <article>
          {/* Tag */}
          <span className="inline-block px-3 py-1 border border-blue-600 text-blue-300 rounded-lg text-sm mb-4">
            About RehabCare Clinic
          </span>

          {/* H2 (NOT H1) */}
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Dedicated to Your{" "}
            <span className="text-green-500">Health & Recovery</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-neutral-400">
            RehabCare Physiotherapy Clinic is committed to delivering
            personalized, evidence-based physiotherapy and rehabilitation care.
            Our experienced team focuses on pain management, mobility
            improvement, and long-term functional recovery in a safe and
            supportive environment.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm">
            {[
              "Evidence-based physiotherapy treatments",
              "Personalized rehabilitation programs",
              "Patient education and injury prevention",
              "Modern equipment and therapy techniques",
              "Multidisciplinary clinical approach",
              "Insurance and direct billing support",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
              <FiAward className="text-2xl mx-auto mb-2 text-blue-400" />
              <p className="font-semibold">Certified Professionals</p>
              <p className="text-xs text-neutral-400">
                Licensed physiotherapists with advanced training
              </p>
            </div>

            <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
              <FiClock className="text-2xl mx-auto mb-2 text-blue-400" />
              <p className="font-semibold">Flexible Appointments</p>
              <p className="text-xs text-neutral-400">
                Morning and evening sessions available
              </p>
            </div>

            <div className="border border-neutral-700 bg-neutral-800 p-4 rounded-xl text-center">
              <FiMapPin className="text-2xl mx-auto mb-2 text-blue-400" />
              <p className="font-semibold">Accessible Location</p>
              <p className="text-xs text-neutral-400">
                Easily reachable physiotherapy clinic
              </p>
            </div>
          </div>

          {/* MISSION QUOTE */}
          <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl mt-8 text-sm italic">
            <p className="text-green-400">
              “Our mission is to empower patients to improve mobility, reduce
              pain, and enhance quality of life through ethical and
              evidence-based physiotherapy care.”
            </p>
            <p className="mt-2 text-neutral-400">
              — Dr. Pankaj Vats, Clinic Director
            </p>
          </div>
        </article>

        {/* RIGHT CONTENT */}
        <aside className="flex flex-col gap-5">
          {/* Image */}
          <img
            src={therapy}
            alt="Physiotherapist providing rehabilitation treatment at RehabCare Clinic"
            className="rounded-xl w-full object-cover"
            loading="lazy"
          />

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
              <p className="text-3xl">4+</p>
              <p>Years of Clinical Experience</p>
            </div>

            <div className="bg-blue-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
              <p className="text-3xl">200+</p>
              <p>Patients Treated</p>
            </div>
          </div>

          {/* ACCREDITATION */}
          <div className="bg-blue-600 text-neutral-100 p-5 rounded-xl text-center font-semibold">
            Recognized & Accredited Physiotherapy Practice
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
