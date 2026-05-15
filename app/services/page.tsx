import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { services } from '@/lib/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Contracting, development, trading and supply services for growing projects."
        description="From plotting and villa society development to civil construction, manufacturing support and import-export trading, Thakura Infratech provides practical project services."
      />

      <section className="section">
        <div className="service-detail-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-detail" key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <Icon size={30} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link href="/contact">Discuss Requirement <ArrowRight size={16} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <span className="eyebrow">Process</span>
          <h2>Simple working approach</h2>
        </div>
        <div className="process-grid">
          {['Requirement discussion', 'Site or supply assessment', 'Quotation and scope', 'Execution and coordination'].map((step, index) => (
            <div key={step}>
              <strong>{index + 1}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
