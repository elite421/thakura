import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone } from 'lucide-react';
import { company, constructionImage, heroImage, highlights, products, projectImage, services, values, directors } from '@/lib/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(16, 24, 32, .88), rgba(16, 24, 32, .42)), url(${heroImage})` }}>
        <div className="hero-content">
          <span className="eyebrow">Established {company.established} · Fatehpur, Uttar Pradesh</span>
          <h1>{company.name}</h1>
          <p>
            Villa society plotting, civil construction, manufacturing support, import-export and trading services
            for reliable regional development.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-btn">Start an Enquiry <ArrowRight size={18} /></Link>
            <Link href="/services" className="secondary-btn">View Services</Link>
          </div>
        </div>
      </section>

      <section className="stats-band">
        {highlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">What We Do</span>
          <h2>Development, construction and supply support from one dependable team.</h2>
          <p>
            Thakura Infratech works across plotting, construction contracting, trading, manufacturing-linked supply
            and import-export requirements.
          </p>
        </div>
        <div className="service-grid">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section">
        <div className="split-image" style={{ backgroundImage: `url(${projectImage})` }} />
        <div className="split-content">
          <span className="eyebrow">About The Company</span>
          <h2>Built for practical execution and long-term business relationships.</h2>
          <p>
            {company.legalName} began in {company.established} with a focus on regional infrastructure,
            residential development and business trading needs. The company combines contractor experience
            with procurement, supply and project coordination.
          </p>
          <div className="check-list">
            <span><CheckCircle2 size={18} /> Residential and commercial construction support</span>
            <span><CheckCircle2 size={18} /> Plotting and villa society development coordination</span>
            <span><CheckCircle2 size={18} /> Trading, manufacturing and import-export services</span>
          </div>
          <Link href="/about" className="text-link">Know More <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-heading">
          <span className="eyebrow">Products</span>
          <h2>Products and project categories</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className="product-card" key={product.title}>
                <Icon size={26} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Leadership</span>
          <h2>Meet the Directors</h2>
          <p>The visionaries guiding our projects, business operations and regional development initiatives.</p>
        </div>
        <div className="product-grid large">
          {directors.map((director) => (
            <article className="director-card" key={director.name}>
              {/* Note: The user can swap out the image src with actual director images */}
              <img src={director.image} alt={director.name} />
              <div className="director-info">
                <h3>{director.name}</h3>
                <span>{director.role}</span>
                <p>{director.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-cta" style={{ backgroundImage: `linear-gradient(90deg, rgba(129, 55, 24, .9), rgba(30, 41, 59, .75)), url(${constructionImage})` }}>
        <div>
          <span className="eyebrow">Project Enquiry</span>
          <h2>Need construction, plotting or supply support in Uttar Pradesh?</h2>
        </div>
        <div className="cta-contact">
          <a href={`tel:${company.phone[0].replaceAll(' ', '')}`}><Phone size={18} /> {company.phone[0]}</a>
          <Link href="/contact">Contact Us</Link>
        </div>
      </section>

      <section className="section">
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

      <section className="contact-strip">
        <span><MapPin size={18} /> {company.address}</span>
        <span><Clock size={18} /> Enquiries open Monday to Saturday</span>
      </section>
    </>
  );
}
