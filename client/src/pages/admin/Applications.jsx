import { useEffect, useState } from "react";
import api from "../../services/api";

const SERVER_URL =
  (import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api").replace(/\/api\/?$/, "");

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");

      setApplications(response.data.applications || []);
    } catch (error) {
      console.error("Fetch applications error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to fetch applications"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/applications/${id}/status`, {
        status,
      });

      setApplications((previous) =>
        previous.map((application) =>
          application._id === id
            ? { ...application, status }
            : application
        )
      );
    } catch (error) {
      console.error("Update application status error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to update application status"
      );
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="admin-page">
        <div className="container">
          <div className="admin-page-header">
            <div>
              <span className="eyebrow">ADMIN PANEL</span>
              <h1>Candidate Applications</h1>
              <p>Loading applications...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-page-header">
          <div>
            <span className="eyebrow">ADMIN PANEL</span>

            <h1>Candidate Applications</h1>

            <p>
              Review candidate applications and update their
              recruitment status.
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No applications yet</h3>

            <p>
              Candidate applications submitted through the
              website will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Job</th>
                  <th>Contact</th>
                  <th>Resume</th>
                  <th>Applied On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application._id}>
                    {/* Candidate */}
                    <td>
                      <strong>{application.name}</strong>

                      {application.coverLetter && (
                        <span className="table-subtext">
                          {application.coverLetter}
                        </span>
                      )}
                    </td>

                    {/* Job */}
                    <td>
                      <strong>
                        {application.job?.title ||
                          "Job unavailable"}
                      </strong>

                      <span className="table-subtext">
                        {application.job?.company || ""}
                      </span>

                      <span className="table-subtext">
                        {application.job?.location || ""}
                      </span>
                    </td>

                    {/* Contact */}
                    <td>
                      <span className="table-subtext">
                        {application.email}
                      </span>

                      <span className="table-subtext">
                        {application.phone}
                      </span>
                    </td>

                    {/* Resume */}
                    <td>
                      {application.resume?.filename ? (
                        <a
                          href={`${SERVER_URL}/uploads/${application.resume.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-link"
                        >
                          View Resume
                        </a>
                      ) : (
                        <span className="table-subtext">
                          No resume
                        </span>
                      )}
                    </td>

                    {/* Date */}
                    <td>
                      {formatDate(application.createdAt)}
                    </td>

                    {/* Status */}
                    <td>
                      <select
                        value={application.status}
                        onChange={(event) =>
                          updateStatus(
                            application._id,
                            event.target.value
                          )
                        }
                        className="status-select"
                      >
                        <option value="New">New</option>

                        <option value="Reviewed">
                          Reviewed
                        </option>

                        <option value="Shortlisted">
                          Shortlisted
                        </option>

                        <option value="Interview">
                          Interview
                        </option>

                        <option value="Selected">
                          Selected
                        </option>

                        <option value="Rejected">
                          Rejected
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Applications;