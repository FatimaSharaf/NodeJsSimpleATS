const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobID: { type: String, required: true, unique: true },
  title: String,
  description: String,
  companyId: { type: String, required: true },
  managerId: { type: String, required: true },
  postedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", JobSchema);
