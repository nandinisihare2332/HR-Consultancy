import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Users,
  Search,
  CheckCircle2,
  Handshake,
  Target,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Permanent Recruitment",
    description:
      "Find qualified professionals for long-term roles with a recruitment process designed around your business requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Contract Staffing",
    description:
      "Scale your workforce quickly with flexible staffing solutions for short-term, project-based and ongoing requirements.",
  },
  {
    icon: Search,
    title: "Specialized Hiring",
    description:
      "Access targeted talent for technical, leadership and specialized positions that require specific skills and experience.",
  },
  {
    icon: Target,
    title: "Talent Mapping",
    description:
      "Build stronger talent pipelines by identifying professionals who match your current and future workforce requirements.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about the role, skills, experience and number of professionals you need.",
  },
  {
    number: "02",
    title: "We Source Talent",
    description:
      "Our recruitment team searches across relevant talent pools and identifies suitable candidates.",
  },
  {
    number: "03",
    title: "Candidate Screening",
    description:
      "We evaluate profiles against your requirements before presenting suitable candidates.",
  },
  {
    number: "04",
    title: "Interview & Select",
    description:
      "We coordinate interviews and support communication throughout the selection process.",
  },
  {
    number: "05",
    title: "Onboard",
    description:
      "Once selected, we help coordinate the final stages so your new team member can get started smoothly.",
  },
];

