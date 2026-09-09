import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Upload,
  UserRound,
  BriefcaseBusiness,
  Target,
  Users,
  FileText,
  Send,
} from "lucide-react";

function Candidates() {
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    preferredRole: "",
    location: "",
    message: "",
  });

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

  if (!resume) {
    alert("Please upload your resume.");
    return;
  }

  try {
    const candidateData = new FormData();

    candidateData.append("name", formData.name);
    candidateData.append("email", formData.email);
    candidateData.append("phone", formData.phone);
    candidateData.append("experience", formData.experience);
    candidateData.append("preferredRole", formData.preferredRole);
    candidateData.append("location", formData.location);
    candidateData.append("message", formData.message);
    candidateData.append("resume", resume);

    await api.post("/candidates", candidateData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      preferredRole: "",
      location: "",
      message: "",
    });

    setResume(null);
  } catch (error) {
    console.error("Candidate profile submission failed:", error);

    alert(
      error.response?.data?.message ||
        "Unable to submit your profile. Please try again."
    );
  }
};

  return (
    <div className="candidates-page">
      {/* Hero */}
      <section className="inner-hero candidates-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">FOR CANDIDATES</span>

          <h1>
            Your next opportunity
            <span> starts here.</span>
          </h1>

          <p>
            Tell us about yourself, share your experience and let our
            recruitment team help connect you with opportunities that match
            your career goals.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Candidates</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="candidate-intro section-padding">
        <div className="container">
          <div className="candidate-intro-grid">
            <div>
              <span className="eyebrow">YOUR CAREER PARTNER</span>

              <h2>
                We don't just find jobs.
                <span> We help build careers.</span>
              </h2>
            </div>

            <div>
              <p>
                Finding the right opportunity can take time. Our recruitment
                team works with professionals across different industries and
                experience levels to connect them with relevant organizations.
              </p>

              <p>
                Submit your profile once and our team can consider you for
                suitable opportunities as they become available.
              </p>

              <Link to="/jobs" className="text-arrow-link">
                Browse Current Jobs
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="candidate-benefits section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">WHY REGISTER</span>

            <h2>
              More opportunities.
              <span> Less searching.</span>
            </h2>

            <p>
              Give our recruitment team a better understanding of your skills
              and career goals.
            </p>
          </div>

          <div className="candidate-benefit-grid">
            <article className="candidate-benefit-card">
              <div className="candidate-benefit-icon">
                <Target size={24} />
              </div>

              <h3>Relevant Opportunities</h3>

              <p>
                We focus on matching your experience and skills with positions
                that are relevant to your profile.
              </p>
            </article>

            <article className="candidate-benefit-card">
              <div className="candidate-benefit-icon">
                <Users size={24} />
              </div>

              <h3>Employer Connections</h3>

              <p>
                Get connected with organizations and hiring teams looking for
                professionals like you.
              </p>
            </article>

            <article className="candidate-benefit-card">
              <div className="candidate-benefit-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <h3>Career Guidance</h3>

              <p>
                Receive practical guidance during the recruitment process,
                from interviews to offer discussions.
              </p>
            </article>

            <article className="candidate-benefit-card">
              <div className="candidate-benefit-icon">
                <FileText size={24} />
              </div>

              <h3>Profile Visibility</h3>

              <p>
                Keep your professional profile with us so you can be considered
                for future opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="candidate-process section-padding">
        <div className="container">
          <div className="candidate-process-heading">
            <span className="eyebrow">HOW IT WORKS</span>

            <h2>
              Getting started is
              <span> simple.</span>
            </h2>
          </div>

          <div className="candidate-process-grid">
            <div className="candidate-process-item">
              <div className="candidate-process-number">01</div>

              <div>
                <h3>Submit Your Profile</h3>
                <p>
                  Share your basic details, experience, preferred role and
                  resume with us.
                </p>
              </div>
            </div>

            <div className="candidate-process-item">
              <div className="candidate-process-number">02</div>

              <div>
                <h3>Profile Review</h3>
                <p>
                  Our recruitment team reviews your background and understands
                  the type of opportunities that suit you.
                </p>
              </div>
            </div>

            <div className="candidate-process-item">
              <div className="candidate-process-number">03</div>

              <div>
                <h3>Opportunity Match</h3>
                <p>
                  When a suitable position is available, we connect your
                  profile with the relevant opportunity.
                </p>
              </div>
            </div>

            <div className="candidate-process-item">
              <div className="candidate-process-number">04</div>

              <div>
                <h3>Interview & Support</h3>
                <p>
                  We help coordinate the recruitment process and keep you
                  informed along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Form */}
      <section className="candidate-profile-section section-padding">
        <div className="container">
          <div className="candidate-profile-grid">
            <div className="candidate-profile-info">
              <span className="eyebrow">SUBMIT YOUR PROFILE</span>

              <h2>
                Let employers
                <span> discover you.</span>
              </h2>

              <p>
                Complete the form and upload your latest resume. Our recruitment
                team will review your profile and consider it for relevant
                opportunities.
              </p>

              <div className="candidate-profile-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Your profile is reviewed by our recruitment team.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Your information is handled confidentially.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>You can update your profile when your experience changes.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>We'll consider you for suitable future opportunities.</span>
                </div>
              </div>

              <div className="candidate-profile-note">
                <UserRound size={20} />

                <div>
                  <strong>Looking for a specific role?</strong>
                  <p>
                    You can also explore our current vacancies and apply
                    directly to a position.
                  </p>

                  <Link to="/jobs">
                    View Open Positions
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="candidate-form-card">
              {submitted ? (
                <div className="candidate-success">
                  <div className="candidate-success-icon">
                    <CheckCircle2 size={34} />
                  </div>

                  <h3>Profile submitted!</h3>

                  <p>
                    Thank you for sharing your profile. Our recruitment team
                    will review your information and consider you for suitable
                    opportunities.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setResume(null);
                    }}
                  >
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <>
                  <div className="candidate-form-heading">
                    <h3>Candidate Profile</h3>

                    <p>
                      Please provide your current professional information.
                    </p>
                  </div>

                  <form
                    className="candidate-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="candidate-form-row">
                      <div className="form-group">
                        <label htmlFor="candidate-name">
                          Full Name <span>*</span>
                        </label>

                        <input
                          id="candidate-name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="candidate-email">
                          Email Address <span>*</span>
                        </label>

                        <input
                          id="candidate-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="candidate-form-row">
                      <div className="form-group">
                        <label htmlFor="candidate-phone">
                          Phone Number <span>*</span>
                        </label>

                        <input
                          id="candidate-phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="candidate-experience">
                          Experience <span>*</span>
                        </label>

                        <select
                          id="candidate-experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select experience</option>
                          <option value="Fresher">Fresher</option>
                          <option value="0–2 Years">0–2 Years</option>
                          <option value="1–3 Years">1–3 Years</option>
                          <option value="3–5 Years">3–5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div className="candidate-form-row">
                      <div className="form-group">
                        <label htmlFor="candidate-role">
                          Preferred Role <span>*</span>
                        </label>

                        <input
                          id="candidate-role"
                          name="preferredRole"
                          type="text"
                          placeholder="e.g. Frontend Developer"
                          value={formData.preferredRole}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="candidate-location">
                          Preferred Location
                        </label>

                        <input
                          id="candidate-location"
                          name="location"
                          type="text"
                          placeholder="e.g. Indore"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="candidate-resume">
                        Resume <span>*</span>
                      </label>

                      <label className="candidate-resume-upload">
                        <Upload size={22} />

                        <strong>
                          {resume
                            ? resume.name
                            : "Upload your latest resume"}
                        </strong>

                        <span>
                          PDF, DOC or DOCX • Maximum 5 MB
                        </span>

                        <input
                          id="candidate-resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-group">
                      <label htmlFor="candidate-message">
                        About You
                      </label>

                      <textarea
                        id="candidate-message"
                        name="message"
                        rows="5"
                        placeholder="Briefly tell us about your experience, skills or career goals..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <label className="candidate-consent">
                      <input type="checkbox" required />

                      <span>
                        I agree to the processing of my information for
                        recruitment purposes.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="btn btn-primary candidate-submit"
                    >
                      Submit Profile
                      <Send size={17} />
                    </button>

                    <p className="candidate-form-note">
                      We respect your privacy and will only use your
                      information for recruitment-related purposes.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="candidate-final-cta">
        <div className="container">
          <div className="candidate-final-cta-inner">
            <div>
              <span className="eyebrow">START YOUR SEARCH</span>

              <h2>
                Ready for your next
                <span> career move?</span>
              </h2>

              <p>
                Explore our current job openings and find an opportunity that
                matches your skills.
              </p>
            </div>

            <Link to="/jobs" className="btn btn-light">
              Explore Jobs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Candidates;