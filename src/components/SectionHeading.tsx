interface SectionHeadingProps {
  number: string;
  title: string;
  emphasis?: string;
  aside?: string;
}

export default function SectionHeading({ number, title, emphasis, aside }: SectionHeadingProps) {
  return (
    <header className="section-head">
      <span className="section-num">§ {number}</span>
      <h2 className="section-title">
        {title} {emphasis && <em>{emphasis}</em>}
      </h2>
      {aside && <span className="section-aside">{aside}</span>}
    </header>
  );
}
