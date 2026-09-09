const EmployerEnquiry = require("../models/EmployerEnquiry");

const createEmployerEnquiry = async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      jobTitle,
      positions,
      hiringType,
      timeline,
      message,
      consent,
    } = req.body;

    if (
      !name ||
      !company ||
      !email ||
      !phone ||
      !jobTitle ||
      !positions ||
      !hiringType ||
      !timeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const enquiry = await EmployerEnquiry.create({
      name,
      company,
      email,
      phone,
      jobTitle,
      positions: Number(positions),
      hiringType,
      timeline,
      message: message || "",
      consent: consent === true || consent === "true",
    });

    res.status(201).json({
      success: true,
      message: "Employer enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Create employer enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit employer enquiry",
    });
  }
};

const getEmployerEnquiries = async (req, res) => {
  try {
    const enquiries = await EmployerEnquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    console.error("Get employer enquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch employer enquiries",
    });
  }
};

const updateEmployerEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Contacted",
      "In Progress",
      "Completed",
      "Closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry status",
      });
    }

    const enquiry = await EmployerEnquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Employer enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employer enquiry status updated successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Update employer enquiry status error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update enquiry status",
    });
  }
};

module.exports = {
  createEmployerEnquiry,
  getEmployerEnquiries,
  updateEmployerEnquiryStatus,
};