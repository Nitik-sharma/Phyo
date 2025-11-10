import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function Service() {
  return (
    <div id="service" className=" bg-zinc-950 text-white">
      <div className=" flex items-center flex-col ">
        {/* Our service logo  */}
        <div className="  border border-green-700 rounded-md mt-6 mb-2">
          <h1 className=" p-1 text-xs font-mono text-green-700">Our service</h1>
        </div>
        {/* Line tag */}
        <h1 className="text-2xl md:text-3xl font-sans">
          Comprehensive{" "}
          <span className=" text-blue-500 ">Healthcare Solutions</span>
        </h1>
        {/* paragra[h] */}
        <p className=" text-gray-500 p-2 ">
          We offer a full range of physiotherapy services tailored to your
          specific needs, from injury recovery to performance enhancement.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {/* Card 1 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaHandHoldingMedical className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold">Manual Therapy</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Hands-on treatment techniques to improve mobility and reduce pain
            through joint mobilization and soft tissue manipulation.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Joint Mobilization</li>
            <li>• Soft Tissue Release</li>
            <li>• Trigger Point Therapy</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <GiStrong className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold">Exercise Therapy</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Customized exercise programs to improve strength, mobility, and
            restore functional movement.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Strength Training</li>
            <li>• Flexibility Programs</li>
            <li>• Functional Movement</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <TbDeviceHeartMonitor className="text-teal-400 text-2xl" />
            <h3 className="text-xl font-semibold">Electrotherapy</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Advanced electrical stimulation to accelerate healing and reduce
            pain.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• TENS Therapy</li>
            <li>• Ultrasound</li>
            <li>• Electrical Stimulation</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaRunning className="text-cyan-400 text-2xl" />
            <h3 className="text-xl font-semibold">Sports Rehabilitation</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Specialized treatment for sports injuries and safe return to
            athletic performance.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Injury Prevention</li>
            <li>• Performance Enhancement</li>
            <li>• Return to Sport</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold">Group Classes</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Therapeutic group sessions focusing on fitness and mobility goals.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Pilates Classes</li>
            <li>• Balance Training</li>
            <li>• Arthritis Support</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="bg-neutral-900 border border-neutral-400 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <MdOutlineHealthAndSafety className="text-blue-400 text-2xl" />
            <h3 className="text-xl font-semibold">Assessment & Diagnosis</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">
            Comprehensive assessments to identify issues and plan treatments.
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>• Movement Analysis</li>
            <li>• Posture Assessment</li>
            <li>• Pain Evaluation</li>
          </ul>
        </div>
      </div>
      <div className=' flex items-center justify-center p-5'>
        <div className=" border border-green-600 rounded-lg flex flex-col items-center bg-gradient-to-r  from-green-900 via-zinc-800 to-blue-900 ">
          <h1 className=' font-bold  p-1'>Not sure which service you need?</h1>
          <p className='p-1 md:p-2 text-gray-500   text-xs'>
            Our experts will assess your condition and recommend the best
            treatment plan.
          </p>
          <p className=' text-green-500 font-bold p-1'>Book a free consultation today!</p>
        </div>
      </div>
    </div>
  );
}

export default Service