function Employers() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    jobTitle: "",
    positions: "",
    hiringType: "",
    timeline: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const enquiryData = {
      ...formData,
      positions: formData.positions === "1"
        ? 1
        : formData.positions === "2-5"
        ? 2
        : formData.positions === "6-10"
        ? 6
        : 10,
      consent: true,
    };

    await api.post("/employer-enquiries", enquiryData);

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      jobTitle: "",
      positions: "",
      hiringType: "",
      timeline: "",
      message: "",
    });
  } catch (error) {
    console.error("Employer enquiry error:", error);

    alert(
      error.response?.data?.message ||
        "Unable to submit enquiry. Please try again."
    );
  }
};

  return (
    <div className="employers-page">
      {/* Hero */}
      <section className="inner-hero employers-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">FOR EMPLOYERS</span>

          <h1>
            Build a stronger team
            <span> with the right talent.</span>
          </h1>

          <p>
            Tell us what you are looking for and our recruitment team will
            help you find professionals who match your business, role and
            culture.
          </p>

          <div className="employer-hero-actions">
            <a href="#employer-enquiry" className="btn btn-light">
              Hire Talent
              <ArrowRight size={18} />
            </a>

            <Link to="/contact" className="hero-text-link">
              Talk to our team
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Employers</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="employer-intro section-padding">
        <div className="container">
          <div className="employer-intro-grid">
            <div>
              <span className="eyebrow">YOUR HIRING PARTNER</span>

              <h2>
                Great teams start with
                <span> great people.</span>
              </h2>
            </div>

            <div className="employer-intro-content">
              <p>
                Finding the right candidate can be challenging when your team
                is already focused on running the business. We make the
                recruitment process simpler by helping you source, screen and
                connect with qualified professionals.
              </p>

              <p>
                Whether you need one specialist or are building an entire
                team, our recruitment solutions can be adapted to your hiring
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="employer-solutions section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">OUR SOLUTIONS</span>

            <h2>
              Recruitment support that
              <span> works for your business.</span>
            </h2>

            <p>
              Flexible hiring solutions designed to help organizations find
              and retain the people they need.
            </p>
          </div>

          <div className="employer-solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  className="employer-solution-card"
                  key={solution.title}
                >
                  <div className="employer-solution-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <Link to="/contact">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why employers */}
      <section className="employer-why section-padding">
        <div className="container">
          <div className="employer-why-grid">
            <div className="employer-why-visual">
              <div className="employer-stat-main">
                <Building2 size={28} />

                <strong>120+</strong>

                <span>Organizations supported</span>
              </div>

              <div className="employer-floating-card">
                <CheckCircle2 size={18} />
                <span>Quality-focused recruitment</span>
              </div>

              <div className="employer-floating-card second">
                <Handshake size={18} />
                <span>Long-term partnerships</span>
              </div>
            </div>

            <div className="employer-why-content">
              <span className="eyebrow">WHY WORK WITH US</span>

              <h2>
                A recruitment partner
                <span> you can rely on.</span>
              </h2>

              <p>
                We combine a people-first approach with a structured
                recruitment process to help businesses make better hiring
                decisions.
              </p>

              <div className="employer-why-list">
                <div>
                  <CheckCircle2 size={20} />

                  <div>
                    <h4>Understanding your requirements</h4>
                    <p>
                      We take time to understand your role, team and business
                      before searching for candidates.
                    </p>
                  </div>
                </div>

                <div>
                  <CheckCircle2 size={20} />

                  <div>
                    <h4>Focused candidate screening</h4>
                    <p>
                      Candidate profiles are reviewed against the requirements
                      you provide.
                    </p>
                  </div>
                </div>

                <div>
                  <CheckCircle2 size={20} />

                  <div>
                    <h4>Clear communication</h4>
                    <p>
                      We keep the recruitment process organized and maintain
                      communication between all stakeholders.
                    </p>
                  </div>
                </div>

                <div>
                  <CheckCircle2 size={20} />

                  <div>
                    <h4>Long-term relationships</h4>
                    <p>
                      Our goal is to become a trusted extension of your hiring
                      team, not simply another recruitment vendor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="employer-process section-padding">
        <div className="container">
          <div className="employer-process-heading">
            <span className="eyebrow">HOW WE HIRE</span>

            <h2>
              From requirement
              <span> to right hire.</span>
            </h2>

            <p>
              Our process keeps hiring structured, transparent and focused on
              finding the right fit.
            </p>
          </div>

          <div className="employer-process-grid">
            {hiringSteps.map((step) => (
              <div className="employer-process-item" key={step.number}>
                <div className="employer-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        className="employer-enquiry section-padding"
        id="employer-enquiry"
      >
        <div className="container">
          <div className="employer-enquiry-grid">
            <div className="employer-enquiry-info">
              <span className="eyebrow">TELL US WHAT YOU NEED</span>

              <h2>
                Let's find the
                <span> right people.</span>
              </h2>

              <p>
                Share your hiring requirement with us. A member of our
                recruitment team will review your request and get in touch to
                discuss the next steps.
              </p>

              <div className="employer-enquiry-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Discuss your hiring requirements with our team.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Get recruitment support tailored to your needs.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Receive suitable candidate profiles.</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Build a stronger and more capable team.</span>
                </div>
              </div>

              <div className="employer-contact-card">
                <Building2 size={22} />

                <div>
                  <strong>Have an urgent requirement?</strong>

                  <p>
                    Contact our team directly and tell us how we can help.
                  </p>

                  <Link to="/contact">
                    Contact Us
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="employer-form-card">
              {submitted ? (
                <div className="employer-success">
                  <div className="employer-success-icon">
                    <CheckCircle2 size={35} />
                  </div>

                  <h3>Thank you for reaching out!</h3>

                  <p>
                    Your hiring requirement has been submitted successfully.
                    Our recruitment team will review the details and contact
                    you to discuss your requirement.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <>
                  <div className="employer-form-heading">
                    <h3>Hiring Requirement</h3>

                    <p>
                      Tell us a little about the position you need to fill.
                    </p>
                  </div>

                  <form
                    className="employer-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="employer-form-row">
                      <div className="form-group">
                        <label htmlFor="employer-name">
                          Your Name <span>*</span>
                        </label>

                        <input
                          id="employer-name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="employer-company">
                          Company Name <span>*</span>
                        </label>

                        <input
                          id="employer-company"
                          name="company"
                          type="text"
                          placeholder="Enter company name"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="employer-form-row">
                      <div className="form-group">
                        <label htmlFor="employer-email">
                          Business Email <span>*</span>
                        </label>

                        <input
                          id="employer-email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="employer-phone">
                          Phone Number <span>*</span>
                        </label>

                        <input
                          id="employer-phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="employer-form-row">
                      <div className="form-group">
                        <label htmlFor="employer-job-title">
                          Position to Hire <span>*</span>
                        </label>

                        <input
                          id="employer-job-title"
                          name="jobTitle"
                          type="text"
                          placeholder="e.g. Software Developer"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="employer-positions">
                          Number of Positions <span>*</span>
                        </label>

                        <select
                          id="employer-positions"
                          name="positions"
                          value={formData.positions}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select</option>
                          <option value="1">1 Position</option>
                          <option value="2-5">2–5 Positions</option>
                          <option value="6-10">6–10 Positions</option>
                          <option value="10+">10+ Positions</option>
                        </select>
                      </div>
                    </div>

                    <div className="employer-form-row">
                      <div className="form-group">
                        <label htmlFor="employer-hiring-type">
                          Hiring Type <span>*</span>
                        </label>

                        <select
                          id="employer-hiring-type"
                          name="hiringType"
                          value={formData.hiringType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select hiring type</option>
                          <option value="Permanent">
                            Permanent
                          </option>
                          <option value="Contract">
                            Contract
                          </option>
                          <option value="Internship">Internship</option>
                          <option value="Temporary">Temporary</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="employer-timeline">
                          Hiring Timeline
                        </label>

                        <select
                          id="employer-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediately">
                            Immediately
                          </option>
                          <option value="Within 2 weeks">
                            Within 2 weeks
                          </option>
                          <option value="Within 1 month">
                            Within 1 month
                          </option>
                          <option value="Flexible">
                            Flexible
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="employer-message">
                        Additional Details
                      </label>

                      <textarea
                        id="employer-message"
                        name="message"
                        rows="5"
                        placeholder="Tell us about the role, required skills, experience or any other requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <label className="employer-consent">
                      <input type="checkbox" required />

                      <span>
                        I agree to be contacted regarding this hiring
                        requirement.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="btn btn-primary employer-submit"
                    >
                      Submit Requirement
                      <Send size={17} />
                    </button>

                    <p className="employer-form-note">
                      Your information will be kept confidential and used only
                      for recruitment-related communication.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="employer-final-cta">
        <div className="container">
          <div className="employer-final-cta-inner">
            <div>
              <span className="eyebrow">READY TO HIRE?</span>

              <h2>
                Let's build your
                <span> next great team.</span>
              </h2>

              <p>
                Share your hiring requirements and let our recruitment experts
                help you find the right talent.
              </p>
            </div>

            <a href="#employer-enquiry" className="btn btn-light">
              Start Hiring
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Employers;