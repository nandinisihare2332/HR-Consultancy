import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  UserCheck,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Mail,
} from "lucide-react";

function Terms() {
  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="inner-hero terms-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">LEGAL INFORMATION</span>

          <h1>
            Terms that keep
            <span> things clear.</span>
          </h1>

          <p>
            These terms explain how our website and recruitment services
            should be used by candidates, employers, and visitors.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="legal-intro section-padding">
        <div className="container">
          <div className="legal-intro-card">
            <div className="legal-intro-icon">
              <FileText size={30} />
            </div>

            <div>
              <span className="eyebrow">TERMS & CONDITIONS</span>

              <h2>
                Please read these terms before using our website.
              </h2>

              <p>
                By accessing or using the TalentBridge website, you agree to
                use the website responsibly and in accordance with these
                Terms & Conditions.
              </p>

              <p className="legal-updated">
                <strong>Effective date:</strong> September 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="legal-content section-padding">
        <div className="container">
          <div className="legal-layout">
            {/* Sidebar */}
            <aside className="legal-sidebar">
              <div className="legal-sidebar-card">
                <span>ON THIS PAGE</span>

                <a href="#acceptance">Acceptance of Terms</a>
                <a href="#website">Website Usage</a>
                <a href="#jobs">Job Listings</a>
                <a href="#candidates">Candidates</a>
                <a href="#employers">Employers</a>
                <a href="#applications">Applications</a>
                <a href="#intellectual">Intellectual Property</a>
                <a href="#liability">Limitation of Liability</a>
                <a href="#changes">Changes to Terms</a>
              </div>

              <div className="legal-help-card">
                <div className="legal-help-icon">
                  <Mail size={20} />
                </div>

                <h3>Need help?</h3>

                <p>
                  If you have any questions regarding these terms, our team is
                  available to assist you.
                </p>

                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>

            {/* Article */}
            <article className="legal-article">
              <div id="acceptance" className="legal-section">
                <span className="legal-number">01</span>

                <h2>Acceptance of Terms</h2>

                <p>
                  By accessing, browsing, or using the TalentBridge website,
                  you acknowledge that you have read and understood these
                  Terms & Conditions and agree to comply with them.
                </p>

                <p>
                  If you do not agree with these terms, please discontinue use
                  of the website.
                </p>
              </div>

              <div id="website" className="legal-section">
                <span className="legal-number">02</span>

                <h2>Website Usage</h2>

                <p>
                  The website is intended to provide information about
                  recruitment, staffing, employment opportunities, and related
                  services.
                </p>

                <ul>
                  <li>
                    You must provide accurate information when using our
                    forms.
                  </li>
                  <li>
                    You must not use the website for unlawful or fraudulent
                    activities.
                  </li>
                  <li>
                    You must not attempt to interfere with website security or
                    functionality.
                  </li>
                  <li>
                    You must not submit misleading, abusive, or inappropriate
                    content.
                  </li>
                </ul>
              </div>

              <div id="jobs" className="legal-section">
                <span className="legal-number">03</span>

                <h2>Job Listings & Opportunities</h2>

                <p>
                  Job vacancies displayed on the website are provided for
                  informational and recruitment purposes. Job availability,
                  requirements, compensation, locations, and other details may
                  change without notice.
                </p>

                <div className="legal-highlight">
                  <BriefcaseBusiness size={20} />

                  <p>
                    A job listing or application does not guarantee an
                    interview, selection, employment, or any specific outcome.
                    Final hiring decisions are made by the relevant employer.
                  </p>
                </div>
              </div>

              <div id="candidates" className="legal-section">
                <span className="legal-number">04</span>

                <h2>Candidate Responsibilities</h2>

                <p>
                  Candidates are responsible for ensuring that the information
                  provided in their profiles, resumes, and applications is
                  accurate and up to date.
                </p>

                <p>
                  Candidates should not provide false qualifications,
                  experience, documents, or other information that could
                  misrepresent their professional background.
                </p>

                <div className="legal-rights-grid">
                  <div>
                    <UserCheck size={19} />

                    <strong>Accurate Information</strong>

                    <span>
                      Keep your profile and application details truthful.
                    </span>
                  </div>

                  <div>
                    <FileText size={19} />

                    <strong>Valid Documents</strong>

                    <span>
                      Submit genuine and relevant documents.
                    </span>
                  </div>

                  <div>
                    <ShieldCheck size={19} />

                    <strong>Responsible Use</strong>

                    <span>
                      Use recruitment services professionally.
                    </span>
                  </div>
                </div>
              </div>

              <div id="employers" className="legal-section">
                <span className="legal-number">05</span>

                <h2>Employer Responsibilities</h2>

                <p>
                  Employers using our recruitment services are responsible for
                  providing accurate information regarding their organization,
                  vacancies, job requirements, compensation, work location,
                  and hiring expectations.
                </p>

                <p>
                  Employers are responsible for making their own hiring
                  decisions and complying with all applicable employment laws
                  and regulations.
                </p>
              </div>

              <div id="applications" className="legal-section">
                <span className="legal-number">06</span>

                <h2>Applications & Recruitment</h2>

                <p>
                  Submitting an application through TalentBridge allows our
                  recruitment team to review the information provided for
                  relevant opportunities.
                </p>

                <p>
                  We may contact candidates when their profile appears
                  relevant to an available or future opportunity. However,
                  submitting an application does not create an employment
                  relationship with TalentBridge.
                </p>

                <p>
                  We do not guarantee that every applicant will receive a
                  response, interview, placement, or employment offer.
                </p>
              </div>

              <div className="legal-section">
                <span className="legal-number">07</span>

                <h2>Recruitment Services</h2>

                <p>
                  TalentBridge may provide recruitment, staffing, executive
                  search, HR consulting, payroll, and related workforce
                  services to employers.
                </p>

                <p>
                  The scope, duration, fees, responsibilities, and other
                  commercial terms of employer engagements may be defined
                  separately through agreements between the relevant parties.
                </p>
              </div>

              <div id="intellectual" className="legal-section">
                <span className="legal-number">08</span>

                <h2>Intellectual Property</h2>

                <p>
                  Unless otherwise stated, the content of this website,
                  including text, branding, graphics, layouts, logos, and
                  other materials, belongs to TalentBridge or its respective
                  licensors.
                </p>

                <p>
                  Website content may not be copied, reproduced, distributed,
                  modified, or commercially used without appropriate
                  authorization.
                </p>
              </div>

              <div id="liability" className="legal-section">
                <span className="legal-number">09</span>

                <h2>Limitation of Liability</h2>

                <p>
                  We make reasonable efforts to keep the information on our
                  website useful and current. However, we do not guarantee that
                  all information will always be complete, accurate, or
                  continuously available.
                </p>

                <p>
                  TalentBridge is not responsible for decisions made by
                  candidates or employers based solely on information available
                  on the website.
                </p>

                <p>
                  To the extent permitted by applicable law, TalentBridge will
                  not be liable for indirect or consequential losses arising
                  from the use of the website or recruitment information.
                </p>
              </div>

              <div className="legal-section">
                <span className="legal-number">10</span>

                <h2>Third-Party Links</h2>

                <p>
                  Our website may contain links to external websites,
                  platforms, or services. These links may be provided for
                  convenience and do not necessarily indicate endorsement.
                </p>

                <p>
                  We are not responsible for the content, availability, or
                  practices of third-party websites.
                </p>
              </div>

              <div className="legal-section">
                <span className="legal-number">11</span>

                <h2>Privacy</h2>

                <p>
                  Information submitted through our website is handled
                  according to our Privacy Policy.
                </p>

                <p>
                  Please review our{" "}
                  <Link to="/privacy" className="legal-inline-link">
                    Privacy Policy
                  </Link>{" "}
                  to understand how information may be collected and used.
                </p>
              </div>

              <div id="changes" className="legal-section">
                <span className="legal-number">12</span>

                <h2>Changes to These Terms</h2>

                <p>
                  We may update these Terms & Conditions from time to time.
                  Changes will become effective when the updated terms are
                  published on this website.
                </p>

                <p>
                  Your continued use of the website after changes are
                  published indicates acceptance of the updated terms.
                </p>
              </div>

              {/* Final contact */}
              <div className="legal-contact-box">
                <div>
                  <span className="eyebrow">QUESTIONS?</span>

                  <h2>Want to know more?</h2>

                  <p>
                    If you have questions about these Terms & Conditions,
                    please contact the TalentBridge team.
                  </p>
                </div>

                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-final-cta terms-final-cta">
        <div className="container">
          <div className="contact-final-cta-inner">
            <div>
              <span className="eyebrow">TALENTBRIDGE</span>

              <h2>
                Ready to take the
                <span> next step?</span>
              </h2>

              <p>
                Explore opportunities or connect with our recruitment team.
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

export default Terms;