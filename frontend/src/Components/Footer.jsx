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
    <footer
      className="bg-neutral-900 text-neutral-300 pt-16 px-6"
      aria-label="Clinic footer information"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-green-600 text-white font-bold px-3 py-2 rounded-md">
                RC
              </div>
              <p className="text-lg font-semibold">RehabCare Clinic</p>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              RehabCare Clinic provides professional physiotherapy and
              rehabilitation services focused on pain relief, mobility
              improvement, and long-term recovery.
            </p>

            <address className="not-italic space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                <a
                  href="tel:+13451234567"
                  aria-label="Call RehabCare Physiotherapy Clinic"
                  className="hover:underline"
                >
                  9034107746
                </a>
              </p>

              <p className="flex items-center gap-2">
                <HiOutlineMail className="text-green-500" />
                <a
                  href="mailto:info@physioclinic.com"
                  className="hover:underline"
                >
                  prehabcare@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" />
                18,Yadav Market,Dhanwapur Road,Laxman Vhiar,Gurugram
              </p>
            </address>
          </div>

          {/* Column 2: Services */}
          <nav aria-label="Physiotherapy services">
            <h3 className="font-semibold text-neutral-100 mb-4">
              Physiotherapy Services
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Manual Therapy</li>
              <li>Exercise Therapy</li>
              <li>Sports Rehabilitation</li>
              <li>Post-Surgery Recovery</li>
            </ul>
          </nav>

          {/* Column 3: Quick Links */}
          <nav aria-label="Footer navigation links">
            <h3 className="font-semibold text-neutral-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-semibold text-neutral-100 mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400 mb-4">
              <li>Patient Education</li>
              <li>Exercise Videos</li>
              <li>Health & Wellness Tips</li>
              <li>Insurance Information</li>
            </ul>

            <p className="text-sm text-neutral-100 font-semibold mb-2">
              Stay Updated
            </p>
            <p className="text-xs text-neutral-400 mb-3">
              Subscribe for physiotherapy tips and clinic updates.
            </p>

            <button
              aria-label="Subscribe to RehabCare Clinic newsletter"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded"
            >
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
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/patient-portal">Patient Portal</a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-neutral-400">
            <a href="#" aria-label="RehabCare Facebook">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="#" aria-label="RehabCare Instagram">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#" aria-label="RehabCare LinkedIn">
              <FaLinkedinIn className="hover:text-white" />
            </a>
            <a href="#" aria-label="RehabCare Twitter">
              <FaTwitter className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
