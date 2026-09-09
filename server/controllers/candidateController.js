const Candidate = require("../models/Candidate");

const createCandidate = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      experience,
      preferredRole,
      location,
      message,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    const candidate = await Candidate.create({
      name,
      email,
      phone,
      experience,
      preferredRole,
      location,
      message,
      resume: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        path: req.file.path,
      },
    });

    res.status(201).json({
      success: true,
      message: "Candidate profile submitted successfully",
      candidate,
    });
  } catch (error) {
    console.error("Create candidate error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit candidate profile",
    });
  }
};

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: candidates.length,
      candidates,
    });
  } catch (error) {
    console.error("Get candidates error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch candidates",
    });
  }
};

const updateCandidateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Reviewed",
      "Contacted",
      "Shortlisted",
      "Rejected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid candidate status",
      });
    }

    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Candidate status updated successfully",
      candidate,
    });
  } catch (error) {
    console.error("Update candidate status error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update candidate status",
    });
  }
};

module.exports = {
  createCandidate,
  getCandidates,
  updateCandidateStatus,
};