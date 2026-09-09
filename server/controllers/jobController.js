const Job = require("../models/Job");

// GET /api/jobs
const getJobs = async (req, res) => {
  try {
    const {
      search,
      location,
      type,
      experience,
      category,
      active,
    } = req.query;

    const filter = {};

    // Search by title, company, category or skills
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { skills: { $regex: search, $options: "i" } },
      ];
    }

    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    if (type) {
      filter.type = type;
    }

    if (experience) {
      filter.experience = {
        $regex: experience,
        $options: "i",
      };
    }

    if (category) {
      filter.category = {
        $regex: category,
        $options: "i",
      };
    }

    // Public website should normally request active jobs
    if (active !== undefined) {
      filter.isActive = active === "true";
    }

    const jobs = await Job.find(filter).sort({
      postedAt: -1,
    });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Get jobs error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
};


// GET /api/jobs/:id
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.error("Get job error:", error);

    res.status(400).json({
      success: false,
      message: "Invalid job ID",
    });
  }
};


// POST /api/jobs
const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      type,
      experience,
      salary,
      category,
      description,
      responsibilities,
      requirements,
      skills,
    } = req.body;

    if (
      !title ||
      !company ||
      !location ||
      !type ||
      !experience ||
      !category ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required job fields",
      });
    }

    const job = await Job.create({
      title,
      company,
      location,
      type,
      experience,
      salary,
      category,
      description,
      responsibilities: responsibilities || [],
      requirements: requirements || [],
      skills: skills || [],
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Create job error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create job",
    });
  }
};


// PUT /api/jobs/:id
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job,
    });
  } catch (error) {
    console.error("Update job error:", error);

    res.status(400).json({
      success: false,
      message: "Failed to update job",
    });
  }
};


// DELETE /api/jobs/:id
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Delete job error:", error);

    res.status(400).json({
      success: false,
      message: "Failed to delete job",
    });
  }
};


module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};