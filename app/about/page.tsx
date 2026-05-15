import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { company, constructionImage, values } from '@/lib/siteData';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Regional infrastructure company with construction, trading and manufacturing capability."
        description={`${company.legalName} has served development and business requirements since ${company.established}, operating from Fatehpur, Uttar Pradesh.`}
      />

      <section className="split-section">
        <div className="split-content">
          <span className="eyebrow">Company Introduction</span>
          <h2>Thakura Infratech brings multiple project needs under one responsible business house.</h2>
          <p>
            The company works as a contractor, manufacturer, importer, exporter, trader and project support partner.
            Its work covers villa society plotting, construction coordination, material procurement and commercial
            trading requirements.
          </p>
          <p>
            With local presence near Fatehpur-Jahanabad Road, the company focuses on accessible communication,
            reliable execution and practical solutions for residential and business clients.
          </p>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${constructionImage})` }} />
      </section>

      <section className="section muted-section">
        <div className="mission-grid">
          <article>
            <span className="eyebrow">Mission</span>
            <h3>To deliver dependable construction, plotting, manufacturing and trading services with clear process and responsible execution.</h3>
          </article>
          <article>
            <span className="eyebrow">Vision</span>
            <h3>To become a trusted regional name for villa society development, infrastructure support and business supply services.</h3>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Core Values</span>
          <h2>How we work</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div className="value-item" key={value.title}>
                <Icon size={24} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section compact-section">
        <div className="credential-box">
          <h2>Certifications & Achievements</h2>
          <p>
            Company documentation, statutory registrations, project records and business certifications can be shared
            with clients during formal project discussions.
          </p>
          <div className="check-list">
            <span><CheckCircle2 size={18} /> Registered private limited company</span>
            <span><CheckCircle2 size={18} /> Established business operations since {company.established}</span>
            <span><CheckCircle2 size={18} /> Multi-sector contractor and trading capability</span>
          </div>
        </div>
      </section>
    </>
  );
}
