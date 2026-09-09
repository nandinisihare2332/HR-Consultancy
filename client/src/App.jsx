import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdminNavbar from "./components/AdminNavbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Candidates from "./pages/Candidates";
import Employers from "./pages/Employers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ManageJobs from "./pages/admin/ManageJobs";
import Applications from "./pages/admin/Applications";
import CandidatesAdmin from "./pages/admin/Candidates";
import EmployerEnquiries from "./pages/admin/EmployerEnquiries";
import ContactEnquiries from "./pages/admin/ContactEnquiries";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const isAdminLogin =
    location.pathname === "/admin/login";

  const isAdminPage =
    location.pathname.startsWith("/admin") &&
    !isAdminLogin;

  return (
    <>
      <ScrollToTop />

      {/* Public Navbar */}
      {!isAdminPage && !isAdminLogin && <Navbar />}

      {/* Admin Navbar */}
      {isAdminPage && <AdminNavbar />}

      <main>
        <Routes>
          {/* =========================
              PUBLIC PAGES
          ========================= */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetails />}
          />

          <Route
            path="/candidates"
            element={<Candidates />}
          />

          <Route
            path="/employers"
            element={<Employers />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          {/* =========================
              ADMIN LOGIN
          ========================= */}

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          {/* =========================
              PROTECTED ADMIN
          ========================= */}

          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/admin/jobs"
              element={<ManageJobs />}
            />

            <Route
              path="/admin/applications"
              element={<Applications />}
            />

            <Route
              path="/admin/candidates"
              element={<CandidatesAdmin />}
            />

            <Route
              path="/admin/employer-enquiries"
              element={<EmployerEnquiries />}
            />

            <Route
              path="/admin/contact-enquiries"
              element={<ContactEnquiries />}
            />
          </Route>
        </Routes>
      </main>

      {/* Public Footer */}
      {!isAdminPage && !isAdminLogin && <Footer />}
    </>
  );
}

export default App;