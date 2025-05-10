const express = require("express");
const router = express.Router();
const HiringManager = require("../models/HiringManager");

// Add new hiring manager
router.post("/", async (req, res) => {
  try {
    const manager = new HiringManager(req.body);
    await manager.save();
    res.status(201).send(manager);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all hiring managers
router.get("/", async (req, res) => {
  const managers = await HiringManager.find();
  res.send(managers);
});

// Get hiring manager by ID
router.get("/:id", async (req, res) => {
  const manager = await HiringManager.findOne(req.params.id);
  if (!manager) return res.status(404).send("Hiring Manager not found");
  res.send(manager);
});

// Update hiring manager
router.put("/:id", async (req, res) => {
  const manager = await HiringManager.findOneAndUpdate(req.params.id, req.body, { new: true });
  if (!manager) return res.status(404).send("Hiring Manager not found");
  res.send(manager);
});

// Delete hiring manager
router.delete("/:id", async (req, res) => {
  const result = await HiringManager.deleteOne(req.params.id);
  if (!result) return res.status(404).send("Hiring Manager not found");
  res.send({ message: "Hiring Manager deleted" });
});

module.exports = router;
