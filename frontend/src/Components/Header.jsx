import React from "react";
import { CiPhone, CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-green-600 text-gray-200 m-0 p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-3 px-4 text-sm sm:text-base">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
          <p className="flex items-center gap-1 justify-center">
            <CiPhone />
            (555) 123-4567
          </p>

          <p className="flex items-center gap-1 justify-center">
            <CiLocationOn />
            123 Health St, City, State 12345
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-right">
          <p>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
