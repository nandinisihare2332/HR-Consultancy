import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  Code2,
  UserSearch,
  ClipboardCheck,
  FileCheck2,
  CheckCircle2,
  Building2,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BriefcaseBusiness,
    number: "01",
    title: "Permanent Recruitment",
    description:
      "We help businesses find qualified professionals for permanent positions through a structured and reliable recruitment process.",
    features: [
      "Candidate sourcing and screening",
      "Skill and experience assessment",
      "Interview coordination",
      "Offer and joining support",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions that help companies quickly scale their workforce according to changing business requirements.",
    features: [
      "Short-term and long-term staffing",
      "Workforce scalability",
      "Candidate screening",
      "Onboarding assistance",
    ],
  },
  {
    icon: Code2,
    number: "03",
    title: "IT Recruitment",
    description:
      "Specialized recruitment services for technology teams, connecting companies with developers, engineers and IT professionals.",
    features: [
      "Technical candidate sourcing",
      "Technology skill assessment",
      "Developer and engineering hiring",
      "Technical interview coordination",
    ],
  },
  {
    icon: UserSearch,
    number: "04",
    title: "Executive Search",
    description:
      "Targeted hiring support for leadership and senior-level positions where experience, expertise and cultural fit matter most.",
    features: [
      "Leadership talent identification",
      "Confidential candidate search",
      "Detailed candidate evaluation",
      "Executive hiring support",
    ],
  },
  {
    icon: ClipboardCheck,
    number: "05",
    title: "HR Consulting",
    description:
      "Practical HR guidance designed to help organizations build stronger teams, processes and workplace practices.",
    features: [
      "HR process improvement",
      "Workforce planning",
      "Talent management",
      "HR strategy support",
    ],
  },
  {
    icon: FileCheck2,
    number: "06",
    title: "Payroll & Compliance",
    description:
      "Reliable payroll and compliance support that helps businesses manage workforce administration efficiently.",
    features: [
      "Payroll coordination",
      "Employee documentation",
      "Compliance support",
      "Workforce administration",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your business, team structure and exact hiring requirements.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "Our team identifies suitable candidates through multiple recruitment channels and talent networks.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Candidates are screened against the role requirements, experience and relevant skills.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "We coordinate interviews, feedback and communication between candidates and employers.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Our support continues through the offer, joining and onboarding stages.",
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="inner-hero services-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">WHAT WE DO</span>

          <h1>
            Recruitment solutions built
            <span> around your needs.</span>
          </h1>

          <p>
            From finding the right talent to supporting your workforce
            strategy, we provide practical HR solutions that help businesses
            and professionals move forward.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro section-padding">
        <div className="container">
          <div className="services-intro-grid">
            <div>
              <span className="eyebrow">OUR EXPERTISE</span>

              <h2>
                More than recruitment.
                <span> A complete talent partner.</span>
              </h2>
            </div>

            <div className="services-intro-text">
              <p>
                Hiring the right people is about more than filling an open
                position. It is about understanding your business, identifying
                the right skills and creating a strong connection between
                people and opportunities.
              </p>

              <p>
                Our services are designed to make recruitment simpler,
                faster and more effective while giving candidates the support
                they need throughout their career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-list-section section-padding">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">OUR SERVICES</span>

            <h2>
              Solutions for every stage of
              <span> your talent journey.</span>
            </h2>

            <p>
              Whether you are hiring your first employee or building an entire
              team, our recruitment and HR services can adapt to your needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="service-link">
                    Discuss your requirement
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Candidate / Employer split */}
      <section className="services-audience section-padding">
        <div className="container">
          <div className="audience-grid">
            <div className="audience-card candidate-audience">
              <div className="audience-icon">
                <Users size={26} />
              </div>

              <span className="eyebrow">FOR CANDIDATES</span>

              <h2>Looking for your next opportunity?</h2>

              <p>
                Discover relevant opportunities, get career guidance and
                connect with employers looking for people with your skills.
              </p>

              <Link to="/jobs" className="btn btn-light">
                Explore Jobs
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="audience-card employer-audience">
              <div className="audience-icon">
                <Building2 size={26} />
              </div>

              <span className="eyebrow">FOR EMPLOYERS</span>

              <h2>Need the right people for your team?</h2>

              <p>
                Tell us what you are looking for and our recruitment team will
                help you identify and connect with suitable candidates.
              </p>

              <Link to="/employers" className="btn btn-primary">
                Hire Talent
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process section-padding">
        <div className="container">
          <div className="process-heading">
            <div>
              <span className="eyebrow">OUR PROCESS</span>

              <h2>
                A simple process.
                <span> Better outcomes.</span>
              </h2>
            </div>

            <p>
              We keep our recruitment process transparent and focused so that
              both employers and candidates always know what comes next.
            </p>
          </div>

          <div className="services-process-list">
            {process.map((item, index) => (
              <div className="process-row" key={item.number}>
                <div className="process-row-number">{item.number}</div>

                <div className="process-row-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {index !== process.length - 1 && (
                  <div className="process-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="services-why section-padding">
        <div className="container">
          <div className="services-why-grid">
            <div className="services-why-visual">
              <div className="why-visual-card">
                <Handshake size={36} />

                <strong>People first.</strong>

                <span>
                  Building meaningful connections between talent and
                  opportunity.
                </span>
              </div>

              <div className="why-mini-card">
                <strong>500+</strong>
                <span>Professionals connected</span>
              </div>

              <div className="why-mini-card second">
                <strong>120+</strong>
                <span>Organizations supported</span>
              </div>
            </div>

            <div className="services-why-content">
              <span className="eyebrow">WHY TALENTBRIDGE</span>

              <h2>
                Recruitment that focuses on
                <span> the right fit.</span>
              </h2>

              <p>
                We believe successful hiring happens when the right skills,
                expectations and culture come together. That is why we focus on
                quality rather than simply filling positions.
              </p>

              <div className="why-points">
                <div>
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Quality-focused screening</h4>
                    <p>
                      Candidates are evaluated against the requirements of
                      each role.
                    </p>
                  </div>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Transparent communication</h4>
                    <p>
                      Clear communication keeps employers and candidates
                      informed throughout the process.
                    </p>
                  </div>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Long-term relationships</h4>
                    <p>
                      We aim to build lasting relationships instead of
                      one-time recruitment transactions.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-final-cta">
        <div className="container">
          <div className="services-final-cta-inner">
            <div>
              <span className="eyebrow">LET'S WORK TOGETHER</span>

              <h2>
                Have a hiring requirement?
                <span> Let's talk.</span>
              </h2>

              <p>
                Share your requirement with us and discover how we can help
                you find the right talent.
              </p>
            </div>

            <Link to="/contact" className="btn btn-light">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;