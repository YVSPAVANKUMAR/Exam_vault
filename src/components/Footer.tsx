import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "40px" }}>
          <div>
            <div className="footer-brand" style={{ marginBottom: "10px" }}>ExamVault</div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "240px" }}>
              Prepare Smarter. Study Better. Your organized hub for competitive exam resources.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "14px" }}>
              Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[["Home", "/"], ["Exams", "/exams"], ["Subjects", "/subjects"], ["Resources", "/resources"], ["About", "/about"]].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "14px" }}>
              Supported Exams
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["SSC CGL", "SSC CHSL", "SSC MTS", "RRB NTPC", "RRB Group D", "RRB ALP"].map((e) => (
                <Link
                  key={e}
                  to={`/resources?exam=${encodeURIComponent(e)}`}
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(ev) => (ev.currentTarget.style.color = "var(--text-muted)")}
                >
                  {e}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "14px" }}>
              Disclaimer
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              ExamVault does not host or own third-party YouTube videos or Google Drive files. Resources are linked from external platforms. Copyright belongs to the respective content creators and owners.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © 2026 ExamVault. All rights reserved. External resources belong to their respective owners.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Made with ♥ for competitive exam aspirants
          </p>
        </div>
      </div>
    </footer>
  );
}
