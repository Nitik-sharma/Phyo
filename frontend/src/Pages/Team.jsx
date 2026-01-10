import React from "react";
import profile from "../images/Profile.jpeg";

function Team() {
  const doctors = [
    {
      name: "Dr. Pankaj",
      role: "Clinic Director & Senior Physiotherapist",
      specialty: "Orthopedic Physiotherapy & Sports Rehabilitation",
      experience: "4+ Years Clinical Experience",
      image: profile,
    },
    {
      name: "Dr. Nisha",
      role: "Senior Physiotherapist",
      specialty: "Orthopedic Physiotherapy & Sports Rehabilitation",
      experience: "4+ Years Clinical Experience",
      image: profile,
    },
  ];

  return (
    <section
      id="team"
      className="bg-neutral-900 text-neutral-200 py-16 px-4"
      aria-label="Physiotherapy clinic expert team"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <span className="inline-block px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm mb-3">
          Our Team
        </span>

        {/* H2 (NOT H1) */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Meet Our{" "}
          <span className="text-green-500">Expert Physiotherapists</span>
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Our licensed and experienced physiotherapists specialize in pain
          management, orthopedic care, and sports rehabilitation to deliver
          safe, effective, and personalized treatment.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {doctors.map((doc, index) => (
            <article
              key={index}
              className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              aria-label={`Physiotherapist ${doc.name}`}
            >
              <img
                src={doc.image}
                alt={`${doc.name}, ${doc.role} at RehabCare Physiotherapy Clinic`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />

              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm text-blue-400">{doc.role}</p>

                <div className="mt-3 space-y-1 text-sm text-neutral-400">
                  <p>
                    <strong>Specialization:</strong> {doc.specialty}
                  </p>
                  <p>
                    <strong>Experience:</strong> {doc.experience}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Careers / Join Team */}
        <div className="bg-neutral-800 border border-neutral-700 mt-10 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-neutral-200 font-semibold text-lg">
            Looking to join our physiotherapy team?
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            We welcome skilled and passionate physiotherapists committed to
            patient-centered rehabilitation care.
          </p>
          <button
            aria-label="Send resume to RehabCare Physiotherapy Clinic"
            className="px-5 py-2 bg-blue-700 hover:bg-blue-600 rounded-md text-white text-sm"
          >
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;
