import { Link } from "react-router-dom";
import { SUBJECTS } from "../data/config";
import { resources } from "../data/resources";

export default function Subjects() {
  return (
    <main>
      <section className="page-hero" aria-label="Subjects page header">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">📚 Subject Browser</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Browse by Subject
          </h1>
          <p className="section-sub">
            Explore resources organized by subject area. Click any subject to find its lectures, notes, and study material.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
            {SUBJECTS.map((s) => {
              const subjectResources = resources.filter((r) => r.subject === s.id);
              const ytCount  = subjectResources.filter((r) => r.type === "youtube").length;
              const pdfCount = subjectResources.filter((r) => r.type === "pdf").length;
              const total    = subjectResources.length;

              return (
                <div key={s.id} className="card" style={{ padding: "24px" }}>
                  <div
                    className="subject-icon"
                    style={{
                      background: s.color + "18",
                      color: s.color,
                      width: "52px",
                      height: "52px",
                      fontSize: "1.6rem",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "8px" }}>
                    {s.id}
                  </h2>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {ytCount > 0  && <span className="badge badge-red">▶ {ytCount}</span>}
                    {pdfCount > 0 && <span className="badge badge-blue">📄 {pdfCount}</span>}
                    {total === 0  && <span className="badge badge-gray">Coming soon</span>}
                  </div>
                  {total > 0 ? (
                    <Link
                      to={`/resources?subject=${encodeURIComponent(s.id)}`}
                      className="btn-outline"
                      style={{ width: "100%", justifyContent: "center", padding: "9px 16px" }}
                    >
                      View {total} Resource{total !== 1 ? "s" : ""}
                    </Link>
                  ) : (
                    <button
                      className="btn-ghost"
                      disabled
                      style={{ width: "100%", justifyContent: "center", cursor: "default", opacity: 0.5 }}
                    >
                      No resources yet
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
