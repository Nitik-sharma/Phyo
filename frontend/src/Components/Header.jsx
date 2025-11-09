import React from "react";
import { CiPhone, CiLocationOn } from "react-icons/ci";
function Header() {
  return (
    <div>
      <div className="flex flex-col text-center sm:font-light sm:flex-row sm:justify-between gap-3 p-5 bg-green-600 text-zinc-100  ">
        {/* left div */}
        <div className=" flex justify-evenly gap-4 items-center">
          {/* first paragrh for phones  */}
          <p className=" flex items-center">
            <CiPhone />
            (555) 123-4567
          </p>
          {/* Second for Location */}
          <p className=" flex items-center">
            <CiLocationOn />
            123 Health St, City, State 12345
          </p>
        </div>
        {/* right div  */}
        <div>
          <p>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
