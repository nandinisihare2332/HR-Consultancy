import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  IndianRupee,
  CheckCircle2,
  Upload,
  Send,
  Building2,
} from "lucide-react";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobError, setJobError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [consent, setConsent] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applicationError, setApplicationError] = useState("");

  // Fetch job from MongoDB
  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setJobError("");

        const response = await api.get(`/jobs/${id}`);

        setJob(response.data.job);
      } catch (error) {
        console.error("Failed to fetch job:", error);

        setJobError(
          error.response?.data?.message ||
            "Unable to load this job opportunity."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Resume size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    setResume(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setApplicationError("");

    if (!resume) {
      setApplicationError("Please upload your resume.");
      return;
    }

    if (!consent) {
      setApplicationError(
        "Please agree to the processing of your information."
      );
      return;
    }

    try {
      setSubmitting(true);

      const applicationData = new FormData();

      applicationData.append("jobId", id);
      applicationData.append("name", formData.name);
      applicationData.append("email", formData.email);
      applicationData.append("phone", formData.phone);
      applicationData.append("coverLetter", formData.coverLetter);
      applicationData.append("consent", "true");
      applicationData.append("resume", resume);

      await api.post("/applications", applicationData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
      });

      setResume(null);
      setConsent(false);
    } catch (error) {
      console.error("Application submission failed:", error);

      setApplicationError(
        error.response?.data?.message ||
          "Unable to submit your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <section className="job-not-found section-padding">
        <div className="container">
          <div className="job-not-found-box">
            <div className="job-not-found-icon">
              <BriefcaseBusiness size={30} />
            </div>

            <h1>Loading job...</h1>

            <p>
              Please wait while we load the job opportunity.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Error / job not found
  if (!job || jobError) {
    return (
      <section className="job-not-found section-padding">
        <div className="container">
          <div className="job-not-found-box">
            <div className="job-not-found-icon">
              <BriefcaseBusiness size={30} />
            </div>

            <h1>Job not found</h1>

            <p>
              {jobError ||
                "This job opportunity may no longer be available or the link may be incorrect."}
            </p>

            <Link to="/jobs" className="btn btn-primary">
              <ArrowLeft size={18} />
              Back to Jobs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="job-details-page">
      {/* Job Header */}
      <section className="job-details-hero">
        <div className="container">
          <Link to="/jobs" className="back-to-jobs">
            <ArrowLeft size={17} />
            Back to Jobs
          </Link>

          <div className="job-details-header">
            <div className="job-details-icon">
              <BriefcaseBusiness size={31} />
            </div>

            <div className="job-details-title">
              <span className="job-details-category">
                {job.category}
              </span>

              <h1>{job.title}</h1>

              <div className="job-details-company">
                <Building2 size={16} />
                {job.company}
              </div>
            </div>
          </div>

          <div className="job-details-meta">
            <div>
              <MapPin size={18} />
              <span>{job.location}</span>
            </div>

            <div>
              <BriefcaseBusiness size={18} />
              <span>{job.type}</span>
            </div>

            <div>
              <Clock3 size={18} />
              <span>{job.experience}</span>
            </div>

            <div>
              <IndianRupee size={18} />
              <span>{job.salary || "Not disclosed"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="job-details-content section-padding">
        <div className="container">
          <div className="job-details-layout">
            {/* Details */}
            <main className="job-description">
              <div className="job-description-section">
                <span className="eyebrow">ABOUT THE ROLE</span>

                <h2>Job Description</h2>

                <p>{job.description}</p>
              </div>

              {job.responsibilities?.length > 0 && (
                <div className="job-description-section">
                  <h2>Key Responsibilities</h2>

                  <ul className="job-check-list">
                    {job.responsibilities.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements?.length > 0 && (
                <div className="job-description-section">
                  <h2>Requirements</h2>

                  <ul className="job-check-list">
                    {job.requirements.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.skills?.length > 0 && (
                <div className="job-description-section">
                  <h2>Skills</h2>

                  <div className="details-skills">
                    {job.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="job-description-note">
                <strong>About TalentBridge</strong>

                <p>
                  TalentBridge connects professionals with organizations
                  looking for the right skills and experience. We support
                  candidates throughout the recruitment journey.
                </p>
              </div>
            </main>

            {/* Application */}
            <aside className="application-card">
              <div className="application-card-heading">
                <span className="eyebrow">APPLY NOW</span>

                <h2>Interested in this role?</h2>

                <p>
                  Complete the form below and our recruitment team will review
                  your profile.
                </p>
              </div>

              {submitted ? (
                <div className="application-success">
                  <div className="application-success-icon">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3>Application received!</h3>

                  <p>
                    Thank you for applying for the{" "}
                    <strong>{job.title}</strong> position. Our recruitment team
                    will review your application and contact you if your
                    profile matches the opportunity.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setApplicationError("");
                    }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form
                  className="application-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">
                      Resume <span>*</span>
                    </label>

                    <label className="resume-upload">
                      <Upload size={21} />

                      <span>
                        {resume
                          ? resume.name
                          : "Choose your resume"}
                      </span>

                      <small>PDF, DOC or DOCX • Max 5 MB</small>

                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        required
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">
                      Cover Message
                    </label>

                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows="5"
                      placeholder="Tell us briefly about yourself..."
                      value={formData.coverLetter}
                      onChange={handleChange}
                    />
                  </div>

                  <label className="application-consent">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) =>
                        setConsent(e.target.checked)
                      }
                      required
                    />

                    <span>
                      I agree to the processing of my information for
                      recruitment purposes.
                    </span>
                  </label>

                  {applicationError && (
                    <div className="form-error">
                      {applicationError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary apply-button"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit Application"}

                    <Send size={17} />
                  </button>

                  <p className="application-note">
                    Your information will be handled confidentially.
                  </p>
                </form>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="job-details-bottom">
        <div className="container">
          <div className="job-details-bottom-inner">
            <div>
              <span className="eyebrow">LOOKING FOR MORE?</span>

              <h2>
                Explore more
                <span> opportunities.</span>
              </h2>

              <p>
                Find other roles that match your skills and career goals.
              </p>
            </div>

            <Link to="/jobs" className="btn btn-light">
              Browse All Jobs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobDetails;