import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M8 7H17V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="footer-logo-text">
              Talent<span>Bridge</span>
            </span>
          </Link>

          <p className="footer-description">
            Connecting exceptional talent with forward-thinking
            organizations through smarter recruitment and HR solutions.
          </p>

          {/* Social Media */}
          <div className="social-links">

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.75 3 4.7c0 .95.65 1.7 1.75 1.7S6.5 5.65 6.5 4.7C6.5 3.75 5.85 3 4.75 3ZM21 13.85C21 10.2 19.05 8 15.95 8c-1.55 0-2.6.85-3.05 1.65V8.5H9.5V21H13v-6.7c0-1.75.35-3.45 2.5-3.45 2.1 0 2.15 1.9 2.15 3.55V21H21v-7.15Z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="social-icon"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
              </svg>
            </a>

          </div>
        </div>


        {/* Company */}
        <div className="footer-column">

          <h4>Company</h4>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/jobs">
            Current Jobs
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* For You */}
        <div className="footer-column">

          <h4>For You</h4>

          <Link to="/candidates">
            For Candidates
          </Link>

          <Link to="/employers">
            For Employers
          </Link>

          <Link to="/jobs">
            Find a Job
          </Link>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h4>Contact</h4>

          <p>
            hello@talentbridge.com
          </p>

          <p>
            +91 90000 00000
          </p>

          <p>
            Indore, Madhya Pradesh, India
          </p>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} TalentBridge.
            All rights reserved.
          </p>

          <div className="footer-legal">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;