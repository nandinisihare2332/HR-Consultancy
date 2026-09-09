const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Job = require("./models/Job");

dotenv.config();

const jobs = [
  {
    title: "Frontend Developer",
    company: "Technology Company",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹3.5 – 5.5 LPA",
    category: "IT & Technology",
    description:
      "Build responsive and user-friendly web applications using modern frontend technologies.",
    responsibilities: [
      "Develop responsive web interfaces",
      "Work with designers and backend developers",
      "Maintain and improve existing applications",
    ],
    requirements: [
      "Good knowledge of JavaScript",
      "Experience with React",
      "Understanding of HTML and CSS",
    ],
    skills: ["React", "JavaScript", "HTML", "CSS"],
    isActive: true,
  },

  {
    title: "Node.js Developer",
    company: "Software Solutions",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹4 – 6 LPA",
    category: "IT & Technology",
    description:
      "Develop scalable backend services and REST APIs using Node.js and related technologies.",
    responsibilities: [
      "Develop REST APIs",
      "Work with MongoDB databases",
      "Maintain backend services",
    ],
    requirements: [
      "Good knowledge of Node.js",
      "Experience with Express",
      "Understanding of MongoDB",
    ],
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
    isActive: true,
  },

  {
    title: "HR Executive",
    company: "Growing Enterprise",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "1–2 Years",
    salary: "₹2.5 – 4 LPA",
    category: "Human Resources",
    description:
      "Support recruitment, employee coordination and day-to-day HR operations.",
    responsibilities: [
      "Assist with recruitment activities",
      "Coordinate interviews",
      "Maintain employee records",
    ],
    requirements: [
      "Good communication skills",
      "Basic knowledge of HR processes",
      "Graduate degree",
    ],
    skills: ["Recruitment", "HR Operations", "Communication"],
    isActive: true,
  },

  {
    title: "Business Development Executive",
    company: "Business Services",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "0–2 Years",
    salary: "₹2.5 – 4.5 LPA",
    category: "Sales & Marketing",
    description:
      "Identify new business opportunities and build strong relationships with prospective clients.",
    responsibilities: [
      "Generate new business leads",
      "Communicate with prospective clients",
      "Maintain client relationships",
    ],
    requirements: [
      "Good communication skills",
      "Interest in sales and business development",
      "Basic computer knowledge",
    ],
    skills: ["Sales", "Lead Generation", "Communication"],
    isActive: true,
  },

  {
    title: "Recruitment Specialist",
    company: "Talent Services",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "2–4 Years",
    salary: "₹3 – 5 LPA",
    category: "Human Resources",
    description:
      "Manage the recruitment lifecycle from candidate sourcing to interview coordination.",
    responsibilities: [
      "Source suitable candidates",
      "Screen candidate profiles",
      "Coordinate interviews",
    ],
    requirements: [
      "Recruitment experience",
      "Good candidate sourcing skills",
      "Strong communication skills",
    ],
    skills: ["Recruitment", "Sourcing", "Interviewing"],
    isActive: true,
  },

  {
    title: "Software Engineer",
    company: "Digital Solutions",
    location: "Remote",
    type: "Remote",
    experience: "2–5 Years",
    salary: "₹5 – 8 LPA",
    category: "IT & Technology",
    description:
      "Work with a development team to design, build and maintain reliable software solutions.",
    responsibilities: [
      "Develop software applications",
      "Write clean and maintainable code",
      "Collaborate with development teams",
    ],
    requirements: [
      "Strong programming fundamentals",
      "Knowledge of modern web technologies",
      "Understanding of Git",
    ],
    skills: ["JavaScript", "React", "Node.js", "Git"],
    isActive: true,
  },

  {
    title: "Customer Support Executive",
    company: "Service Organization",
    location: "Gwalior, Madhya Pradesh",
    type: "Full Time",
    experience: "0–2 Years",
    salary: "₹2 – 3.5 LPA",
    category: "Customer Support",
    description:
      "Assist customers with their questions and provide timely and professional support.",
    responsibilities: [
      "Handle customer queries",
      "Resolve customer issues",
      "Maintain professional communication",
    ],
    requirements: [
      "Good communication skills",
      "Customer-focused approach",
      "Basic computer knowledge",
    ],
    skills: ["Communication", "Customer Service", "Problem Solving"],
    isActive: true,
  },

  {
    title: "Accountant",
    company: "Professional Services",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹2.5 – 4 LPA",
    category: "Finance & Accounts",
    description:
      "Handle accounting records, financial documentation and routine reporting activities.",
    responsibilities: [
      "Maintain accounting records",
      "Prepare financial documents",
      "Assist with routine reporting",
    ],
    requirements: [
      "Knowledge of accounting principles",
      "Tally knowledge",
      "Good Excel skills",
    ],
    skills: ["Accounting", "Tally", "Excel", "GST"],
    isActive: true,
  },
];

const seedJobs = async () => {
  try {
    await connectDB();

    await Job.deleteMany();

    await Job.insertMany(jobs);

    console.log("Jobs seeded successfully!");
    console.log(`${jobs.length} jobs inserted.`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding jobs:", error.message);
    process.exit(1);
  }
};

seedJobs();