const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Make sure uploads directory exists
const uploadDirectory = path.join(
  __dirname,
  "../uploads"
);

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, {
    recursive: true,
  });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});

// Allowed resume types
const fileFilter = (req, file, cb) => {
  const allowedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
  ];

  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    return cb(
      new Error(
        "Only PDF, DOC, and DOCX files are allowed"
      )
    );
  }

  cb(null, true);
};

const uploadResume = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = uploadResume;