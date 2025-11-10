import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-green-600 text-white font-bold px-3 py-2 rounded-md">
                RC
              </div>
              <p className="text-lg font-semibold">RehabCare Clinic</p>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Dedicated to providing exceptional physiotherapy care with
              personalized treatment plans and state-of-the-art facilities.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" /> (345) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineMail className="text-green-500" />{" "}
                info@physioclinic.com
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" /> 123 Health St,
                City, State 12345
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Manual Therapy</li>
              <li>Exercise Therapy</li>
              <li>Sports Rehabilitation</li>
              <li>Group Classes</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contact</li>
              <li>Book Appointment</li>
            </ul>
          </div>

          {/* Column 4: Resources + Subscribe */}
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-neutral-400 mb-4">
              <li>Patient Resources</li>
              <li>Exercise Videos</li>
              <li>Health Tips</li>
              <li>Insurance Info</li>
            </ul>

            <p className="text-sm text-neutral-100 font-semibold mb-2">
              Stay Updated
            </p>
            <p className="text-xs text-neutral-400 mb-3">
              Subscribe to our newsletter for health tips and updates.
            </p>

            <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4 pb-6">
          <p>© 2025 RehabCare Clinic. All rights reserved.</p>

          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Accessibility</p>
            <p>Patient Portal</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-neutral-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
