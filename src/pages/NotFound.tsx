import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "48px 24px" }}>
      <div>
        <div className="err-code" aria-label="404">404</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", marginTop: "8px", marginBottom: "12px" }}>
          Page Not Found
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
          The resource you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
