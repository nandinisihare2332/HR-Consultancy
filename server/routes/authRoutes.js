const express = require("express");

const {
  loginAdmin,
  getCurrentAdmin,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/login", loginAdmin);

// Protected
router.get("/me", protect, getCurrentAdmin);

module.exports = router;