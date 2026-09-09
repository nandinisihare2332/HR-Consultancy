import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Database,
  LockKeyhole,
  UserCheck,
  Mail,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you use the TalentBridge website, we may collect information
          that you voluntarily provide to us. This may include your name,
          email address, phone number, location, employment details, resume,
          job preferences, and other information submitted through our forms.
        </p>
        <p>
          Employers may also provide company details, hiring requirements,
          job descriptions, and contact information when requesting our
          recruitment services.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We use the information you provide to deliver recruitment and
          staffing services and to respond to enquiries.
        </p>

        <ul>
          <li>To process job applications and candidate profiles.</li>
          <li>To contact candidates about relevant opportunities.</li>
          <li>To understand and respond to employer hiring requirements.</li>
          <li>To respond to general contact enquiries.</li>
          <li>To improve our website and recruitment services.</li>
          <li>To maintain the security and proper operation of our website.</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Candidate & Resume Information",
    content: (
      <>
        <p>
          If you submit a resume or candidate profile, the information
          contained in that submission may be reviewed by our recruitment
          team for the purpose of evaluating your suitability for available
          or future opportunities.
        </p>
        <p>
          We may use relevant candidate information when communicating with
          employers regarding suitable recruitment opportunities. We do not
          guarantee placement or employment as a result of submitting a
          profile or application.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Sharing of Information",
    content: (
      <>
        <p>
          We may share relevant candidate information with prospective
          employers when it is necessary for recruitment purposes and where
          appropriate to the services being provided.
        </p>
        <p>
          We may also work with service providers that support website
          hosting, data storage, communication, security, or other business
          operations. Such providers should only receive information
          necessary to perform their services.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable measures to protect the information submitted
          through our website from unauthorized access, misuse, alteration,
          disclosure, or loss.
        </p>
        <p>
          However, no internet-based system can be guaranteed to be completely
          secure. Users should avoid submitting unnecessary confidential
          information through public website forms.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Cookies & Website Usage",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to support
          essential functionality, understand website usage, and improve the
          user experience.
        </p>
        <p>
          You can manage or disable cookies through your browser settings.
          Some website functionality may be affected if certain cookies are
          disabled.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Third-Party Websites",
    content: (
      <p>
        Our website may contain links to third-party websites or services.
        TalentBridge is not responsible for the privacy practices, content,
        or security of external websites. We recommend reviewing the privacy
        policies of third-party websites before providing them with personal
        information.
      </p>
    ),
  },
  {
    number: "08",
    title: "Your Choices & Rights",
    content: (
      <>
        <p>
          Depending on applicable laws, you may have rights regarding the
          personal information we hold about you. These may include requesting
          access to, correction of, or deletion of your information.
        </p>
        <p>
          If you would like to ask about information submitted through our
          website, please contact our team using the details provided below.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes to our services, website, or applicable requirements. Any
        updated version will be published on this page with a revised
        effective date.
      </p>
    ),
  },
];

