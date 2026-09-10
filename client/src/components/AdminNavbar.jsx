import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/talentbridge-logo.png";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Users,
  Building2,
  MessageCircle,
  LogOut,
} from "lucide-react";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  const links = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Jobs",
      path: "/admin/jobs",
      icon: BriefcaseBusiness,
    },
    {
      label: "Applications",
      path: "/admin/applications",
      icon: FileText,
    },
    {
      label: "Candidates",
      path: "/admin/candidates",
      icon: Users,
    },
    {
      label: "Employer Enquiries",
      path: "/admin/employer-enquiries",
      icon: Building2,
    },
    {
      label: "Contact Enquiries",
      path: "/admin/contact-enquiries",
      icon: MessageCircle,
    },
  ];

  return (
    <header className="admin-navbar">
      <div className="container admin-navbar-inner">
        <NavLink to="/admin/dashboard" className="admin-brand">
  <img
    src={logo}
    alt="TalentBridge"
    className="admin-brand-logo"
  />

  <span>ADMIN</span>
</NavLink>

        <nav className="admin-nav-links">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `admin-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="admin-logout-button"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;