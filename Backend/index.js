require("dotenv").config()
const express = require("express")
const cors = require("cors")
const parse = require("body-parser")
const connectDB = require("./config/db")
const sendMail=require("./service/email")

const appointment=require("./routes/appointmentsRoute")
const app = express()
app.use(cors({
  origin: "http://localhost:3000",  // React
  methods: ["GET","POST"],
  credentials: true
}));
app.use(express.json())

app.get("/", (req, res) => {
    res.json({status:"ok",message:"APi is runnig sucessfully"})
})

app.use("/api/appointments", appointment)
app.get("/test-email", async (req, res) => {
    try {
        await sendMail(process.env.DOCTOR_EMAIL, "TestEmail", "<p>Hello from backend</p>")
        
        res.json({ok:true})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


PORT = process.env.PORT || 5001

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})