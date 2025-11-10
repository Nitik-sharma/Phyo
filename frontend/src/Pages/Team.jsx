import React from 'react'

import profile from '../images/Profile.jpeg'
function Team() {
  const doctors = [
    {
      name: "Dr. Pankaj ",
      role: "Clinic Director & Senior Physiotherapist",
      specialty: "Specialization: Orthopedic Physiotherapy, Sports Rehab",
      experience: "Experience: 12+ Years",
      image: `${profile}`
    },
    {
      name: "Dr.Nisha",
      role: "Senior Physiotherapist",
      specialty: "Specialization: Neuro Physiotherapy",
      experience: "Experience: 10+ Years",
      image: `${profile}`
    },
    {
      name: "Emma Williams",
      role: "Physiotherapist",
      specialty: "Specialization: Women’s Health Physiotherapy, Manual Therapy",
      experience: "Experience: 7+ Years",
      image: `${profile}`
    },
    {
      name: "David Rodriguez",
      role: "Sports Physiotherapist",
      specialty: "Specialization: Sports Physiotherapy, Performance Training",
      experience: "Experience: 9+ Years",
      image: `${profile}`
    }
  ];

  return (
    <div className="bg-neutral-900 text-neutral-200 py-16 px-4" id='team'>
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <p className="inline-block px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm mb-3">
          Our Team
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Meet Our <span className="text-green-500">Expert Team</span>
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Our dedicated team of licensed physiotherapists brings years of experience
          and specialized training to provide you with the highest quality care.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <p className="font-semibold text-lg">{doc.name}</p>
                <p className="text-sm text-blue-400">{doc.role}</p>

                <div className="mt-3 space-y-1 text-sm text-neutral-400">
                  <p>{doc.specialty}</p>
                  <p>{doc.experience}</p>
                </div>

                <button className="mt-4 w-full py-2 border border-green-600 text-green-500 rounded-md hover:bg-green-600 hover:text-white transition text-sm">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team Box */}
        <div className="bg-neutral-800 border border-neutral-700 mt-10 p-6 rounded-xl max-w-2xl mx-auto">
          <p className="text-neutral-200 font-semibold">Looking to join our team?</p>
          <p className="text-neutral-400 text-sm mb-4">
            We're always seeking passionate physiotherapists to join our growing practice.
          </p>
          <button className="px-5 py-2 bg-blue-700 hover:bg-blue-600 rounded-md text-white text-sm">
            Send us your resume
          </button>
        </div>

      </div>
    </div>
  )
}

export default Team