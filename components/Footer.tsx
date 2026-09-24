import Link from 'next/link';
import { Logo } from './Logo';
import { company, directionsUrl } from '@/data/company';
import { services } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Logo footer />
          <p>Multidisciplinary engineering and design support serving energy, utilities, renewables, and manufacturing from three Texas offices.</p>
          <a className="footer-link" href={company.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div>
          <h2 className="footer-heading">Company</h2>
          <div className="footer-links">
            <Link href="/about-3s">About 3S</Link>
            <Link href="/safety">Safety</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/job-board">Job Board</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Services</h2>
          <div className="footer-links footer-links--services">
            {services.slice(0, 7).map((service) => <Link href={service.href} key={service.href}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Offices</h2>
          <div className="footer-offices">
            {company.offices.map((office) => (
              <a href={directionsUrl(office.mapQuery)} target="_blank" rel="noreferrer" key={office.name}>
                <strong>{office.shortName}</strong>
                <span>{office.cityStateZip}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} 3S Engineering &amp; Design. All Rights Reserved.</span>
        <span><a href={`mailto:${company.email}`}>{company.email}</a> · <a href={`tel:${company.phone.replace(/\D/g, '')}`}>{company.phone}</a></span>
      </div>
    </footer>
  );
}
