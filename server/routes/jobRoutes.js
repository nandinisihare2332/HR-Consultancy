const express = require("express");

const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

// Public routes
router.get("/", getJobs);
router.get("/:id", getJobById);

// Admin routes
// Authentication middleware will be added here next.
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;