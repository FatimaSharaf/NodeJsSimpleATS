const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");

// Add new applicant
router.post("/", async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).send(applicant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all applicants
router.get("/", async (req, res) => {
  const applicants = await Applicant.find();
  res.send(applicants);
});

// Get applicant by ID
router.get("/:id", async (req, res) => {
  const applicant = await Applicant.findOne(req.params.id);
  if (!applicant) return res.status(404).send("Applicant not found");
  res.send(applicant);
});

// Update applicant
router.put("/:id", async (req, res) => {
  const applicant = await Applicant.findOneAndUpdate(req.params.id, req.body, { new: true });
  if (!applicant) return res.status(404).send("Applicant not found");
  res.send(applicant);
});

// Delete applicant
router.delete("/:id", async (req, res) => {
  const result = await Applicant.deleteOne(req.params.id);
  if (!result) return res.status(404).send("Applicant not found");
  res.send({ message: "Applicant deleted" });
});

module.exports = router;
