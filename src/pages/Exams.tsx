import { Link } from "react-router-dom";
import { EXAMS } from "../data/config";
import { resources } from "../data/resources";

const GROUPS = ["SSC", "RRB"];

export default function Exams() {
  return (
    <main>
      <section className="page-hero" aria-label="Exams page header">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">📋 Exam Directory</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Supported Exams
          </h1>
          <p className="section-sub" style={{ maxWidth: "560px" }}>
            Browse all supported competitive examinations. Each exam page shows relevant lectures, PDF notes, and study materials.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 80px" }}>
        <div className="container">
          {GROUPS.map((group) => {
            const groupExams = EXAMS.filter((e) => e.group === group);
            return (
              <div key={group} style={{ marginBottom: "56px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <span className={`badge ${group === "SSC" ? "badge-blue" : "badge-purple"}`} style={{ fontSize: "0.85rem", padding: "5px 14px" }}>
                    {group}
                  </span>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text)" }}>
                    {group === "SSC" ? "Staff Selection Commission" : "Railway Recruitment Board"}
                  </h2>
                </div>
                <div className="grid-3">
                  {groupExams.map((exam) => {
                    const count = resources.filter((r) => r.exam === exam.id).length;
                    const ytCount = resources.filter((r) => r.exam === exam.id && r.type === "youtube").length;
                    const pdfCount = resources.filter((r) => r.exam === exam.id && r.type === "pdf").length;
                    return (
                      <div key={exam.id} className="card" style={{ padding: "24px" }}>
                        <div
                          className="exam-icon"
                          style={{
                            background: group === "SSC" ? "rgba(37,99,235,0.1)" : "rgba(124,58,237,0.1)",
                            color: group === "SSC" ? "var(--primary)" : "var(--secondary)",
                            fontSize: "1.5rem",
                            width: "52px",
                            height: "52px",
                          }}
                        >
                          {exam.icon}
                        </div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text)", marginBottom: "8px" }}>
                          {exam.label}
                        </h3>
                        <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                          {exam.desc}
                        </p>
                        <div style={{ display: "flex", gap: "8px", marginBottom: "18px", flexWrap: "wrap" }}>
                          <span className="badge badge-red">▶ {ytCount} Videos</span>
                          <span className="badge badge-blue">📄 {pdfCount} PDFs</span>
                          <span className="badge badge-gray">{count} Total</span>
                        </div>
                        <Link
                          to={`/resources?exam=${encodeURIComponent(exam.id)}`}
                          className="btn-primary"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          Explore {exam.label} Resources
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
