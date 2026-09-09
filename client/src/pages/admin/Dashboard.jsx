import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileText,
  Users,
  Building2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import api from "../../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    jobs: 0,
    applications: 0,
    candidates: 0,
    employerEnquiries: 0,
    contactEnquiries: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const results = await Promise.allSettled([
          api.get("/jobs"),
          api.get("/applications"),
          api.get("/candidates"),
          api.get("/employer-enquiries"),
          api.get("/contact-enquiries"),
        ]);

        const [
          jobsResult,
          applicationsResult,
          candidatesResult,
          employerResult,
          contactResult,
        ] = results;

        setStats({
          jobs:
            jobsResult.status === "fulfilled"
              ? jobsResult.value.data.count || 0
              : 0,

          applications:
            applicationsResult.status === "fulfilled"
              ? applicationsResult.value.data.count || 0
              : 0,

          candidates:
            candidatesResult.status === "fulfilled"
              ? candidatesResult.value.data.count || 0
              : 0,

          employerEnquiries:
            employerResult.status === "fulfilled"
              ? employerResult.value.data.count || 0
              : 0,

          contactEnquiries:
            contactResult.status === "fulfilled"
              ? contactResult.value.data.count || 0
              : 0,
        });

        // Show which API is failing in the browser console
        results.forEach((result, index) => {
          if (result.status === "rejected") {
            const endpoints = [
              "/jobs",
              "/applications",
              "/candidates",
              "/employer-enquiries",
              "/contact-enquiries",
            ];

            console.error(
              `Dashboard API failed: ${endpoints[index]}`,
              result.reason
            );
          }
        });
      } catch (error) {
        console.error("Dashboard data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Total Jobs",
      value: stats.jobs,
      icon: BriefcaseBusiness,
      link: "/admin/jobs",
    },
    {
      title: "Applications",
      value: stats.applications,
      icon: FileText,
      link: "/admin/applications",
    },
    {
      title: "Candidates",
      value: stats.candidates,
      icon: Users,
      link: "/admin/candidates",
    },
    {
      title: "Employer Enquiries",
      value: stats.employerEnquiries,
      icon: Building2,
      link: "/admin/employer-enquiries",
    },
    {
      title: "Contact Enquiries",
      value: stats.contactEnquiries,
      icon: MessageCircle,
      link: "/admin/contact-enquiries",
    },
  ];

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-page-header">
          <div>
            <span className="eyebrow">ADMIN PANEL</span>

            <h1>Dashboard</h1>

            <p>
              Overview of jobs, applications, candidates and
              enquiries.
            </p>
          </div>
        </div>

        <div className="admin-stats-grid">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                to={card.link}
                className="admin-stat-card"
                key={card.title}
              >
                <div className="admin-stat-icon">
                  <Icon size={24} />
                </div>

                <div className="admin-stat-content">
                  <span>{card.title}</span>

                  <strong>
                    {loading ? "..." : card.value}
                  </strong>
                </div>

                <ArrowRight size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;