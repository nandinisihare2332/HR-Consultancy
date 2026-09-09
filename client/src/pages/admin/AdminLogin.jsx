import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  LogIn,
} from "lucide-react";

import api from "../../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      navigate("/admin/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login-page">
      <div className="admin-login-card">
        <Link
          to="/"
          className="admin-login-back"
        >
          <ArrowLeft size={16} />
          Back to website
        </Link>

        <div className="admin-login-heading">
          <span className="eyebrow">ADMIN PANEL</span>

          <h1>Admin Login</h1>

          <p>
            Sign in to manage jobs, applications and
            enquiries.
          </p>
        </div>

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >
          <div className="admin-form-group">
            <label htmlFor="admin-email">
              Email
            </label>

            <input
              id="admin-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="admin-password">
              Password
            </label>

            <div className="password-input-wrapper">
              <input
                id="admin-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (previous) => !previous
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-submit"
            disabled={loading}
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Sign In
                <LogIn size={17} />
              </>
            )}
          </button>
        </form>

        <p className="admin-login-note">
          Authorized administrators only.
        </p>
      </div>
    </section>
  );
}

export default AdminLogin;