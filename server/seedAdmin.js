const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@talentbridge.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@12345",
      12
    );

    await Admin.create({
      name: "TalentBridge Admin",
      email: "admin@talentbridge.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully.");
    console.log("Email: admin@talentbridge.com");
    console.log("Password: Admin@12345");

    process.exit(0);
  } catch (error) {
    console.error("Admin seed error:", error.message);
    process.exit(1);
  }
};

seedAdmin();