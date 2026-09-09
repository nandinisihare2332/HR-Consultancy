import { useEffect, useState } from "react";
import api from "../../services/api";

function EmployerEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      const response = await api.get("/employer-enquiries");
      setEnquiries(response.data.enquiries || []);
    } catch (error) {
      console.error("Fetch employer enquiries error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/employer-enquiries/${id}/status`, {
        status,
      });

      setEnquiries((previous) =>
        previous.map((enquiry) =>
          enquiry._id === id
            ? { ...enquiry, status }
            : enquiry
        )
      );
    } catch (error) {
      console.error("Update status error:", error);
      alert(
        error.response?.data?.message ||
          "Unable to update status"
      );
    }
  };

  if (loading) {
    return (
      <section className="admin-page">
        <div className="container">
          <h1>Employer Enquiries</h1>
          <p>Loading enquiries...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-page-header">
          <div>
            <span className="eyebrow">ADMIN</span>
            <h1>Employer Enquiries</h1>
            <p>
              Review and manage hiring requirements submitted
              by employers.
            </p>
          </div>
        </div>

        {enquiries.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No employer enquiries yet</h3>
            <p>
              New employer enquiries will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Requirement</th>
                  <th>Positions</th>
                  <th>Hiring Type</th>
                  <th>Timeline</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry._id}>
                    <td>
                      <strong>{enquiry.company}</strong>
                      <span className="table-subtext">
                        {enquiry.name}
                      </span>
                    </td>

                    <td>
                      <span className="table-subtext">
                        {enquiry.email}
                      </span>
                      <span className="table-subtext">
                        {enquiry.phone}
                      </span>
                    </td>

                    <td>
                      <strong>{enquiry.jobTitle}</strong>
                      {enquiry.message && (
                        <span className="table-subtext">
                          {enquiry.message}
                        </span>
                      )}
                    </td>

                    <td>{enquiry.positions}</td>

                    <td>{enquiry.hiringType}</td>

                    <td>{enquiry.timeline}</td>

                    <td>
                      <select
                        value={enquiry.status}
                        onChange={(event) =>
                          updateStatus(
                            enquiry._id,
                            event.target.value
                          )
                        }
                        className="status-select"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">
                          Contacted
                        </option>
                        <option value="In Progress">
                          In Progress
                        </option>
                        <option value="Completed">
                          Completed
                        </option>
                        <option value="Closed">
                          Closed
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

export default EmployerEnquiries;