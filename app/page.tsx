import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';
import { services } from '@/data/navigation';
import { company, directionsUrl } from '@/data/company';
import { ContactBand } from '@/components/ContactBand';

const serviceDescriptions: Record<string, string> = {
  '/engineering-and-design': 'Mechanical, civil/structural, electrical and process engineering disciplines.',
  '/facility-electrical-engineering': 'Equipment specification, load lists, arc-flash work and electrical design deliverables.',
  '/power-distribution-engineering': 'Distribution development, mapping, power studies and protective device coordination.',
  '/automation-controls': 'P&IDs, instrumentation, PLC/HMI/SCADA programming and control documentation.',
  '/3d-modeling-and-drafting': 'Plant 3D, CADWorx, Advanced Steel, rendering and model review workflows.',
  '/as-built-design': 'Field walk-downs and scanning for accurate electrical, mechanical and carbon-capture records.',
  '/3d-scanning': 'Reality capture for accurate locations, point clouds, tie-ins and as-built documentation.',
  '/feed-studies-front-end-engineeing-and-design': 'PFD development, estimating support, cost analysis and equipment selection.',
  '/emissions-resuction': 'Facility evaluation, leak detection, engineering analysis and emissions-control support.',
  '/project-management': 'Schedules, reporting, KPIs, procurement and construction coordination.',
  '/quality-management-system': 'QA/QC, collaboration, tracking and auditing of project deliverables.'
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image src={assets.homeHero} alt="Industrial engineering facility" fill priority unoptimized className="home-hero__image" />
        <div className="home-hero__overlay" />
        <div className="site-shell home-hero__content">
          <p className="home-hero__kicker">Exceeding expectations since 2011</p>
          <h1>Engineering &amp; Design</h1>
          <p>Multidisciplinary engineering, design and CAD support from Texas teams serving complex energy, utility, renewable and manufacturing work.</p>
          <div className="home-hero__actions">
            <Link href="#services" className="button button--green">Explore Our Services</Link>
            <Link href="/contact-us" className="button button--outline">Contact 3S</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell who-grid">
          <div className="who-grid__image">
            <Image src={assets.homeSecondary} alt="3S Engineering & Design project imagery" fill unoptimized sizes="(max-width: 1080px) 100vw, 52vw" />
          </div>
          <div className="who-grid__copy">
            <p className="section-kicker">Who We Are</p>
            <h2>Engineering depth across three Texas offices.</h2>
            <p>3S Engineering &amp; Design is based in the Permian Basin in Midland, with offices in Arlington and Katy. The current company site describes a team of more than 90 engineering, design and CAD professionals supporting project demands.</p>
            <p>Senior engineering and design teams cover the work needed to move from facility concepts and calculations through detailed construction drawings, 3D piping models and electrical interconnections.</p>
            <Link href="/about-3s" className="text-link">About 3S</Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="services">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="section-kicker">Our Services</p><h2>Multidisciplinary engineering, design and technical delivery.</h2></div>
            <p>3S supports facility and infrastructure projects with discipline engineering, electrical and power studies, automation, reality capture, FEED, project management, emissions work and quality control.</p>
          </div>
          <div className="service-index">
            {services.map((service) => (
              <Link href={service.href} className="service-row" key={service.href}>
                <span className="service-row__marker" aria-hidden="true" />
                <span className="service-row__title">{service.title}</span>
                <span className="service-row__description">{serviceDescriptions[service.href]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-shell expectations">
          <div className="expectations__statement">
            <p className="section-kicker">3S Engineering &amp; Design</p>
            <h2>Exceeding Expectations Since 2011</h2>
            <p>3S works with clients to understand project goals and apply engineering leadership, knowledge and design expertise with attention to schedule, safety, sustainability and budget.</p>
          </div>
          <div className="expectations__facts">
            <strong>2011</strong>
            <span>Founded</span>
            <p>The company’s three operating principles — Service, Safety and Satisfaction — remain central to how 3S presents its engineering and design work.</p>
          </div>
        </div>
      </section>

      <section className="section" id="locations">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="section-kicker">Our Locations</p><h2>Three offices. One engineering organization.</h2></div>
            <p>Reach 3S in the Permian Basin, the Dallas–Fort Worth area or the Houston area. Company contact details are centralized so updates flow across the entire site.</p>
          </div>
          <div className="locations-grid">
            {company.offices.map((office) => (
              <article className="location-card" key={office.name}>
                <h3>{office.name}</h3>
                <p>{office.addressLines.join(', ')}<br />{office.cityStateZip}</p>
                <a className="text-link" href={directionsUrl(office.mapQuery)} target="_blank" rel="noreferrer">Directions</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
