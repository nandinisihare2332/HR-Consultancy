const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: [
        "Full Time",
        "Part Time",
        "Contract",
        "Internship",
        "Remote",
      ],
    },

    experience: {
      type: String,
      required: true,
      trim: true,
    },

    salary: {
      type: String,
      trim: true,
      default: "Not disclosed",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    requirements: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    postedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);