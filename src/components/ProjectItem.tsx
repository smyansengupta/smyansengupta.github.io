interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectItemProps {
  index: number;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  achievement?: string;
}

export default function ProjectItem({
  index,
  title,
  description,
  technologies,
  links,
  achievement
}: ProjectItemProps) {
  // "1st Place - HackHarvard 2024 Open Data Track" -> stamp headline + subline
  const [placement, ...event] = achievement?.split(" - ") ?? [];

  return (
    <article className="entry reveal">
      <span className="entry-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <div className="entry-body">
        <h3 className="entry-title">{title}</h3>
        <p className="entry-desc">{description}</p>
        <ul className="tech" aria-label="Technologies">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="entry-links">
          {links.map((link) => {
            const isInternal = link.url.startsWith("#");
            return (
              <a
                key={link.label}
                href={link.url}
                className="text-link"
                {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label} <span className="arrow">{isInternal ? "→" : "↗"}</span>
              </a>
            );
          })}
        </div>
      </div>
      {achievement && (
        <div className="stamp" aria-label={achievement}>
          <span className="stamp-main">{placement}</span>
          {event.length > 0 && <span className="stamp-sub">{event.join(" - ")}</span>}
        </div>
      )}
    </article>
  );
}
