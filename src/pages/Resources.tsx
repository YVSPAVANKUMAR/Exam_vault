import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { resources, Resource } from "../data/resources";
import { SITE_CONFIG, EXAMS, SUBJECTS } from "../data/config";
import ResourceCard from "../components/ResourceCard";
import { useFavorites } from "../hooks/useFavorites";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";

type SortKey = "newest" | "oldest" | "az" | "featured";

function sortResources(list: Resource[], sort: SortKey): Resource[] {
  const copy = [...list];
  if (sort === "newest")   return copy.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
  if (sort === "oldest")   return copy.sort((a, b) => a.addedAt.localeCompare(b.addedAt));
  if (sort === "az")       return copy.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "featured") return copy.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return copy;
}

export default function Resources() {
  const [params, setParams] = useSearchParams();
  const { favs, toggle, isFav } = useFavorites();
  const { track } = useRecentlyViewed();

  const [search, setSearch]     = useState(params.get("q") || "");
  const [exam, setExam]         = useState(params.get("exam") || "");
  const [subject, setSubject]   = useState(params.get("subject") || "");
  const [type, setType]         = useState(params.get("type") || "");
  const [sort, setSort]         = useState<SortKey>("newest");
  const [showFavs, setShowFavs] = useState(false);
  const [page, setPage]         = useState(1);

  // Sync URL params → state on mount
  useEffect(() => {
    setSearch(params.get("q") || "");
    setExam(params.get("exam") || "");
    setSubject(params.get("subject") || "");
    setType(params.get("type") || "");
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = resources.filter((r) => {
      if (showFavs && !favs.has(r.id)) return false;
      if (exam    && r.exam    !== exam)    return false;
      if (subject && r.subject !== subject) return false;
      if (type    && r.type    !== type)    return false;
      if (q) {
        const haystack = [r.title, r.description, r.exam, r.subject, ...r.tags].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
    return sortResources(list, sort);
  }, [search, exam, subject, type, sort, showFavs, favs]);

  const perPage = SITE_CONFIG.resourcesPerPage;
  const visible = filtered.slice(0, page * perPage);
  const hasMore = visible.length < filtered.length;

  const resetPage = () => setPage(1);

  const allExams    = ["", ...EXAMS.map((e) => e.id)];
  const allSubjects = ["", ...SUBJECTS.map((s) => s.id)];
  const allTypes    = ["", "youtube", "pdf", "link"];

  const clearAll = () => {
    setSearch(""); setExam(""); setSubject(""); setType(""); setShowFavs(false); setSort("newest"); resetPage();
    setParams({});
  };

  const hasFilters = search || exam || subject || type || showFavs;

  return (
    <main>
      <section className="page-hero" aria-label="Resources page header">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">📦 Resource Library</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            All Resources
          </h1>
          <p className="section-sub">
            {resources.length} resources across {new Set(resources.map((r) => r.exam)).size} exams and {new Set(resources.map((r) => r.subject)).size} subjects.
          </p>
        </div>
      </section>

      <section style={{ padding: "36px 0 80px" }}>
        <div className="container">
          {/* Search + Filters */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "20px", marginBottom: "28px", boxShadow: "var(--shadow-sm)" }}>
            {/* Search row */}
            <div style={{ position: "relative", marginBottom: "16px" }}>
              <span
                style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-light)", fontSize: "1rem", pointerEvents: "none" }}
                aria-hidden="true"
              >
                🔍
              </span>
              <input
                type="search"
                className="search-bar"
                placeholder="Search resources by title, exam, subject, or tag…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); resetPage(); }}
                aria-label="Search resources"
              />
            </div>

            {/* Filter row */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <select
                className="filter-select"
                value={exam}
                onChange={(e) => { setExam(e.target.value); resetPage(); }}
                aria-label="Filter by exam"
              >
                <option value="">All Exams</option>
                {allExams.slice(1).map((e) => <option key={e} value={e}>{e}</option>)}
              </select>

              <select
                className="filter-select"
                value={subject}
                onChange={(e) => { setSubject(e.target.value); resetPage(); }}
                aria-label="Filter by subject"
              >
                <option value="">All Subjects</option>
                {allSubjects.slice(1).map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <select
                className="filter-select"
                value={type}
                onChange={(e) => { setType(e.target.value); resetPage(); }}
                aria-label="Filter by resource type"
              >
                <option value="">All Types</option>
                <option value="youtube">▶ YouTube</option>
                <option value="pdf">📄 PDF</option>
                <option value="link">🔗 Resource</option>
              </select>

              <select
                className="filter-select"
                value={sort}
                onChange={(e) => { setSort(e.target.value as SortKey); resetPage(); }}
                aria-label="Sort resources"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">A → Z</option>
                <option value="featured">Featured First</option>
              </select>

              <button
                className={`btn-ghost${showFavs ? " active" : ""}`}
                onClick={() => { setShowFavs((f) => !f); resetPage(); }}
                style={{ borderColor: showFavs ? "#dc2626" : undefined, color: showFavs ? "#dc2626" : undefined }}
                aria-pressed={showFavs}
              >
                {showFavs ? "❤️" : "🤍"} Favorites ({favs.size})
              </button>

              {hasFilters && (
                <button className="btn-ghost" onClick={clearAll} style={{ marginLeft: "auto" }}>
                  ✕ Clear all
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Showing <strong style={{ color: "var(--text)" }}>{visible.length}</strong> of <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> resources
            </p>
            {hasFilters && (
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {exam    && <span className="badge badge-blue">Exam: {exam}</span>}
                {subject && <span className="badge badge-purple">Subject: {subject}</span>}
                {type    && <span className="badge badge-red">Type: {type}</span>}
                {search  && <span className="badge badge-gray">Search: "{search}"</span>}
              </div>
            )}
          </div>

          {/* Resource grid */}
          {filtered.length === 0 ? (
            <div className="empty-state" role="status" aria-live="polite">
              <div className="empty-state-icon">📭</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "8px" }}>
                No resources found
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                Try changing your search or adjusting the filters.
              </p>
              <button className="btn-outline" onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <>
              <div className="grid-auto" role="list" aria-label="Resource list">
                {visible.map((r, i) => (
                  <div key={r.id} className="animate-in" style={{ animationDelay: `${(i % perPage) * 0.04}s` }} role="listitem">
                    <ResourceCard
                      resource={r}
                      isFav={isFav(r.id)}
                      onFav={() => toggle(r.id)}
                      onOpen={() => track(r.id)}
                    />
                  </div>
                ))}
              </div>

              {hasMore && (
                <button
                  className="load-more-btn"
                  onClick={() => setPage((p) => p + 1)}
                  aria-label="Load more resources"
                >
                  Load More ↓ ({filtered.length - visible.length} remaining)
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
