import {
  ArrowRight,
  Target,
  Eye,
  HeartHandshake,
  Users,
  Search,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* =========================================
          PAGE HERO
      ========================================= */}

      <section className="inner-hero">
        <div className="container inner-hero-content">

          <span className="eyebrow">
            ABOUT TALENTBRIDGE
          </span>

          <h1>
            Helping people find
            <span> where they belong.</span>
          </h1>

          <p>
            We connect talented professionals with organizations where
            they can do meaningful work, grow their careers and create
            lasting impact.
          </p>

        </div>
      </section>


      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="section about-intro">

        <div className="container about-intro-grid">

          <div className="about-intro-label">
            <span className="eyebrow">
              WHO WE ARE
            </span>

            <div className="about-established">
              <strong>8+</strong>
              <span>Years of recruitment experience</span>
            </div>
          </div>

          <div className="about-intro-content">

            <h2>
              Recruitment is about
              <span> people, not just positions.</span>
            </h2>

            <p>
              TalentBridge is a professional recruitment and HR consultancy
              focused on helping businesses build stronger teams and helping
              professionals discover better career opportunities.
            </p>

            <p>
              We take the time to understand the people behind every
              requirement. From understanding a company's culture and
              business goals to learning about a candidate's ambitions,
              our approach is built around creating the right connection.
            </p>

            <p>
              Whether you're a growing startup, an established organization
              or a professional looking for your next opportunity, we aim
              to make recruitment simpler, faster and more human.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          MISSION / VISION
      ========================================= */}

      <section className="mission-section">

        <div className="container mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              <Target size={25} />
            </div>

            <span className="card-label">
              OUR MISSION
            </span>

            <h3>
              Make meaningful connections between
              people and opportunities.
            </h3>

            <p>
              Our mission is to provide reliable, transparent and
              people-focused recruitment solutions that create value
              for both candidates and employers.
            </p>

          </div>


          <div className="mission-card vision-card">

            <div className="mission-icon">
              <Eye size={25} />
            </div>

            <span className="card-label">
              OUR VISION
            </span>

            <h3>
              Become a trusted recruitment partner
              for businesses and professionals.
            </h3>

            <p>
              We envision a future where finding the right opportunity
              or the right talent is simple, transparent and built on trust.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          VALUES
      ========================================= */}

      <section className="section values-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              OUR VALUES
            </span>

            <h2>
              Principles that guide
              <span> everything we do.</span>
            </h2>

            <p>
              Our values shape how we work with candidates, clients
              and each other.
            </p>

          </div>


          <div className="values-grid">

            <div className="value-card">

              <div className="value-icon">
                <HeartHandshake size={23} />
              </div>

              <h3>People First</h3>

              <p>
                We treat every candidate and client as a person,
                not simply as a profile or requirement.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                <CheckCircle2 size={23} />
              </div>

              <h3>Integrity</h3>

              <p>
                We believe honest communication and transparency
                create stronger professional relationships.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                <Users size={23} />
              </div>

              <h3>Collaboration</h3>

              <p>
                We work closely with clients and candidates to
                understand their needs and achieve better outcomes.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                <Target size={23} />
              </div>

              <h3>Excellence</h3>

              <p>
                We continuously improve our recruitment process to
                deliver quality candidates and better experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW WE WORK
      ========================================= */}

      <section className="about-process">

        <div className="container about-process-grid">

          <div className="about-process-content">

            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2>
              A recruitment process
              <span> built around understanding.</span>
            </h2>

            <p>
              We don't believe in a one-size-fits-all recruitment
              process. Every organization and every candidate has
              different goals.
            </p>

            <div className="about-process-list">

              <div>
                <span>01</span>

                <div>
                  <h3>Listen</h3>
                  <p>
                    We understand your requirements, expectations
                    and goals before beginning the search.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <h3>Identify</h3>
                  <p>
                    We identify suitable candidates through focused
                    sourcing and careful screening.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <h3>Match</h3>
                  <p>
                    We evaluate skills, experience and cultural fit
                    to create stronger matches.
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>

                <div>
                  <h3>Support</h3>
                  <p>
                    We remain involved throughout the hiring process
                    to help create a smooth experience.
                  </p>
                </div>
              </div>

            </div>

          </div>


          <div className="about-process-visual">

            <div className="about-stat-card">

              <div className="about-stat-icon">
                <Building2 size={22} />
              </div>

              <span>Trusted by</span>

              <strong>120+</strong>

              <p>
                organizations and growing teams
              </p>

            </div>


            <div className="about-stat-card second">

              <div className="about-stat-icon">
                <Users size={22} />
              </div>

              <span>Career impact</span>

              <strong>500+</strong>

              <p>
                professionals placed successfully
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <div className="container about-cta-inner">

          <div>

            <span className="eyebrow">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for talent or
              <span> your next opportunity?</span>
            </h2>

            <p>
              Tell us what you're looking for and let's start
              a conversation.
            </p>

          </div>

          <div className="about-cta-buttons">

            <Link to="/jobs" className="btn btn-white">
              Find a Job
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

export default About;