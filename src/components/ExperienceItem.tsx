interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  subtitle?: string;
  responsibilities: string[];
}

export default function ExperienceItem({
  title,
  company,
  location,
  duration,
  subtitle,
  responsibilities
}: ExperienceItemProps) {
  const [start, end] = duration.split(" - ");
  const isCurrent = end === "Present";

  return (
    <article className="role reveal">
      <div className="role-date">
        <span>{start}</span>
        {end && (
          <span className={isCurrent ? "present" : undefined}>
            {"— "}
            {end}
          </span>
        )}
      </div>
      <div className="role-body">
        <h3 className="role-title">
          {title}
          {subtitle && <span className="role-subtitle"> ({subtitle})</span>}
        </h3>
        <p className="role-org">
          {company} <span className="role-location">{location}</span>
        </p>
        <ul className="role-points">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
