import Link from 'next/link';
import { MapPin, Building2, Layers, CheckCircle2, ArrowRight, Video, Navigation } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { kanpurSites, lucknowSites, upcomingProjects } from '@/lib/siteData';

export const metadata = {
  title: 'Our Sites & Projects | Thakura Infratech',
  description: 'Explore our residential plotting, villa societies, and land development sites in Kanpur and Lucknow, Uttar Pradesh.',
};

export default function SitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Premium Land Sites and Residential Societies"
        description="Thakura Infratech is actively developing residential plots, villa societies, and prime land parcels across Kanpur and Lucknow, ensuring robust connectivity, legal compliance, and exceptional value."
      />

      {/* Kanpur Sites */}
      <section className="section" id="kanpur-sites">
        <div className="section-heading">
          <span className="eyebrow">Kanpur Region</span>
          <h2>Kanpur Development Sites</h2>
          <p>Explore our premium plotting and residential land options strategically located in Kanpur's fastest-growing zones.</p>
        </div>

        <div className="service-grid">
          {kanpurSites.map((site) => (
            <article className="service-card" key={site.name} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brick)', marginBottom: '14px' }}>
                  <MapPin size={24} />
                  <span style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{site.location.split(',')[0]}</span>
                </div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{site.name}</h3>
                {site.details && (
                  <span style={{ display: 'inline-block', background: 'var(--soft)', color: 'var(--steel)', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, marginBottom: '12px' }}>
                    {site.details}
                  </span>
                )}
                <p style={{ margin: '10px 0 0 0', fontSize: '15px' }}>{site.highlight}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/contact" className="text-link" style={{ fontSize: '14px' }}>
                  Enquire About Site <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lucknow Sites */}
      <section className="section muted-section" id="lucknow-sites">
        <div className="section-heading">
          <span className="eyebrow">Lucknow Region</span>
          <h2>Lucknow Development Sites</h2>
          <p>Discover high-potential plotting sites and residential projects situated in the capital city's primary residential expansion zones.</p>
        </div>

        <div className="service-grid">
          {lucknowSites.map((site) => (
            <article className="service-card" key={site.name} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brick)', marginBottom: '14px' }}>
                  <MapPin size={24} />
                  <span style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{site.location.split(',')[0]}</span>
                </div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{site.name}</h3>
                {site.details && (
                  <span style={{ display: 'inline-block', background: 'var(--soft)', color: 'var(--steel)', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, marginBottom: '12px' }}>
                    {site.details}
                  </span>
                )}
                <p style={{ margin: '10px 0 0 0', fontSize: '15px' }}>{site.highlight}</p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/contact" className="text-link" style={{ fontSize: '14px' }}>
                  Enquire About Site <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Upcoming Projects & Video Section */}
      <section className="section" id="upcoming-projects">
        <div className="section-heading">
          <span className="eyebrow">Future Developments</span>
          <h2>Upcoming Townships & Projects</h2>
          <p>Get a glimpse of our next-generation premium township projects arriving soon in prime locations.</p>
        </div>

        {upcomingProjects.map((project) => (
          <div key={project.name} className="service-detail-grid" style={{ gap: '40px', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: 'clamp(20px, 4vw, 48px)', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.06)' }}>
            
            {/* Project Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span style={{ display: 'inline-block', background: 'var(--gold)', color: '#fff', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  {project.status}
                </span>
                <h3 style={{ margin: '0 0 8px 0', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800 }}>{project.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                  <MapPin size={18} style={{ color: 'var(--brick)' }} />
                  <span>{project.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--steel)', fontSize: '14px', fontWeight: 700 }}>
                  <Navigation size={18} style={{ color: 'var(--green)' }} />
                  <span>{project.highway}</span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '16px 0' }}>
                <span style={{ display: 'block', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Project Highlights</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {project.details.split('and').map((det) => (
                    <span key={det} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--soft)', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--steel)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--green)' }} /> {det.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '16px', lineHeight: 1.6 }}>
                {project.description}
              </p>

              <div style={{ marginTop: '10px' }}>
                <Link href="/contact" className="primary-btn">
                  Register Interest <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Video Player */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', background: '#000', border: '4px solid var(--soft)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)', aspectRatio: '16/9' }}>
                <video
                  src={project.videoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'var(--soft)', borderRadius: '6px', color: 'var(--steel)', fontSize: '13px', fontWeight: 700 }}>
                <Video size={16} style={{ color: 'var(--brick)' }} />
                <span>Watch project site preview and development update video</span>
              </div>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}
