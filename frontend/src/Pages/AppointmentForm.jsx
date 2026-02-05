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

  const apiUrl = "https://phyo-pps7.onrender.com";

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
      setMsg(err.response?.data?.message || "Server error. Please try again.");
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

  const getAvailableSlots = () => {
    if (!form.date) return [];

    const today = new Date().toISOString().split("T")[0];
    if (form.date !== today) return ALL_SLOTS;

    const now = new Date();
    const bufferMinutes = (now.getHours() + 1) * 60 + now.getMinutes();

    return ALL_SLOTS.filter((slot) => {
      const [hour, minute] = slot.split("-")[0].split(":").map(Number);
      return hour * 60 + minute >= bufferMinutes;
    });
  };

  return (
    <section
      className="bg-gray-700 flex justify-center items-center min-h-screen p-4"
      aria-label="Physiotherapy appointment booking form"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-3xl space-y-6"
        aria-describedby="form-status"
      >
        {/* H2 (NOT H1) */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 border-b pb-3">
          Request a Physiotherapy Appointment
        </h2>

        {/* Status Message */}
        {msg && (
          <p
            id="form-status"
            className="text-center text-green-700 font-semibold bg-green-100 p-2 rounded"
            role="status"
          >
            {msg}
          </p>
        )}

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Date & Slots */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Select Appointment Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="border rounded-lg p-2 w-full md:w-1/2"
          />

          <div
            className="flex flex-wrap gap-3 mt-3"
            role="group"
            aria-label="Available time slots"
          >
            {getAvailableSlots().length === 0 && form.date && (
              <p className="text-red-600 font-medium">
                No slots available. Please select another date.
              </p>
            )}

            {getAvailableSlots().map((time) => (
              <button
                key={time}
                type="button"
                aria-pressed={form.slot === time}
                onClick={() => setForm({ ...form, slot: time })}
                className={`px-4 py-2 border rounded-lg ${
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
          <label htmlFor="comments" className="block text-sm font-semibold">
            Comments (Optional)
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={form.comments}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading || !form.slot}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            {loading ? "Submitting..." : "Book Appointment"}
          </button>
        </div>

        {/* Medical Disclaimer */}
        <p className="text-xs text-gray-500 text-center">
          Submitting this form does not confirm an appointment. Our clinic team
          will contact you to confirm availability.
        </p>
      </form>
    </section>
  );
};

export default AppointmentForm;
