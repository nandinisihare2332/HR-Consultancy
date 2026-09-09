import { useEffect, useState } from "react";
import api from "../../services/api";

const SERVER_URL =
  (import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api").replace(/\/api\/?$/, "");

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCandidates = async () => {
    try {
      const response = await api.get("/candidates");

      setCandidates(response.data.candidates || []);
    } catch (error) {
      console.error("Fetch candidates error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to fetch candidates"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/candidates/${id}/status`, {
        status,
      });

      setCandidates((previous) =>
        previous.map((candidate) =>
          candidate._id === id
            ? { ...candidate, status }
            : candidate
        )
      );
    } catch (error) {
      console.error("Update candidate status error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to update candidate status"
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
              <h1>Candidates</h1>
              <p>Loading candidates...</p>
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

            <h1>Candidates</h1>

            <p>
              Review candidate profiles submitted through the
              consultancy website.
            </p>
          </div>
        </div>

        {candidates.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No candidates yet</h3>

            <p>
              Candidate profiles submitted through the
              Candidates page will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Contact</th>
                  <th>Experience</th>
                  <th>Preferred Role</th>
                  <th>Location</th>
                  <th>Resume</th>
                  <th>Applied On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate._id}>
                    <td>
                      <strong>{candidate.name}</strong>

                      {candidate.message && (
                        <span className="table-subtext">
                          {candidate.message}
                        </span>
                      )}
                    </td>

                    <td>
                      <span className="table-subtext">
                        {candidate.email}
                      </span>

                      <span className="table-subtext">
                        {candidate.phone}
                      </span>
                    </td>

                    <td>{candidate.experience}</td>

                    <td>{candidate.preferredRole}</td>

                    <td>{candidate.location}</td>

                    <td>
                      {candidate.resume?.filename ? (
                        <a
                          href={`${SERVER_URL}/uploads/${candidate.resume.filename}`}
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

                    <td>
                      {formatDate(candidate.createdAt)}
                    </td>

                    <td>
                      <select
                        value={candidate.status}
                        onChange={(event) =>
                          updateStatus(
                            candidate._id,
                            event.target.value
                          )
                        }
                        className="status-select"
                      >
                        <option value="New">New</option>

                        <option value="Reviewed">
                          Reviewed
                        </option>

                        <option value="Contacted">
                          Contacted
                        </option>

                        <option value="Shortlisted">
                          Shortlisted
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

export default Candidates;