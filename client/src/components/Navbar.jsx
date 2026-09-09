import { Link, NavLink } from "react-router-dom";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <BriefcaseBusiness size={22} />
          </span>

          <span>
            Talent<span>Bridge</span>
          </span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/jobs" onClick={closeMenu}>
            Jobs
          </NavLink>

          <NavLink to="/candidates" onClick={closeMenu}>
            Candidates
          </NavLink>

          <NavLink to="/employers" onClick={closeMenu}>
            Employers
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/employers"
            className="nav-cta"
            onClick={closeMenu}
          >
            Hire Talent
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;