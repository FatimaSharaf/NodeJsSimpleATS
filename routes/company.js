const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

// Add new company
router.post("/", async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all companies
router.get("/", async (req, res) => {
  const companies = await Company.find();
  res.send(companies);
});

// Get company by ID
router.get("/:id", async (req, res) => {
  const company = await Company.findOne(req.params.id);
  if (!company) return res.status(404).send("Company not found");
  res.send(company);
});

// Update company
router.put("/:id", async (req, res) => {
  const company = await Company.findOneAndUpdate(req.params.id, req.body, { new: true });
  if (!company) return res.status(404).send("Company not found");
  res.send(company);
});

// Delete company
router.delete("/:id", async (req, res) => {
  const result = await Company.deleteOne(req.params.id);
  if (!result) return res.status(404).send("Company not found");
  res.send({ message: "Company deleted" });
});

module.exports = router;
