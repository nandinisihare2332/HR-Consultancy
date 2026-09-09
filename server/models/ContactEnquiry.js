const mongoose = require("mongoose");

const contactEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      enum: [
        "Job Opportunity",
        "Candidate Support",
        "Hiring Requirement",
        "Recruitment Services",
        "General Enquiry",
      ],
    },

    message: {
      type: String,
      required: true,
    },

    consent: {
      type: Boolean,
      required: true,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Read",
        "Replied",
        "Closed",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ContactEnquiry",
  contactEnquirySchema
);