function Privacy() {
  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="inner-hero legal-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">PRIVACY & SECURITY</span>

          <h1>
            Your privacy
            <span> matters to us.</span>
          </h1>

          <p>
            We believe your personal information should be handled with care,
            transparency, and respect.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="legal-intro section-padding">
        <div className="container">
          <div className="legal-intro-card">
            <div className="legal-intro-icon">
              <ShieldCheck size={30} />
            </div>

            <div>
              <span className="eyebrow">PRIVACY POLICY</span>

              <h2>Protecting the information you share with us.</h2>

              <p>
                This Privacy Policy explains how TalentBridge collects, uses,
                stores, and protects information provided through our website
                and recruitment services.
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

                <a href="#information">Information We Collect</a>
                <a href="#usage">How We Use Information</a>
                <a href="#candidate">Candidate Information</a>
                <a href="#sharing">Sharing Information</a>
                <a href="#security">Data Security</a>
                <a href="#cookies">Cookies</a>
                <a href="#rights">Your Rights</a>
                <a href="#changes">Policy Changes</a>
              </div>

              <div className="legal-help-card">
                <div className="legal-help-icon">
                  <Mail size={20} />
                </div>

                <h3>Have a question?</h3>

                <p>
                  If you have questions about how we handle your information,
                  our team is happy to help.
                </p>

                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>

            {/* Policy */}
            <article className="legal-article">
              <div id="information" className="legal-section">
                <span className="legal-number">01</span>
                <h2>Information We Collect</h2>

                <p>
                  When you use the TalentBridge website, we may collect
                  information that you voluntarily provide to us. This may
                  include your name, email address, phone number, location,
                  employment details, resume, job preferences, and other
                  information submitted through our forms.
                </p>

                <p>
                  Employers may also provide company details, hiring
                  requirements, job descriptions, and contact information when
                  requesting our recruitment services.
                </p>
              </div>

              <div id="usage" className="legal-section">
                <span className="legal-number">02</span>
                <h2>How We Use Your Information</h2>

                <p>
                  We use the information you provide to deliver recruitment and
                  staffing services and to respond to enquiries.
                </p>

                <ul>
                  <li>
                    To process job applications and candidate profiles.
                  </li>
                  <li>
                    To contact candidates about relevant opportunities.
                  </li>
                  <li>
                    To understand and respond to employer hiring requirements.
                  </li>
                  <li>
                    To respond to general contact enquiries.
                  </li>
                  <li>
                    To improve our website and recruitment services.
                  </li>
                  <li>
                    To maintain the security and proper operation of our
                    website.
                  </li>
                </ul>
              </div>

              <div id="candidate" className="legal-section">
                <span className="legal-number">03</span>
                <h2>Candidate & Resume Information</h2>

                <p>
                  If you submit a resume or candidate profile, the information
                  contained in that submission may be reviewed by our
                  recruitment team for the purpose of evaluating your
                  suitability for available or future opportunities.
                </p>

                <p>
                  We may use relevant candidate information when communicating
                  with employers regarding suitable recruitment opportunities.
                  We do not guarantee placement or employment as a result of
                  submitting a profile or application.
                </p>
              </div>

              <div id="sharing" className="legal-section">
                <span className="legal-number">04</span>
                <h2>Sharing of Information</h2>

                <p>
                  We may share relevant candidate information with prospective
                  employers when it is necessary for recruitment purposes and
                  where appropriate to the services being provided.
                </p>

                <p>
                  We may also work with service providers that support website
                  hosting, data storage, communication, security, or other
                  business operations. Such providers should only receive
                  information necessary to perform their services.
                </p>
              </div>

              <div id="security" className="legal-section">
                <span className="legal-number">05</span>
                <h2>Data Security</h2>

                <p>
                  We take reasonable measures to protect the information
                  submitted through our website from unauthorized access,
                  misuse, alteration, disclosure, or loss.
                </p>

                <div className="legal-highlight">
                  <LockKeyhole size={20} />

                  <p>
                    No internet-based system can be guaranteed to be completely
                    secure. Please avoid submitting unnecessary confidential
                    information through public website forms.
                  </p>
                </div>
              </div>

              <div id="cookies" className="legal-section">
                <span className="legal-number">06</span>
                <h2>Cookies & Website Usage</h2>

                <p>
                  Our website may use cookies or similar technologies to
                  support essential functionality, understand website usage,
                  and improve the user experience.
                </p>

                <p>
                  You can manage or disable cookies through your browser
                  settings. Some website functionality may be affected if
                  certain cookies are disabled.
                </p>
              </div>

              <div className="legal-section">
                <span className="legal-number">07</span>
                <h2>Third-Party Websites</h2>

                <p>
                  Our website may contain links to third-party websites or
                  services. TalentBridge is not responsible for the privacy
                  practices, content, or security of external websites.
                </p>

                <p>
                  We recommend reviewing the privacy policies of third-party
                  websites before providing them with personal information.
                </p>
              </div>

              <div id="rights" className="legal-section">
                <span className="legal-number">08</span>
                <h2>Your Choices & Rights</h2>

                <p>
                  Depending on applicable laws, you may have rights regarding
                  the personal information we hold about you. These may include
                  requesting access to, correction of, or deletion of your
                  information.
                </p>

                <p>
                  If you would like to ask about information submitted through
                  our website, please contact our team using the details
                  provided below.
                </p>

                <div className="legal-rights-grid">
                  <div>
                    <UserCheck size={19} />
                    <strong>Access</strong>
                    <span>Ask about information we hold.</span>
                  </div>

                  <div>
                    <Database size={19} />
                    <strong>Correction</strong>
                    <span>Request updates to your information.</span>
                  </div>

                  <div>
                    <LockKeyhole size={19} />
                    <strong>Deletion</strong>
                    <span>Ask us about deleting information.</span>
                  </div>
                </div>
              </div>

              <div id="changes" className="legal-section">
                <span className="legal-number">09</span>
                <h2>Changes to This Policy</h2>

                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes to our services, website, or applicable
                  requirements.
                </p>

                <p>
                  Any updated version will be published on this page with a
                  revised effective date.
                </p>
              </div>

              {/* Contact */}
              <div className="legal-contact-box">
                <div>
                  <span className="eyebrow">QUESTIONS?</span>

                  <h2>Need more information?</h2>

                  <p>
                    If you have any questions about this Privacy Policy or
                    your information, please contact the TalentBridge team.
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
    </div>
  );
}

export default Privacy;