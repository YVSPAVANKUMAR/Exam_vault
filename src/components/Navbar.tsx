import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const LINKS = [
  { to: "/",         label: "Home" },
  { to: "/exams",    label: "Exams" },
  { to: "/subjects", label: "Subjects" },
  { to: "/resources",label: "Resources" },
  { to: "/about",    label: "About" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
          <Link to="/" className="nav-brand" aria-label="ExamVault home">
            ExamVault
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className={`nav-link${isActive(l.to) ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <Link to="/resources" className="btn-primary" style={{ fontSize: "0.82rem", padding: "8px 16px" }}>
              Explore Resources
            </Link>
            <button
              className="hamburger"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${open ? " open" : ""}`} role="menu">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link${isActive(l.to) ? " active" : ""}`}
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
