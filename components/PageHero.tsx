type PageHeroProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function PageHero({ title, eyebrow, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
