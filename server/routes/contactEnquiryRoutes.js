const express = require("express");

const {
  createContactEnquiry,
  getContactEnquiries,
  updateContactEnquiryStatus,
} = require("../controllers/contactEnquiryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public - submit contact enquiry
router.post("/", createContactEnquiry);

// Admin - view enquiries
router.get("/", protect, getContactEnquiries);

// Admin - update status
router.patch("/:id/status", protect, updateContactEnquiryStatus);

module.exports = router;