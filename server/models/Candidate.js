const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
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
      required: true,
      trim: true,
    },

    experience: {
      type: String,
      required: true,
      trim: true,
    },

    preferredRole: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      default: "",
    },

    resume: {
      originalName: {
        type: String,
        required: true,
      },

      filename: {
        type: String,
        required: true,
      },

      path: {
        type: String,
        required: true,
      },
    },

    status: {
      type: String,
      enum: [
        "New",
        "Reviewed",
        "Contacted",
        "Shortlisted",
        "Rejected",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", candidateSchema);