'use client';

import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { company, navItems } from '@/lib/siteData';
import Image from 'next/image';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>{company.city}, {company.state}</span>
        <a href={`tel:${company.phone[0].replaceAll(' ', '')}`}>
          <Phone size={14} />
          {company.phone[0]}
        </a>
      </div>
      <nav className="nav-shell">
        <Link className="brand" href="/">
          <span ><Image
        src="/logo.png"
        alt="Thakura Infratech Logo"
        width={50}
        height={40}
        priority
      /></span>
          <span>
            <strong>{company.name}</strong>
            <small>Private Limited</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <Link className="nav-cta" href="/contact">Request Quote</Link>

        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link className="mobile-cta" href="/contact" onClick={() => setOpen(false)}>Request Quote</Link>
        </div>
      )}
    </header>
  );
}
