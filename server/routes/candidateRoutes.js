const express = require("express");

const {
  createCandidate,
  getCandidates,
  updateCandidateStatus,
} = require("../controllers/candidateController");

const protect = require("../middleware/authMiddleware");
const uploadResume = require("../middleware/uploadMiddleware");

const router = express.Router();

// Public candidate profile submission
router.post(
  "/",
  uploadResume.single("resume"),
  createCandidate
);

// Protected admin routes
router.get(
  "/",
  protect,
  getCandidates
);

router.patch(
  "/:id/status",
  protect,
  updateCandidateStatus
);

module.exports = router;