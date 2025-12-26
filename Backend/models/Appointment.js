const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  phone: { type: String },

  

  date: { type: String, required: true },
  slot: { type: String, required: true },

    notes: { type: String },
  location: {
      type: String,
      default: process.env.CLINIC_LOCATION
    },

    status: {
        type: String, enum: ['pending', "approved", 'cancelled'],
      default:"pending"
    },  
    reminderSent: {
        type: Boolean,
       default:false 
    },
  approveToken: {
    type: String,
    required: true,
    unique:true
   },

  

  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

appointmentSchema.index({date:1,slot:1},{unique:true})

module.exports = mongoose.model("Appointment", appointmentSchema);
