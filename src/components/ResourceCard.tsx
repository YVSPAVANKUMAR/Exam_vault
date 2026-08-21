import { Resource } from "../data/resources";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return u.searchParams.get("v");
  } catch {
    return null;
  }
}

function getTypeBadge(type: string) {
  if (type === "youtube") return { label: "▶ YouTube", cls: "badge-red" };
  if (type === "pdf")     return { label: "📄 PDF",    cls: "badge-blue" };
  return                         { label: "🔗 Resource", cls: "badge-gray" };
}

interface Props {
  resource: Resource;
  isFav: boolean;
  onFav: () => void;
  onOpen: () => void;
}

export default function ResourceCard({ resource, isFav, onFav, onOpen }: Props) {
  const { id, title, exam, subject, type, description, url, thumbnail, tags, featured } = resource;

  const badge = getTypeBadge(type);

  let thumbSrc = thumbnail;
  if (!thumbSrc && type === "youtube") {
    const vid = getYouTubeId(url);
    if (vid) thumbSrc = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
  }

  const handleOpen = () => {
    if (!url) return;
    onOpen();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="card" style={{ display: "flex", flexDirection: "column" }} aria-label={title}>
      {/* Thumbnail */}
      <div style={{ position: "relative" }}>
        {thumbSrc ? (
          <img
            src={thumbSrc}
            alt={`Thumbnail for ${title}`}
            className="res-thumb"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <div className="res-thumb-placeholder" aria-hidden="true">
            {type === "youtube" ? "▶" : type === "pdf" ? "📄" : "🔗"}
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <span className="badge badge-featured" style={{ position: "absolute", top: "10px", left: "10px" }}>
            ⭐ Featured
          </span>
        )}

        {/* Fav button */}
        <button
          className={`fav-btn${isFav ? " active" : ""}`}
          style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}
          onClick={onFav}
          aria-label={isFav ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
          title={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: 1, gap: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span className={`badge ${badge.cls}`}>{badge.label}</span>
        </div>

        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.35, color: "var(--text)" }}>
          {title}
        </h3>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <span className="badge badge-blue">{exam}</span>
          <span className="badge badge-purple">{subject}</span>
        </div>

        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.55, flex: 1 }}>
          {description}
        </p>

        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {tags.slice(0, 4).map((t) => (
              <span key={t} className="tag-chip">#{t}</span>
            ))}
          </div>
        )}

        <button
          className="btn-primary"
          onClick={handleOpen}
          disabled={!url}
          style={{ marginTop: "4px", justifyContent: "center", width: "100%", opacity: url ? 1 : 0.4 }}
          aria-label={url ? `Open ${title} in new tab` : `${title} — link unavailable`}
        >
          {url ? "Open Resource ↗" : "Link Unavailable"}
        </button>
      </div>
    </article>
  );
}
