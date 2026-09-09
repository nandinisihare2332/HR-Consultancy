const express = require("express");

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const protect = require("../middleware/authMiddleware");
const uploadResume = require("../middleware/uploadMiddleware");

const router = express.Router();

// Public
router.post(
  "/",
  uploadResume.single("resume"),
  createApplication
);

// Admin
router.get(
  "/",
  protect,
  getApplications
);

router.get(
  "/:id",
  protect,
  getApplicationById
);

router.patch(
  "/:id/status",
  protect,
  updateApplicationStatus
);

module.exports = router;