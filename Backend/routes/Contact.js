const express = require("express")
const route = express.Router()
const Contactus = require("../models/ContactModel")
const sendMail = require("../service/email")


route.post("/contact", async (req, res) => {
    try {
        const { name, email, phoneNo, message } = req.body
        
        // validation 
        if (!name || !email || !phoneNo || !message) {
            return res.send(400).json({
                message:"Please fill all feild "
            })
        }

        // save to db
        await Contactus.create({
            name,
            email,
            phoneNo,
            message
        })
        // send mail to clinic admn

        await sendMail(
            process.env.DOCTOR_EMAIL,
            "New Contact  Message",
            `<h2>New Message Received </h2>
            <p><b>Name:</b>${name}</p>
            <p><b>Email:</b>${email}</p>
            <p><b>Phone:</b>${phoneNo || "N/A"}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
            `
        )

        res.json({
            message:"Message sent sucessfully "
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Server error "
        })
    }
})

module.exports=route