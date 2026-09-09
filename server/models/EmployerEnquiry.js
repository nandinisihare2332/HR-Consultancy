const mongoose = require("mongoose");

const employerEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
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
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    positions: {
      type: Number,
      required: true,
      min: 1,
    },

    hiringType: {
      type: String,
      required: true,
      enum: [
        "Permanent",
        "Contract",
        "Internship",
        "Temporary",
      ],
    },

    timeline: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      default: "",
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
        "Contacted",
        "In Progress",
        "Completed",
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
  "EmployerEnquiry",
  employerEnquirySchema
);