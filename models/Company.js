const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  industry: String,
  location: String
});

module.exports = mongoose.model("Company", CompanySchema);
