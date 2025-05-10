const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({
  applicantID: { type: String, required: true, unique: true },
  name: String,
  email: String,
  nationality: String, 
  contactNumber: String,
  jobId: { type: String, required: true },
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Applicant", ApplicantSchema);
