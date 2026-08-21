import { Link } from "react-router-dom";
import { EXAMS } from "../data/config";
import { resources } from "../data/resources";

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: "28px 28px 30px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <div style={{ fontSize: "1.5rem", width: "44px", height: "44px", background: "rgba(37,99,235,0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {icon}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>
          {title}
        </h2>
      </div>
      <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export default function About() {
  const total = resources.length;
  const ytCount = resources.filter((r) => r.type === "youtube").length;
  const pdfCount = resources.filter((r) => r.type === "pdf").length;

  return (
    <main>
      <section className="page-hero" aria-label="About page header">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">ℹ️ About</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            What is ExamVault?
          </h1>
          <p className="section-sub" style={{ maxWidth: "580px" }}>
            ExamVault is a centralized study-resource platform created to help competitive exam aspirants discover organized lectures, notes and preparation materials without wasting time searching across multiple platforms.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>

            <Section icon="🎯" title="Our Purpose">
              <p>
                Competitive exam preparation in India is scattered across dozens of platforms. ExamVault brings everything together — YouTube lectures, PDF notes, and study links — organized by exam and subject so you always know where to look.
              </p>
              <br />
              <p>
                Every resource is free to access. No sign-up. No paywall. Just open, study, and succeed.
              </p>
            </Section>

            <Section icon="📦" title="What You Can Find">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  `${ytCount} YouTube video lectures`,
                  `${pdfCount} PDF notes and study material`,
                  `${total} total resources across all exams`,
                  "Subject-wise organized resources",
                  "Exam-specific preparation materials",
                  "Favorites and recently viewed tracking",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "var(--primary)", marginTop: "1px" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon="📋" title="Supported Exams">
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {EXAMS.map((e) => (
                  <Link
                    key={e.id}
                    to={`/resources?exam=${encodeURIComponent(e.id)}`}
                    className={`badge ${e.group === "SSC" ? "badge-blue" : "badge-purple"}`}
                    style={{ textDecoration: "none", padding: "5px 12px", fontSize: "0.8rem" }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </Section>

            <Section icon="🗂️" title="How Resources Are Organized">
              <p>
                Every resource in ExamVault has a defined <strong>exam</strong>, <strong>subject</strong>, and <strong>type</strong> (YouTube / PDF / Link). This lets you filter to exactly what you need in seconds.
              </p>
              <br />
              <p>
                Resources are maintained in a single JavaScript data file. Updating or adding a resource requires editing only that file — the website updates automatically.
              </p>
            </Section>

            <Section icon="⚠️" title="Disclaimer">
              <p style={{ marginBottom: "12px" }}>
                ExamVault does not host or own third-party YouTube videos or Google Drive files. Resources are linked from external platforms. Copyright belongs to the respective content creators and owners.
              </p>
              <p>
                If you are the owner of any linked content and believe it has been shared improperly, please contact the website administrator for review.
              </p>
            </Section>

            <Section icon="📧" title="Contact & Feedback">
              <p>
                ExamVault is an open, community-driven resource hub. If you notice a broken link, want to suggest a resource, or have feedback, we'd love to hear from you.
              </p>
              <br />
              <p>
                Currently managed via GitHub. Contributions and suggestions are welcome through the repository.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
