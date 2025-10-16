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
  return (
    <div className="relative flex items-start space-x-6">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
          <div className="flex items-center space-x-2 mb-1 md:mb-0">
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <span className="text-sm text-gray-400">({subtitle})</span>}
          </div>
          <div className="text-sm text-gray-400 font-medium">{duration}</div>
        </div>
        <div className="text-gray-400 mb-3">{company} • {location}</div>
        <ul className="space-y-1 text-gray-300">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>• {responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
