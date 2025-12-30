import axios from 'axios';
import React, { useState } from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message:""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("first")
    console.log(data)

    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        name: data.name,
        email: data.email,
        phoneNo: data.phoneNo,
        message:data.message
      });

      alert("Message sent successfully ✅");

      // reset data form
      setData({
        name: "",
        email: "",
        phoneNo: "",
        message:""
      })
    } catch (error) {
      console.log(error)
      alert("Server is not working try after sometime ")
    }
  }

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    
    
  }
  return (
    <div id="contact">
      <div className="bg-neutral-900 text-neutral-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="inline-block px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm mb-2">
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get in <span className="text-green-500">Touch</span>
            </h2>
            <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
              Ready to start your journey to better health? Contact us today to
              schedule your consultation or ask any questions about our
              services.
            </p>
          </div>

          {/* Main Grid: Left (cards) + Right (form) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-5">
              {/* Contact Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <FaPhoneAlt className="text-green-500 text-lg" />
                    <p className="font-semibold">Phone</p>
                  </div>
                  <p className="text-sm text-neutral-300">(345) 124-4567</p>
                  <p className="text-xs text-neutral-500">
                    Call us for appointments
                  </p>
                </div>

                {/* Email */}
                <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <HiOutlineMail className="text-green-500 text-lg" />
                    <p className="font-semibold">Email</p>
                  </div>
                  <p className="text-sm text-neutral-300">
                    info@physioclinic.com
                  </p>
                  <p className="text-xs text-neutral-500">
                    Send us your queries
                  </p>
                </div>

                {/* Address */}
                <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-green-500 text-lg" />
                    <p className="font-semibold">Address</p>
                  </div>
                  <p className="text-sm text-neutral-300">123 Health Street</p>
                  <p className="text-xs text-neutral-500">City, State 12345</p>
                </div>

                {/* Hours */}
                <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <FaClock className="text-green-500 text-lg" />
                    <p className="font-semibold">Hours</p>
                  </div>
                  <p className="text-sm text-neutral-300">Mon–Fri: 8AM–6PM</p>
                  <p className="text-xs text-neutral-500">Sat: 9AM–2PM</p>
                </div>
              </div>

              {/* Map Box */}
              <div className="bg-gradient-to-br from-green-800 to-blue-900 border border-neutral-700 p-10 rounded-2xl text-center">
                <p className="text-neutral-200 font-semibold text-lg">
                  Interactive Map
                </p>
                <p className="text-neutral-400 text-sm mt-2">
                  Located in the heart of the city with easy access and parking
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-5">Send us a message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Full Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="p-3 bg-neutral-900 border border-neutral-700 rounded-md outline-none focus:border-green-500"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="p-3 bg-neutral-900 border border-neutral-700 rounded-md outline-none focus:border-green-500"
                    onChange={handleChange}
                  />
                </div>

                {/* Phone */}
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-md outline-none focus:border-green-500"
                  onChange={handleChange}
                />

                {/* Message */}
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell us about your condition or questions..."
                  className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-md outline-none focus:border-green-500"
                  onChange={handleChange}
                ></textarea>

                {/* Send Button */}
                <button className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-md text-white font-medium transition" type='submit'>
                  Send Message
                </button>

                {/* Quick Response Box */}
                <div className="bg-neutral-900 border border-neutral-700 p-4 rounded-lg text-xs">
                  <p className="text-green-400 font-semibold mb-1">
                    Quick Response Guarantee
                  </p>
                  <p className="text-neutral-400">
                    We typically respond to all inquiries within 2 hours during
                    business hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact