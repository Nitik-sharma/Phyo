import React from "react";
import { CiPhone, CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-green-600 text-gray-200 m-0 p-0"
      aria-label="Clinic contact information"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-3 px-4 text-sm sm:text-base">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
          {/* Phone */}
          <p className="flex items-center gap-1 justify-center">
            <CiPhone />
            <a
              href="tel:9034107746"
              aria-label="Call RehabCare Physiotherapy Clinic"
              className="hover:underline"
            >
              9034107746
            </a>
          </p>

          {/* Address */}
          <address className="not-italic flex items-center gap-1 justify-center">
            <CiLocationOn />
            <span>18,Yadav Market,Dhanwapur Road,Laxman Vhiar,Gurugram</span>
          </address>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-right">
          <p>
            <strong>Mon–Fri:</strong> 8AM–6PM | <strong>Sat:</strong> 9AM–2PM
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
