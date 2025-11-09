const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },

})

async function sendMail(to, subject, html) {
    try {
        await transporter.sendMail({
            from: `"${process.env.DOCTOR_NAME}"<${process.env.DOCTOR_EMAIL}>`,
            to,
            subject,
            html
        })

    } catch (error) {
        console.log("Email error",error.message)
    }
    
}

module.exports=sendMail