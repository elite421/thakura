import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { company } from '@/lib/siteData';

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${company.coordinates.latitude},${company.coordinates.longitude}`);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Speak with Thakura Infratech about your project or business requirement."
        description="Reach the company for villa society plotting, construction, manufacturing, import-export, trading and material supply enquiries."
      />

      <section className="contact-layout">
        <div className="contact-card">
          <h2>Business Details</h2>
          <div className="contact-lines">
            <span><MapPin size={19} /> {company.address}</span>
            <a href={`tel:${company.phone[0].replaceAll(' ', '')}`}><Phone size={19} /> {company.phone[0]}</a>
            <a href={`tel:${company.phone[1].replaceAll(' ', '')}`}><Phone size={19} /> {company.phone[1]}</a>
            <a href={`mailto:${company.email}`}><Mail size={19} /> {company.email}</a>
          </div>
          <div className="address-box">
            <strong>City / State / Country</strong>
            <span>{company.city}, {company.state}, {company.country}</span>
          </div>
          <div className="address-box">
            <strong>Map Coordinates</strong>
            <span>{company.coordinates.label}</span>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="map-section">
        <iframe
          title="Thakura Infratech location map"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
