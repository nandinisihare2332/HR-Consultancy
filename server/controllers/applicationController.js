const Application = require("../models/Application");
const Job = require("../models/Job");

// POST /api/applications
const createApplication = async (req, res) => {
  try {
    const {
      jobId,
      name,
      email,
      phone,
      coverLetter,
      consent,
    } = req.body;

    // Validate required fields
    if (
      !jobId ||
      !name ||
      !email ||
      !phone ||
      !consent
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required application details",
      });
    }

    // Check resume
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume",
      });
    }

    // Check job
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    if (!job.isActive) {
      return res.status(400).json({
        success: false,
        message: "This job is no longer accepting applications",
      });
    }

    // Create application
    const application = await Application.create({
      job: job._id,

      name: name.trim(),

      email: email.toLowerCase().trim(),

      phone: phone.trim(),

      coverLetter: coverLetter
        ? coverLetter.trim()
        : "",

      consent: consent === true || consent === "true",

      resume: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        path: req.file.path,
      },
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: {
        id: application._id,
        name: application.name,
        email: application.email,
        job: job.title,
        status: application.status,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error("Create application error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};


// GET /api/applications
// Admin only
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job", "title company location")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Get applications error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};


// GET /api/applications/:id
// Admin only
const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(
      req.params.id
    ).populate(
      "job",
      "title company location"
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("Get application error:", error);

    res.status(400).json({
      success: false,
      message: "Invalid application ID",
    });
  }
};


// PATCH /api/applications/:id/status
// Admin only
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Reviewed",
      "Shortlisted",
      "Interview",
      "Selected",
      "Rejected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status",
      });
    }

    const application =
      await Application.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application status updated",
      application,
    });
  } catch (error) {
    console.error(
      "Update application status error:",
      error
    );

    res.status(400).json({
      success: false,
      message: "Failed to update application status",
    });
  }
};


module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplicationStatus,
};