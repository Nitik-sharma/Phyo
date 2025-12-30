import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    slot: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const apiUrl = "http://localhost:5000";

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const payload = {
      patientName: `${form.firstName} ${form.lastName}`.trim(),
      patientEmail: form.email,
      patientPhone: form.phone,
      date: form.date,
      slot: form.slot,
      notes: form.comments,
    };

    try {
      const res = await axios.post(`${apiUrl}/api/appointments/book`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setMsg(res.data.message);

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: "",
        slot: "",
        comments: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      setMsg(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };


  const ALL_SLOTS = [
    "09:00-09:30",
    "10:00-10:30",
    "11:00-11:30",
    "12:00-12:30",
    "13:00-13:30",
  ];

  const getAvailabeSlots = () => {
    if (!form.date) return [];

    const today = new Date().toISOString().split("T")[0];

    if (form.date != today) {
      return ALL_SLOTS
    }

    const now = new Date()
    
    // current time + 1 hour

    const bufferminutes = (now.getHours() + 1) * 60 + now.getMinutes();

    return ALL_SLOTS.filter((slot) => {
      const startTime = slot.split("-")[0]
      const [hour, minute] = startTime.split(":").map(Number);
      const slotMinute = hour * 60 + minute;

      return slotMinute>=bufferminutes
   })
  }

  return (
    <div className="bg-gray-700 flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-3xl space-y-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 border-b pb-3">
          Request an Appointment
        </h1>

        {/* Show success/error message */}
        {msg && (
          <p className="text-center text-green-700 font-semibold bg-green-100 p-2 rounded">
            {msg}
          </p>
        )}

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              required
              placeholder="(000) 000-0000"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="myname@example.com"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
            />
          </div>
        </div>

        {/* Appointment Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Appointment Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2 text-gray-900"
          />

          <div className="flex flex-wrap gap-3 mt-3">
            {getAvailabeSlots().length === 0 && form.date && (
              <p className="text-red-600 font-medium mt-3">
                No slots available for today. Please select another date.
              </p>
            )}
            {getAvailabeSlots().map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setForm({ ...form, slot: time })}
                className={`px-4 py-2 border rounded-lg transition ${
                  form.slot === time
                    ? "bg-green-600 text-white"
                    : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Comments
          </label>
          <textarea
            name="comments"
            rows="4"
            value={form.comments}
            onChange={handleChange}
            placeholder="Your message here..."
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading || !form.slot}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
