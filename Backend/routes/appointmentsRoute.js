const express = require("express");
const route = express.Router();
const crypto = require("crypto");
const Appointment = require("../models/Appointment");
const sendMail = require("../service/email");

// ================= BOOK APPOINTMENT =================
route.post("/book", async (req, res) => {
  try {
    const { patientName, patientEmail, patientPhone, date, slot, notes } = req.body;

    if (!patientName || !patientEmail || !patientPhone || !slot || !date) {
      return res.status(400).json({ message: "Missing important field" });
    }

    const approveToken = crypto.randomBytes(20).toString("hex");

    const appointment = await Appointment.create({
      patientName,
      patientEmail,
      phone: patientPhone,
      slot,
      date,
      notes,
      approveToken,
      status: "pending"
    });

    const approvalLink =
      `${process.env.BASE_URL}/api/appointments/approve/${approveToken}`;
    const cancelLink =
      `${process.env.BASE_URL}/api/appointments/cancel/${approveToken}`;

    await sendMail(
      process.env.DOCTOR_EMAIL,
      "New Appointment Request",
      `
      <h2>New Appointment Request</h2>
      <p><b>Patient:</b> ${patientName}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Slot:</b> ${slot}</p>
      <p><a href="${approvalLink}">Approve Appointment</a></p>
      `
    );

    await sendMail(
      patientEmail,
      "Appointment Request Submitted",
      `
      <h2>Your request is received</h2>
      <p>Status: Pending approval</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Slot:</b> ${slot}</p>
      <p>❌ <a href="${cancelLink}">Cancel Appointment</a></p>
      `
    );

    res.json({ message: "Appointment saved successfully" });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "This slot is already booked" });
    }
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= APPROVE =================
route.get("/approve/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const appt = await Appointment.findOne({ approveToken: token });

    if (!appt) {
      return res.send("<h2>❌ Invalid or expired link</h2>");
    }

    if (appt.status === "approved") {
      return res.send("<h2>Already Approved</h2>");
    }

    appt.status = "approved";
    await appt.save();

    await sendMail(
      appt.patientEmail,
      "Appointment Approved ✅",
      `
      <h2>Your appointment is approved!</h2>
      <p><b>Date:</b> ${appt.date}</p>
      <p><b>Time:</b> ${appt.slot}</p>
      `
    );

    res.send("<h2>✅ Appointment Approved Successfully</h2>");

  } catch (error) {
    console.log(error);
    res.send("<h2>❌ Server Error</h2>");
  }
});

// ================= CANCEL =================
route.get("/cancel/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const appt = await Appointment.findOne({ approveToken: token });

    if (!appt) {
      return res.send("<h2>❌ Invalid or expired link</h2>");
    }

    if (appt.status === "cancelled") {
      return res.send("<h2>⚠️ Appointment already cancelled</h2>");
    }

    if (appt.status === "approved") {
      return res.send("<h2>⚠️ Approved appointment cannot be cancelled</h2>");
    }

    appt.status = "cancelled";
    await appt.save();

    res.send("<h2>✅ Appointment Cancelled Successfully</h2>");

  } catch (error) {
    console.log(error);
    res.send("<h2>❌ Server Error</h2>");
  }
});

module.exports = route;
