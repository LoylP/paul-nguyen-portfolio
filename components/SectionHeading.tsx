type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
};

export function SectionHeading({ eyebrow, title, titleId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
    </div>
  );
}
