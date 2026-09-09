const express = require("express");

const {
  createEmployerEnquiry,
  getEmployerEnquiries,
  updateEmployerEnquiryStatus,
} = require("../controllers/employerEnquiryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public - submit employer enquiry
router.post("/", createEmployerEnquiry);

// Admin - view all enquiries
router.get("/", protect, getEmployerEnquiries);

// Admin - update enquiry status
router.patch("/:id/status", protect, updateEmployerEnquiryStatus);

module.exports = router;