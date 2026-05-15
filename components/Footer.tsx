import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, navItems } from '@/lib/siteData';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span><Image
                    src="/logo.png"
                    alt="Thakura Infratech Logo"
                    width={50}
                    height={40}
                    priority
                  /></span>Thakura Infratech</div>
          <p>
            Contractor, manufacturer, import-export, trading and infrastructure services company
            serving development needs from Fatehpur, Uttar Pradesh.
          </p>
        </div>

        <div>
          <h3>Pages</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <a href={`tel:${company.phone[0].replaceAll(' ', '')}`}><Phone size={15} />{company.phone[0]}</a>
          <a href={`tel:${company.phone[1].replaceAll(' ', '')}`}><Phone size={15} />{company.phone[1]}</a>
          <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>
          <span><MapPin size={15} />{company.city}, {company.state}, {company.country}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
        <span>{company.website}</span>
      </div>
    </footer>
  );
}
