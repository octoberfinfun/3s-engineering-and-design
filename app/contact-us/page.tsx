import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { assets } from '@/data/assets';
import { company, directionsUrl } from '@/data/company';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Contact Us', 'Contact 3S Engineering & Design in Midland, Arlington or Katy, Texas. Office addresses, hours, phone, email and inquiry form.', '/contact-us');

export default function ContactPage() {
  return <>
    <PageHero title="Contact Us" image={assets.officeMidland} imagePosition="center 55%" description="Connect with the Permian Basin, Dallas–Fort Worth or Houston-area 3S office." />
    <Breadcrumbs current="Contact Us" path="/contact-us" />
    <section className="section"><div className="content-shell contact-layout">
      <aside className="contact-sidebar">
        <p className="section-kicker">Project Inquiries</p><h2>Tell us what you need.</h2><p>Use the form for engineering, design, scanning, power, automation, project management, emissions or general inquiries. You can also contact 3S directly.</p>
        <div className="contact-direct"><a href={`tel:${company.phone.replace(/\D/g,'')}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div>
        <div className="hours"><strong>Office Hours</strong><br/>{company.officeHours[0]}<br/>{company.officeHours[1]}</div>
      </aside>
      <ContactForm />
    </div></section>
    <section className="section section--soft"><div className="site-shell">
      <div className="section-heading"><div><p className="section-kicker">Our Offices</p><h2>Three Texas locations.</h2></div><p>The addresses below match the current public contact information shown by 3S Engineering & Design.</p></div>
      <div className="office-grid">
        {company.offices.map((office) => <article className="office-card" key={office.name}>
          <div className="office-card__image"><Image src={assets[office.image]} alt={`${office.shortName} 3S Engineering & Design office`} fill unoptimized /></div>
          <div className="office-card__body"><h3>{office.name}</h3><address>{office.addressLines.map((line)=><span key={line}>{line}<br/></span>)}{office.cityStateZip}</address><a className="text-link" href={directionsUrl(office.mapQuery)} target="_blank" rel="noreferrer">Open Directions</a></div>
        </article>)}
      </div>
    </div></section>
  </>;
}
