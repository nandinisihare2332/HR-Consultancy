import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  Building2,
  CheckCircle2,
  Search,
  FileCheck2,
  Handshake,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">
        <div className="container hero-grid">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              Your trusted recruitment partner
            </div>

            <h1>
              Connecting great talent
              <span> with great opportunities.</span>
            </h1>

            <p className="hero-description">
              We help ambitious professionals find meaningful careers
              and help businesses build high-performing teams through
              smarter recruitment and HR solutions.
            </p>

            <div className="hero-buttons">

              <Link to="/jobs" className="btn btn-primary">
                Find a Job
                <ArrowRight size={18} />
              </Link>

              <Link to="/employers" className="btn btn-outline">
                Hire Talent
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="hero-trust">

              <div className="trust-avatars">
                <span>AS</span>
                <span>RK</span>
                <span>MP</span>
                <span>+</span>
              </div>

              <div>
                <strong>Trusted by growing teams</strong>
                <small>Across multiple industries</small>
              </div>

            </div>

          </div>


          {/* Hero Visual */}

          <div className="hero-visual">

            <div className="hero-card-main">

              <div className="hero-card-top">
                <div className="hero-card-icon">
                  <BriefcaseBusiness size={22} />
                </div>

                <div>
                  <span>Open opportunities</span>
                  <strong>Find your next role</strong>
                </div>
              </div>

              <div className="hero-job-preview">

                <div className="job-company-icon">
                  T
                </div>

                <div className="job-preview-info">
                  <strong>Software Developer</strong>
                  <span>Indore · Full Time</span>
                </div>

                <span className="job-arrow">
                  <ChevronRight size={18} />
                </span>

              </div>

              <div className="hero-job-preview">

                <div className="job-company-icon second">
                  F
                </div>

                <div className="job-preview-info">
                  <strong>HR Executive</strong>
                  <span>Bhopal · Full Time</span>
                </div>

                <span className="job-arrow">
                  <ChevronRight size={18} />
                </span>

              </div>

              <Link to="/jobs" className="view-all-jobs">
                View all openings
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="hero-floating-card floating-top">
              <CheckCircle2 size={20} />
              <div>
                <strong>98%</strong>
                <span>Placement success</span>
              </div>
            </div>


            <div className="hero-floating-card floating-bottom">
              <Users size={20} />
              <div>
                <strong>500+</strong>
                <span>Professionals placed</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat-item">
            <strong>500+</strong>
            <span>Professionals placed</span>
          </div>

          <div className="stat-item">
            <strong>120+</strong>
            <span>Hiring partners</span>
          </div>

          <div className="stat-item">
            <strong>95%</strong>
            <span>Successful placements</span>
          </div>

          <div className="stat-item">
            <strong>8+</strong>
            <span>Years of experience</span>
          </div>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="section intro-section">

        <div className="container intro-grid">

          <div className="section-label">
            ABOUT OUR APPROACH
          </div>

          <div className="intro-content">

            <h2>
              Recruitment that puts
              <span> people first.</span>
            </h2>

            <p>
              At TalentBridge, we believe successful recruitment is
              about more than filling vacancies. It's about understanding
              people, businesses, goals and culture to create connections
              that last.
            </p>

            <Link to="/about" className="text-link">
              Discover our approach
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          SERVICES
      ========================================= */}

      <section className="section services-section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="eyebrow">WHAT WE DO</span>

              <h2>
                Recruitment solutions
                <span> built for your needs.</span>
              </h2>
            </div>

            <Link to="/services" className="text-link">
              View all services
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="services-grid">

            <div className="service-card">

              <div className="service-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <span className="service-number">01</span>

              <h3>Permanent Recruitment</h3>

              <p>
                Find skilled professionals who are ready to grow
                with your organization for the long term.
              </p>

              <Link to="/services">
                Learn more
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Users size={24} />
              </div>

              <span className="service-number">02</span>

              <h3>Contract Staffing</h3>

              <p>
                Flexible workforce solutions designed to help
                businesses scale quickly and efficiently.
              </p>

              <Link to="/services">
                Learn more
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Building2 size={24} />
              </div>

              <span className="service-number">03</span>

              <h3>IT Recruitment</h3>

              <p>
                Connect with developers, engineers and technology
                professionals with the skills you need.
              </p>

              <Link to="/services">
                Learn more
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Handshake size={24} />
              </div>

              <span className="service-number">04</span>

              <h3>HR Consulting</h3>

              <p>
                Practical HR support that helps organizations
                improve their people and hiring processes.
              </p>

              <Link to="/services">
                Learn more
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW WE WORK
      ========================================= */}

      <section className="section process-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">HOW IT WORKS</span>

            <h2>
              A simpler way to find
              <span> the right match.</span>
            </h2>

            <p>
              Our straightforward process keeps recruitment focused,
              transparent and efficient.
            </p>

          </div>


          <div className="process-grid">

            <div className="process-item">

              <div className="process-number">
                01
              </div>

              <Search size={23} />

              <h3>Understand</h3>

              <p>
                We understand your requirements, goals and expectations.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <div className="process-number">
                02
              </div>

              <Users size={23} />

              <h3>Identify</h3>

              <p>
                We search, screen and shortlist the most suitable talent.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <div className="process-number">
                03
              </div>

              <Handshake size={23} />

              <h3>Connect</h3>

              <p>
                We bring the right people and opportunities together.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <div className="process-number">
                04
              </div>

              <FileCheck2 size={23} />

              <h3>Place</h3>

              <p>
                We support both sides through the final hiring process.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY US
      ========================================= */}

      <section className="why-section">

        <div className="container why-grid">

          <div className="why-content">

            <span className="eyebrow">
              WHY TALENTBRIDGE
            </span>

            <h2>
              More than recruitment.
              <span> A long-term partnership.</span>
            </h2>

            <p>
              Whether you're looking for your next career opportunity
              or building your next great team, we're here to make
              the process easier.
            </p>

            <div className="why-list">

              <div>
                <CheckCircle2 size={20} />
                <span>Industry-focused recruitment expertise</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Thorough candidate screening</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Fast and transparent communication</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Long-term client relationships</span>
              </div>

            </div>

            <Link to="/about" className="btn btn-primary">
              Learn more about us
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="why-visual">

            <div className="why-main-card">

              <div className="why-card-header">
                <span>Our impact</span>

                <CheckCircle2 size={21} />
              </div>

              <strong>95%</strong>

              <p>
                successful placement rate
              </p>

              <div className="impact-bar">
                <span></span>
              </div>

            </div>


            <div className="why-small-card">
              <strong>120+</strong>
              <span>Companies trust us</span>
            </div>


            <div className="why-small-card second">
              <strong>500+</strong>
              <span>Careers started</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURED JOBS
      ========================================= */}

      <section className="section jobs-section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                CURRENT OPENINGS
              </span>

              <h2>
                Find your next
                <span> opportunity.</span>
              </h2>

            </div>

            <Link to="/jobs" className="text-link">
              View all jobs
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="featured-jobs">

            <div className="featured-job">

              <div className="company-letter">
                T
              </div>

              <div className="featured-job-info">

                <h3>Software Developer</h3>

                <p>
                  Technology · Indore
                </p>

                <div className="job-tags">
                  <span>Full Time</span>
                  <span>2–4 Years</span>
                  <span>React</span>
                </div>

              </div>

              <Link to="/jobs" className="job-view">
                <ArrowRight size={19} />
              </Link>

            </div>


            <div className="featured-job">

              <div className="company-letter second">
                F
              </div>

              <div className="featured-job-info">

                <h3>HR Executive</h3>

                <p>
                  Human Resources · Bhopal
                </p>

                <div className="job-tags">
                  <span>Full Time</span>
                  <span>1–3 Years</span>
                  <span>Recruitment</span>
                </div>

              </div>

              <Link to="/jobs" className="job-view">
                <ArrowRight size={19} />
              </Link>

            </div>


            <div className="featured-job">

              <div className="company-letter third">
                M
              </div>

              <div className="featured-job-info">

                <h3>Business Development Executive</h3>

                <p>
                  Sales · Indore
                </p>

                <div className="job-tags">
                  <span>Full Time</span>
                  <span>2–5 Years</span>
                  <span>Sales</span>
                </div>

              </div>

              <Link to="/jobs" className="job-view">
                <ArrowRight size={19} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CANDIDATE CTA
      ========================================= */}

      <section className="candidate-cta">

        <div className="container cta-grid">

          <div>

            <span className="eyebrow">
              FOR CANDIDATES
            </span>

            <h2>
              Your next career move
              <span> starts here.</span>
            </h2>

            <p>
              Explore opportunities that match your skills,
              experience and career ambitions.
            </p>

            <Link to="/jobs" className="btn btn-white">
              Explore Jobs
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="cta-number">
            <strong>500+</strong>
            <span>professionals placed</span>
          </div>

        </div>

      </section>


      {/* =========================================
          EMPLOYER CTA
      ========================================= */}

      <section className="employer-cta">

        <div className="container employer-grid">

          <div className="employer-icon">
            <Building2 size={30} />
          </div>

          <div>
            <span className="eyebrow">
              FOR EMPLOYERS
            </span>

            <h2>
              Build a team that
              <span> moves your business forward.</span>
            </h2>

            <p>
              Tell us what you're looking for and our recruitment
              team will help you find the right people.
            </p>
          </div>

          <Link to="/employers" className="btn btn-primary">
            Hire Talent
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* =========================================
          TESTIMONIALS
      ========================================= */}

      <section className="section testimonials-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              CLIENT STORIES
            </span>

            <h2>
              Trusted by teams
              <span> that value great people.</span>
            </h2>

          </div>


          <div className="testimonials-grid">

            <div className="testimonial">

              <div className="quote">
                "
              </div>

              <p>
                TalentBridge understood exactly what we needed.
                Their team helped us hire quickly without compromising
                on quality.
              </p>

              <div className="testimonial-person">
                <div>RK</div>

                <span>
                  <strong>Rahul Kapoor</strong>
                  HR Manager · Technology Company
                </span>
              </div>

            </div>


            <div className="testimonial">

              <div className="quote">
                "
              </div>

              <p>
                The entire hiring process was smooth and professional.
                We found the right candidates much faster than expected.
              </p>

              <div className="testimonial-person">
                <div>PS</div>

                <span>
                  <strong>Priya Sharma</strong>
                  Founder · Growing Startup
                </span>
              </div>

            </div>


            <div className="testimonial">

              <div className="quote">
                "
              </div>

              <p>
                They genuinely care about matching candidates with
                the right opportunities, not just closing positions.
              </p>

              <div className="testimonial-person">
                <div>AM</div>

                <span>
                  <strong>Arjun Mehta</strong>
                  Operations Head · Services Firm
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTACT CTA
      ========================================= */}

      <section className="contact-cta">

        <div className="container contact-cta-inner">

          <div>

            <span className="eyebrow">
              LET'S CONNECT
            </span>

            <h2>
              Ready to find the
              <span> right match?</span>
            </h2>

            <p>
              Whether you're hiring or looking for your next opportunity,
              we'd love to hear from you.
            </p>

          </div>

          <div className="contact-buttons">

            <Link to="/contact" className="btn btn-white">
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link to="/employers" className="btn btn-outline-white">
              Hire Talent
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;