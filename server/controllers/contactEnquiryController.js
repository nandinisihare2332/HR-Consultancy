const ContactEnquiry = require("../models/ContactEnquiry");

const createContactEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      consent,
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const enquiry = await ContactEnquiry.create({
      name,
      email,
      phone: phone || "",
      subject,
      message,
      consent: consent === true || consent === "true",
    });

    res.status(201).json({
      success: true,
      message: "Contact enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Create contact enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit contact enquiry",
    });
  }
};

const getContactEnquiries = async (req, res) => {
  try {
    const enquiries = await ContactEnquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    console.error("Get contact enquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch contact enquiries",
    });
  }
};

const updateContactEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Read",
      "Replied",
      "Closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact enquiry status",
      });
    }

    const enquiry = await ContactEnquiry.findByIdAndUpdate(
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
        message: "Contact enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact enquiry status updated successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Update contact enquiry status error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update contact enquiry status",
    });
  }
};

module.exports = {
  createContactEnquiry,
  getContactEnquiries,
  updateContactEnquiryStatus,
};