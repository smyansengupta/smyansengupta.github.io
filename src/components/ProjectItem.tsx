interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  achievement?: string;
}

export default function ProjectItem({
  title,
  description,
  technologies,
  links,
  achievement
}: ProjectItemProps) {
  return (
    <div className="project-card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="project-title">{title}</h3>
        {achievement && (
          <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
            {achievement}
          </span>
        )}
      </div>
      <p className="project-description mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="project-link">
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
