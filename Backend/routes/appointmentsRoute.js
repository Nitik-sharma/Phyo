const express = require("express")
const route = express.Router()
const Appointment = require("../models/Appointment")
const sendMail = require("../service/email")


route.post("/book", async (req, res) => {
    try {
        const { patientName, patientEmail, patientPhone, date, slot, notes } = req.body
        
        if (!patientName || !patientEmail || !patientPhone || !slot || !date) {
            return res.status(400).json({message:"Missing important feild "})
        }

        const appointment = await Appointment.create({
            patientName,
            patientEmail,
            patientPhone,
            slot,
            date,
            notes,
            status:"pending"
        })

        const approvalLink = `${process.env.BASE_URL}/api/appointments/approve/${appointment._id}`;

        // send mail for doctor 
        await sendMail(
            process.env.DOCTOR_EMAIL,
            "New Appointment Request",
            `
        <h2>New Appointment Request</h2>
        <p><b>Patient:</b> ${patientName}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Slot:</b> ${slot}</p>
        <p><a href="${approvalLink}">Click here to approve appointment</a></p>
            `
        )

        // Send mail to patient
        await sendMail(
            patientEmail,
            "Appointment Request submitted ",
            `
        <h2>Your request is received</h2>
        <p>Your appointment with <b>${process.env.DOCTOR_NAME}</b> is pending approval.</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Slot:</b> ${slot}</p>`
        )

        res.json({
            message: "Appointment saved sucessfully ",
            appointment
        })
    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).json({message:"This slot is already booked "})
        }

        console.log(error)
        res.status(500).json({message:"Server error ",error:error.message})
        
    }
})

route.get("/approve/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const appt = await Appointment.findById(id)
        if (!appt) {
            return res.status(404).send("<h2>Appointment not found </h2>")
        }

        if (appt.status == "approved") {
            return res.send("<h2>Already Approved </h2>")
        }

        appt.status = 'approved'
        await appt.save()

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
    res.status(500).send("<h2>❌ Server Error</h2>");
    }
})





module.exports=route