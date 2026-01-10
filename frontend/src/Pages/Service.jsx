import React from "react";
import { FaHandHoldingMedical, FaRunning, FaUsers } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function Service() {
  return (
    <section
      id="service"
      className="bg-zinc-950 text-white"
      aria-label="Physiotherapy services offered by RehabCare Clinic"
    >
      {/* SECTION HEADER */}
      <div className="flex items-center flex-col text-center px-4">
        <div className="border border-green-700 rounded-md mt-6 mb-2">
          <span className="p-1 text-xs font-mono text-green-700">
            Our Services
          </span>
        </div>

        {/* ✅ H2 (NOT H1) */}
        <h2 className="text-2xl md:text-3xl font-sans">
          Comprehensive{" "}
          <span className="text-blue-500">
            Physiotherapy & Rehabilitation Services
          </span>
        </h2>

        <p className="text-gray-500 p-2 max-w-3xl">
          RehabCare Clinic offers a full range of professional physiotherapy
          services designed to relieve pain, restore mobility, and support
          long-term recovery for patients of all ages.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Service 1 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaHandHoldingMedical className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Manual Therapy & Pain Management
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Hands-on physiotherapy techniques to reduce pain, improve joint
            mobility, and enhance soft tissue function.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Joint Mobilization</li>
            <li>• Soft Tissue Release</li>
            <li>• Trigger Point Therapy</li>
          </ul>
        </article>

        {/* Service 2 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <GiStrong className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Exercise Therapy & Strength Training
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Personalized exercise programs to improve strength, flexibility,
            posture, and overall functional movement.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Strength Training</li>
            <li>• Flexibility Programs</li>
            <li>• Functional Movement Training</li>
          </ul>
        </article>

        {/* Service 3 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <TbDeviceHeartMonitor className="text-teal-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Electrotherapy & Pain Relief
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Advanced electrotherapy techniques to accelerate healing and
            effectively manage acute and chronic pain.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• TENS Therapy</li>
            <li>• Ultrasound Therapy</li>
            <li>• Electrical Stimulation</li>
          </ul>
        </article>

        {/* Service 4 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaRunning className="text-cyan-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Sports Injury Rehabilitation
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Specialized physiotherapy care for sports injuries with a focus on
            safe recovery and return to performance.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Injury Prevention</li>
            <li>• Performance Rehabilitation</li>
            <li>• Return-to-Sport Programs</li>
          </ul>
        </article>

        {/* Service 5 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Group Physiotherapy Programs
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Therapeutic group sessions focused on improving mobility, balance,
            and overall fitness.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Pilates & Core Training</li>
            <li>• Balance & Stability Exercises</li>
            <li>• Arthritis Support Programs</li>
          </ul>
        </article>

        {/* Service 6 */}
        <article className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <MdOutlineHealthAndSafety className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold">
              Physiotherapy Assessment & Diagnosis
            </h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Comprehensive physiotherapy assessments to identify the root cause
            of pain and create personalized treatment plans.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Movement & Gait Analysis</li>
            <li>• Posture Evaluation</li>
            <li>• Pain & Function Assessment</li>
          </ul>
        </article>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center p-6">
        <div
          className="border border-green-600 rounded-lg flex flex-col items-center 
        bg-gradient-to-r from-green-900 via-zinc-800 to-blue-900 p-4 text-center"
        >
          <h3 className="font-bold">
            Not sure which physiotherapy service you need?
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Our experienced physiotherapists will assess your condition and
            recommend the most suitable treatment plan.
          </p>
          <p className="text-green-500 font-bold mt-2">
            Book a consultation today
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
