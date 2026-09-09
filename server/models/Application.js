const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

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

    coverLetter: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "New",
        "Reviewed",
        "Shortlisted",
        "Interview",
        "Selected",
        "Rejected",
      ],
      default: "New",
    },

    consent: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);