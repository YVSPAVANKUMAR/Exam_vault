import { Link } from "react-router-dom";
import { resources } from "../data/resources";
import { EXAMS, SUBJECTS } from "../data/config";
import ResourceCard from "../components/ResourceCard";
import { useFavorites } from "../hooks/useFavorites";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const { favs, toggle, isFav } = useFavorites();
  const { recent, track } = useRecentlyViewed();

  const totalResources = resources.length;
  const examCount = new Set(resources.map((r) => r.exam)).size;
  const subjectCount = new Set(resources.map((r) => r.subject)).size;

  const featured = resources.filter((r) => r.featured).slice(0, 3);

  const recentResources = recent
    .map((e) => resources.find((r) => r.id === e.id))
    .filter(Boolean)
    .slice(0, 3) as typeof resources;

  const featuredExams = EXAMS.slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="hero-badge animate-in">
              <span className="hero-badge-dot pulse">✦</span>
              Free for all aspirants — no sign-up required
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "var(--text)",
                marginBottom: "20px",
              }}
              className="animate-in"
            >
              Prepare Smarter.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Study Better.
              </span>{" "}
              Crack Your Exam.
            </h1>
            <p
              style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "32px", maxWidth: "500px" }}
              className="animate-in"
            >
              Organized YouTube lectures, PDF notes and preparation resources for SSC, RRB and other competitive examinations — all in one place.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }} className="animate-in">
              <Link to="/resources" className="btn-primary" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
                Explore Resources →
              </Link>
              <Link to="/exams" className="btn-outline" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
                Browse Exams
              </Link>
            </div>
          </div>

          {/* Floating resource type pills */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              pointerEvents: "none",
            }}
            className="desktop-nav"
          >
            {[
              { label: "▶ YouTube Lectures", color: "#dc2626" },
              { label: "📄 PDF Notes",         color: "var(--primary)" },
              { label: "🔗 Study Resources",   color: "var(--secondary)" },
            ].map((pill) => (
              <div
                key={pill.label}
                style={{
                  background: "var(--bg-glass)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  padding: "10px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: pill.color,
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {pill.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 0 64px" }} aria-label="Statistics">
        <div className="container">
          <div className="grid-4" style={{ marginTop: "-32px" }}>
            <StatCard value={`${totalResources}+`} label="Study Resources" />
            <StatCard value={`${examCount}+`}      label="Competitive Exams" />
            <StatCard value={`${subjectCount}+`}   label="Subjects Covered" />
            <StatCard value="24/7"                  label="Free Access" />
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section" style={{ paddingTop: "0" }} aria-labelledby="featured-heading">
        <div className="container">
          <div style={{ marginBottom: "32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <div className="section-label">✦ Top Picks</div>
              <h2 className="section-title" id="featured-heading">Featured Resources</h2>
              <p className="section-sub">Hand-picked lectures and notes to kickstart your preparation.</p>
            </div>
            <Link to="/resources" className="btn-ghost">View all →</Link>
          </div>
          <div className="grid-3">
            {featured.map((r, i) => (
              <div key={r.id} className="animate-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <ResourceCard
                  resource={r}
                  isFav={isFav(r.id)}
                  onFav={() => toggle(r.id)}
                  onOpen={() => track(r.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exams */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-labelledby="exams-heading">
        <div className="container">
          <div style={{ marginBottom: "32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <div className="section-label">📋 Exam Directory</div>
              <h2 className="section-title" id="exams-heading">Popular Exams</h2>
              <p className="section-sub">Choose your target exam and find relevant resources instantly.</p>
            </div>
            <Link to="/exams" className="btn-ghost">All exams →</Link>
          </div>
          <div className="grid-4">
            {featuredExams.map((exam, i) => {
              const count = resources.filter((r) => r.exam === exam.id).length;
              return (
                <Link
                  key={exam.id}
                  to={`/resources?exam=${encodeURIComponent(exam.id)}`}
                  className="card card-glass"
                  style={{ padding: "22px 20px", textDecoration: "none", animationDelay: `${i * 0.05}s` }}
                >
                  <div className="exam-icon" style={{ background: exam.group === "SSC" ? "rgba(37,99,235,0.1)" : "rgba(124,58,237,0.1)", fontSize: "1.3rem" }}>
                    {exam.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: "6px" }}>
                    {exam.label}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "10px", lineHeight: 1.5 }}>
                    {exam.desc.slice(0, 60)}…
                  </div>
                  <span className={`badge ${exam.group === "SSC" ? "badge-blue" : "badge-purple"}`}>
                    {count} resource{count !== 1 ? "s" : ""}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section" aria-labelledby="subjects-heading">
        <div className="container">
          <div style={{ marginBottom: "32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <div className="section-label">📚 Subject Browser</div>
              <h2 className="section-title" id="subjects-heading">Browse by Subject</h2>
              <p className="section-sub">Find exactly what you need for each subject area.</p>
            </div>
            <Link to="/subjects" className="btn-ghost">All subjects →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px" }}>
            {SUBJECTS.map((s, i) => {
              const count = resources.filter((r) => r.subject === s.id).length;
              return (
                <Link
                  key={s.id}
                  to={`/resources?subject=${encodeURIComponent(s.id)}`}
                  className="card"
                  style={{ padding: "18px 16px", textDecoration: "none", textAlign: "center" }}
                >
                  <div className="subject-icon" style={{ background: s.color + "18", margin: "0 auto 10px" }}>
                    {s.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.82rem", color: "var(--text)", marginBottom: "4px" }}>
                    {s.id}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                    {count} resource{count !== 1 ? "s" : ""}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      {recentResources.length > 0 && (
        <section className="section" style={{ paddingTop: "0" }} aria-labelledby="recent-heading">
          <div className="container">
            <div style={{ marginBottom: "20px" }}>
              <div className="section-label">🕐 History</div>
              <h2 className="section-title" id="recent-heading">Recently Viewed</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {recentResources.map((r) => (
                <a
                  key={r.id}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recent-chip"
                  onClick={() => track(r.id)}
                >
                  {r.type === "youtube" ? "▶" : r.type === "pdf" ? "📄" : "🔗"} {r.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)", padding: "72px 0" }} aria-label="Call to action">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            Ready to Start Preparing?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "28px", fontSize: "1rem" }}>
            Access {totalResources}+ free resources — lectures, notes, and practice materials.
          </p>
          <Link
            to="/resources"
            style={{
              background: "#fff",
              color: "var(--primary)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "12px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Browse All Resources →
          </Link>
        </div>
      </section>
    </main>
  );
}
