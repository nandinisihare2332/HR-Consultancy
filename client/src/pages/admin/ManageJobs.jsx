import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import api from "../../services/api";

const initialForm = {
  title: "",
  company: "",
  location: "",
  type: "Full Time",
  experience: "",
  salary: "",
  category: "",
  description: "",
  responsibilities: "",
  requirements: "",
  skills: "",
};

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [saving, setSaving] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data.jobs || []);
    } catch (error) {
      console.error("Fetch jobs error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openCreateForm = () => {
    setEditingJob(null);
    setFormData(initialForm);
    setShowForm(true);
  };

  const openEditForm = (job) => {
    setEditingJob(job);

    setFormData({
      title: job.title || "",
      company: job.company || "",
      location: job.location || "",
      type: job.type || "Full Time",
      experience: job.experience || "",
      salary: job.salary || "",
      category: job.category || "",
      description: job.description || "",
      responsibilities: (job.responsibilities || []).join("\n"),
      requirements: (job.requirements || []).join("\n"),
      skills: (job.skills || []).join(", "),
    });

    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingJob(null);
    setFormData(initialForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    const jobData = {
      ...formData,
      responsibilities: formData.responsibilities
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      requirements: formData.requirements
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      skills: formData.skills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      if (editingJob) {
        await api.put(`/jobs/${editingJob._id}`, jobData);
      } else {
        await api.post("/jobs", jobData);
      }

      closeForm();
      await fetchJobs();
    } catch (error) {
      console.error("Save job error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to save job"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/jobs/${id}`);
      setJobs((previous) =>
        previous.filter((job) => job._id !== id)
      );
    } catch (error) {
      console.error("Delete job error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to delete job"
      );
    }
  };

  const toggleActive = async (job) => {
    try {
      const response = await api.put(`/jobs/${job._id}`, {
        isActive: !job.isActive,
      });

      setJobs((previous) =>
        previous.map((item) =>
          item._id === job._id
            ? response.data.job
            : item
        )
      );
    } catch (error) {
      console.error("Update job status error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to update job status"
      );
    }
  };

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-page-header">
          <div>
            <span className="eyebrow">ADMIN PANEL</span>
            <h1>Manage Jobs</h1>
            <p>
              Create, update and manage job openings.
            </p>
          </div>

          <button
            className="admin-primary-button"
            onClick={openCreateForm}
          >
            <Plus size={18} />
            Add Job
          </button>
        </div>

        {loading ? (
          <div className="admin-empty-state">
            <p>Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No jobs found</h3>
            <p>Create your first job opening.</p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job._id}>
                    <td>
                      <strong>{job.title}</strong>
                    </td>

                    <td>{job.company}</td>

                    <td>{job.location}</td>

                    <td>{job.type}</td>

                    <td>{job.category}</td>

                    <td>
                      <button
                        className={
                          job.isActive
                            ? "status-badge active"
                            : "status-badge inactive"
                        }
                        onClick={() =>
                          toggleActive(job)
                        }
                      >
                        {job.isActive
                          ? "Active"
                          : "Inactive"}
                      </button>
                    </td>

                    <td>
                      <div className="admin-action-buttons">
                        <button
                          className="admin-icon-button"
                          onClick={() =>
                            openEditForm(job)
                          }
                          title="Edit job"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          className="admin-icon-button danger"
                          onClick={() =>
                            handleDelete(job._id)
                          }
                          title="Delete job"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showForm && (
          <div className="admin-modal-overlay">
            <div className="admin-modal">
              <div className="admin-modal-header">
                <div>
                  <span className="eyebrow">
                    {editingJob
                      ? "EDIT JOB"
                      : "NEW JOB"}
                  </span>

                  <h2>
                    {editingJob
                      ? "Edit Job"
                      : "Create Job"}
                  </h2>
                </div>

                <button
                  className="admin-close-button"
                  onClick={closeForm}
                >
                  <X size={20} />
                </button>
              </div>

              <form
                className="admin-job-form"
                onSubmit={handleSubmit}
              >
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label>Job Title *</label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Company *</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Location *</label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Job Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="Full Time">
                        Full Time
                      </option>
                      <option value="Part Time">
                        Part Time
                      </option>
                      <option value="Contract">
                        Contract
                      </option>
                      <option value="Internship">
                        Internship
                      </option>
                      <option value="Remote">
                        Remote
                      </option>
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label>Experience *</label>
                    <input
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 2-4 years"
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Salary</label>
                    <input
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="e.g. ₹5-8 LPA"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Category *</label>
                    <input
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="e.g. Technology"
                      required
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>
                    Responsibilities
                  </label>
                  <textarea
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    rows="5"
                    placeholder="One responsibility per line"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Requirements</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="5"
                    placeholder="One requirement per line"
                  />
                </div>

                <div className="admin-form-group">
                  <label>Skills</label>
                  <input
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div className="admin-modal-actions">
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admin-primary-button"
                    disabled={saving}
                  >
                    {saving
                      ? "Saving..."
                      : editingJob
                      ? "Update Job"
                      : "Create Job"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ManageJobs;