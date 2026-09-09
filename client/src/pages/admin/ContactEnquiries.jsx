import { useEffect, useState } from "react";
import api from "../../services/api";

function ContactEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      const response = await api.get("/contact-enquiries");

      setEnquiries(response.data.enquiries || []);
    } catch (error) {
      console.error("Fetch contact enquiries error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to fetch contact enquiries"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/contact-enquiries/${id}/status`, {
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
      console.error("Update contact enquiry error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to update enquiry status"
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
              <h1>Contact Enquiries</h1>
              <p>Loading enquiries...</p>
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

            <h1>Contact Enquiries</h1>

            <p>
              Review messages submitted through the contact
              form and manage their status.
            </p>
          </div>
        </div>

        {enquiries.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No contact enquiries yet</h3>

            <p>
              Messages submitted through the Contact page
              will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Received</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry._id}>
                    <td>
                      <strong>{enquiry.name}</strong>
                    </td>

                    <td>
                      <span className="table-subtext">
                        {enquiry.email}
                      </span>

                      {enquiry.phone && (
                        <span className="table-subtext">
                          {enquiry.phone}
                        </span>
                      )}
                    </td>

                    <td>
                      <strong>{enquiry.subject}</strong>
                    </td>

                    <td>
                      <span className="table-message">
                        {enquiry.message}
                      </span>
                    </td>

                    <td>
                      {formatDate(enquiry.createdAt)}
                    </td>

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

                        <option value="Read">Read</option>

                        <option value="Replied">
                          Replied
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

export default ContactEnquiries;