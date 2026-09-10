import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  Clock3,
  Send,
  CheckCircle2,
  MessageCircle,
  BriefcaseBusiness,
} from "lucide-react";

const faqs = [
  {
    question: "How can I apply for a job?",
    answer:
      "You can browse our current job openings and apply directly from the relevant job details page. You can also submit your profile through our Candidates page.",
  },
  {
    question: "Can companies contact you for recruitment?",
    answer:
      "Yes. Employers can submit their hiring requirements through our Employers page or contact our team directly.",
  },
  {
    question: "Do you offer contract staffing?",
    answer:
      "Yes. We provide flexible staffing solutions for contract, project-based and ongoing workforce requirements.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our team reviews enquiries as they are received and will contact you to discuss your requirement and the next steps.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      await api.post("/contact-enquiries", {
        ...formData,
        consent: true,
      });

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact enquiry error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="inner-hero contact-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">GET IN TOUCH</span>

          <h1>
            Let's start a
            <span> conversation.</span>
          </h1>

          <p>
            Whether you're looking for your next opportunity or need help
            building your team, our recruitment team is here to help.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="contact-info-section section-padding">
        <div className="container">
          <div className="contact-info-grid">
            {/* Email */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={23} />
              </div>

              <span>Email Us</span>

              <h3>careerstalentbrize@gmail.com</h3>

              <p>
                Send us an email and our team will get back to you.
              </p>

              <a href="mailto:careerstalentbrize@gmail.com">
                Send an Email
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Phone */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={23} />
              </div>

              <span>Call Us</span>

              <h3>+91 93057 65097</h3>

              <p>
                Speak directly with our recruitment team.
              </p>

              <a href="tel:+919305765097">
                Call Our Team
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main contact */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left */}
            <div className="contact-main-info">
              <span className="eyebrow">TALK TO US</span>

              <h2>
                Have a question?
                <span> We're here to help.</span>
              </h2>

              <p>
                Tell us what you need and a member of our team will get in
                touch with you. We work with both candidates and employers, so
                choose the subject that best describes your enquiry.
              </p>

              <div className="contact-detail-list">
                {/* Email */}
                <div>
                  <div className="contact-detail-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>careerstalentbrize@gmail.com</strong>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="contact-detail-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>+91 93057 65097</strong>
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <div className="contact-detail-icon">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <span>Working Hours</span>
                    <strong>
                      Monday – Saturday, 9:30 AM – 6:30 PM
                    </strong>
                  </div>
                </div>
              </div>

              <div className="contact-audience-links">
                <Link to="/jobs">
                  <BriefcaseBusiness size={19} />

                  <div>
                    <strong>Looking for a job?</strong>
                    <span>Explore current opportunities</span>
                  </div>

                  <ArrowRight size={16} />
                </Link>

                <Link to="/employers">
                  <MessageCircle size={19} />

                  <div>
                    <strong>Looking to hire?</strong>
                    <span>Tell us about your requirement</span>
                  </div>

                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3>Message sent successfully!</h3>

                  <p>
                    Thank you for contacting TalentBridge. Our team will review
                    your enquiry and get back to you soon.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-heading">
                    <span className="eyebrow">SEND A MESSAGE</span>

                    <h3>How can we help?</h3>

                    <p>
                      Fill in the details below and we'll get back to you.
                    </p>
                  </div>

                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">
                          Full Name <span>*</span>
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email">
                          Email Address <span>*</span>
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="form-group">
                        <label htmlFor="contact-phone">
                          Phone Number
                        </label>

                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-subject">
                          Subject <span>*</span>
                        </label>

                        <select
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select a subject
                          </option>

                          <option value="Job Opportunity">
                            Job Opportunity
                          </option>

                          <option value="Candidate Support">
                            Candidate Support
                          </option>

                          <option value="Hiring Requirement">
                            Hiring Requirement
                          </option>

                          <option value="Recruitment Services">
                            Recruitment Services
                          </option>

                          <option value="General Enquiry">
                            General Enquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message">
                        Message <span>*</span>
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows="7"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <label className="contact-consent">
                      <input type="checkbox" required />

                      <span>
                        I agree to be contacted regarding this enquiry.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="btn btn-primary contact-submit"
                    >
                      Send Message
                      <Send size={17} />
                    </button>

                    <p className="contact-form-note">
                      Your information will be kept confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq section-padding">
        <div className="container">
          <div className="contact-faq-grid">
            <div className="contact-faq-heading">
              <span className="eyebrow">QUICK ANSWERS</span>

              <h2>
                Frequently asked
                <span> questions.</span>
              </h2>

              <p>
                Can't find what you're looking for? Send us a message and our
                team will be happy to help.
              </p>

              <Link to="/contact" className="text-arrow-link">
                Contact Our Team
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>

                      <span className="faq-plus">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final-cta">
        <div className="container">
          <div className="contact-final-cta-inner">
            <div>
              <span className="eyebrow">LET'S CONNECT</span>

              <h2>
                Your next opportunity
                <span> could start with a conversation.</span>
              </h2>

              <p>
                Whether you're hiring or looking for your next role, we're
                ready to help.
              </p>
            </div>

            <div className="contact-final-actions">
              <Link to="/jobs" className="btn btn-light">
                Find a Job
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/employers"
                className="contact-final-secondary"
              >
                Hire Talent
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;