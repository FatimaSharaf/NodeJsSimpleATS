const mongoose = require("mongoose");

const HiringManagerSchema = new mongoose.Schema({
  managerID: { type: String, required: true, unique: true },
  name: String,
  email: String,
  contactNumber: String,
  companyId: { type: String, required: true }
});

module.exports = mongoose.model("HiringManager", HiringManagerSchema);
