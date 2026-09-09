import { useEffect, useState } from "react";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  ArrowRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "../services/api";

const jobTypes = [
  "All Types",
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Remote",
];

const experienceOptions = [
  "All Experience",
  "Fresher",
  "0–2 Years",
  "1–3 Years",
  "2–5 Years",
  "5+ Years",
];

const categories = [
  "All Categories",
  "IT & Technology",
  "Human Resources",
  "Sales & Marketing",
  "Customer Support",
  "Finance & Accounts",
];

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All Types");
  const [experience, setExperience] = useState("All Experience");
  const [category, setCategory] = useState("All Categories");

  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/jobs");

      setJobs(response.data.jobs || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError("Unable to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const searchValue = search.trim().toLowerCase();
    const locationValue = location.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      job.title?.toLowerCase().includes(searchValue) ||
      job.company?.toLowerCase().includes(searchValue) ||
      job.category?.toLowerCase().includes(searchValue) ||
      job.skills?.some((skill) =>
        skill.toLowerCase().includes(searchValue)
      );

    const matchesLocation =
      !locationValue ||
      job.location?.toLowerCase().includes(locationValue);

    const matchesType =
      jobType === "All Types" || job.type === jobType;

    const matchesExperience =
      experience === "All Experience" ||
      job.experience === experience;

    const matchesCategory =
      category === "All Categories" ||
      job.category === category;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesExperience &&
      matchesCategory
    );
  });

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setJobType("All Types");
    setExperience("All Experience");
    setCategory("All Categories");
  };

  const hasFilters =
    search ||
    location ||
    jobType !== "All Types" ||
    experience !== "All Experience" ||
    category !== "All Categories";

  const formatPostedDate = (date) => {
    if (!date) return "Recently posted";

    const postedDate = new Date(date);
    const now = new Date();

    const difference =
      Math.floor((now - postedDate) / (1000 * 60 * 60 * 24));

    if (difference <= 0) return "Today";
    if (difference === 1) return "1 day ago";
    if (difference < 7) return `${difference} days ago`;
    if (difference < 14) return "1 week ago";

    return `${Math.floor(difference / 7)} weeks ago`;
  };

  return (
    <div className="jobs-page">
      {/* Hero */}
      <section className="inner-hero jobs-hero">
        <div className="container inner-hero-content">
          <span className="eyebrow">CAREER OPPORTUNITIES</span>

          <h1>
            Find a job that moves
            <span> your career forward.</span>
          </h1>

          <p>
            Explore current opportunities from companies looking for talented
            professionals. Find your next role and take the next step in your
            career.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Jobs</span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="jobs-search-section">
        <div className="container">
          <div className="jobs-search-box">
            <div className="search-field">
              <Search size={20} />

              <input
                type="text"
                placeholder="Job title, skills or keywords"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="search-field">
              <MapPin size={20} />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary search-button"
              onClick={() =>
                window.scrollTo({
                  top: 650,
                  behavior: "smooth",
                })
              }
            >
              <Search size={18} />
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Main jobs area */}
      <section className="jobs-content section-padding">
        <div className="container">
          {/* Mobile filter */}
          <div className="jobs-mobile-filter">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} />

              Filters

              {hasFilters && <span>{filteredJobs.length}</span>}
            </button>
          </div>

          <div className="jobs-layout">
            {/* Filters */}
            <aside
              className={`jobs-sidebar ${
                showFilters ? "show" : ""
              }`}
            >
              <div className="filter-header">
                <div>
                  <h3>Filter Jobs</h3>
                  <p>Refine your search</p>
                </div>

                <button
                  type="button"
                  className="filter-close"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={19} />
                </button>
              </div>

              <div className="filter-group">
                <label>Job Type</label>

                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Experience</label>

                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Category</label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {hasFilters && (
                <button
                  type="button"
                  className="clear-filters"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              )}
            </aside>

            {/* Results */}
            <div className="jobs-results">
              <div className="jobs-results-header">
                <div>
                  <span className="eyebrow">OPEN POSITIONS</span>

                  <h2>
                    {filteredJobs.length}{" "}
                    {filteredJobs.length === 1
                      ? "job"
                      : "jobs"}{" "}
                    available
                  </h2>
                </div>

                <span className="jobs-sort-label">
                  Latest opportunities
                </span>
              </div>

              {/* Loading */}
              {loading && (
                <div className="jobs-empty">
                  <div className="jobs-empty-icon">
                    <BriefcaseBusiness size={30} />
                  </div>

                  <h3>Loading jobs...</h3>

                  <p>
                    Please wait while we load the latest opportunities.
                  </p>
                </div>
              )}

              {/* Error */}
              {!loading && error && (
                <div className="jobs-empty">
                  <div className="jobs-empty-icon">
                    <X size={30} />
                  </div>

                  <h3>Something went wrong</h3>

                  <p>{error}</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={fetchJobs}
                  >
                    Try Again
                  </button>
                </div>
              )}

              {/* Jobs */}
              {!loading &&
                !error &&
                filteredJobs.length > 0 && (
                  <div className="job-list">
                    {filteredJobs.map((job) => (
                      <article
                        className="job-card"
                        key={job._id}
                      >
                        <div className="job-card-main">
                          <div className="job-company-icon">
                            <BriefcaseBusiness size={23} />
                          </div>

                          <div className="job-info">
                            <div className="job-top-row">
                              <span className="job-category">
                                {job.category}
                              </span>

                              <span className="job-posted">
                                <Clock3 size={14} />

                                {formatPostedDate(job.postedAt)}
                              </span>
                            </div>

                            <h3>{job.title}</h3>

                            <div className="job-company">
                              {job.company}
                            </div>

                            <div className="job-meta">
                              <span>
                                <MapPin size={15} />
                                {job.location}
                              </span>

                              <span>
                                <BriefcaseBusiness size={15} />
                                {job.experience}
                              </span>

                              <span>{job.type}</span>

                              <span className="job-salary">
                                {job.salary || "Not disclosed"}
                              </span>
                            </div>

                            <p>{job.description}</p>

                            {job.skills?.length > 0 && (
                              <div className="job-skills">
                                {job.skills.map((skill) => (
                                  <span key={skill}>
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <Link
                          to={`/jobs/${job._id}`}
                          className="job-view-button"
                        >
                          View Job
                          <ArrowRight size={17} />
                        </Link>
                      </article>
                    ))}
                  </div>
                )}

              {/* No jobs */}
              {!loading &&
                !error &&
                filteredJobs.length === 0 && (
                  <div className="jobs-empty">
                    <div className="jobs-empty-icon">
                      <Search size={30} />
                    </div>

                    <h3>No jobs found</h3>

                    <p>
                      We couldn't find any positions matching your
                      current filters. Try changing your search
                      criteria.
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

              {/* Candidate CTA */}
              <div className="jobs-bottom-cta">
                <div>
                  <span className="eyebrow">
                    CAN'T FIND THE RIGHT ROLE?
                  </span>

                  <h3>
                    Submit your profile and we'll
                    <span> keep you in mind.</span>
                  </h3>

                  <p>
                    Tell us about your skills and career goals. Our
                    recruitment team can connect you with suitable
                    opportunities.
                  </p>
                </div>

                <Link
                  to="/candidates"
                  className="btn btn-light"
                >
                  Submit Your Profile
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Jobs;