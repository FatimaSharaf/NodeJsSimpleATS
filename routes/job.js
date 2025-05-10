const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Add new job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

// Get job by ID
router.get("/:id", async (req, res) => {
  const job = await Job.findOne(req.params.id);
  if (!job) return res.status(404).send("Job not found");
  res.send(job);
});

// Update job
router.put("/:id", async (req, res) => {
  const job = await Job.findOneAndUpdate(req.params.id, req.body, { new: true });
  if (!job) return res.status(404).send("Job not found");
  res.send(job);
});

// Delete job
router.delete("/:id", async (req, res) => {
  const result = await Job.deleteOne(req.params.id);
  if (!result) return res.status(404).send("Job not found");
  res.send({ message: "Job deleted" });
});

module.exports = router;
