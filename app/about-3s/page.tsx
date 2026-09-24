import Image from 'next/image';
import { assets } from '@/data/assets';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('About 3S', 'Learn about 3S Engineering & Design, its Service, Safety and Satisfaction pillars, mission and industries served.', '/about-3s');

export default function AboutPage() {
  return (
    <>
      <PageHero title="About 3S" image={assets.about} description="Service, Safety and Satisfaction guide the way 3S approaches multidisciplinary engineering and design work." />
      <Breadcrumbs current="About 3S" path="/about-3s" />
      <section className="section">
        <div className="content-shell">
          <div className="section-heading">
            <div><p className="section-kicker">Our Three Pillars</p><h2>A practical standard for how projects are delivered.</h2></div>
            <p>3S frames its company culture around three long-standing principles rather than unsupported performance claims.</p>
          </div>
          <div className="about-pillars">
            <article className="about-pillar"><h3>Service</h3><p>The objective is to exceed client expectations through responsive, high-quality service.</p></article>
            <article className="about-pillar"><h3>Safety</h3><p>3S emphasizes safe designs and a work environment intended to protect employees and clients every day.</p></article>
            <article className="about-pillar"><h3>Satisfaction</h3><p>Service and safety standards are presented as the foundation for lasting client satisfaction across industries.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="content-shell mission-block">
          <div><p className="section-kicker">Mission Statement</p><h2>Reliable, cost-effective technical solutions.</h2></div>
          <blockquote>3S focuses on dependable engineering, design, technical solutions and quality standards while enabling its workforce to meet company and client objectives.</blockquote>
        </div>
      </section>
      <section className="section">
        <div className="content-shell">
          <div className="section-heading">
            <div><p className="section-kicker">Industries We Serve</p><h2>Industrial work across energy and infrastructure.</h2></div>
            <p>The current 3S site identifies energy, renewables, utilities and manufacturing as core areas, with specific sub-sectors and technical needs within each.</p>
          </div>
          <div className="industry-grid">
            <article className="industry"><h3>Energy</h3><ul><li>Upstream</li><li>Midstream — Oil, Water, SWD</li><li>Downstream</li></ul></article>
            <article className="industry"><h3>Renewables</h3><ul><li>Solar</li><li>Wind</li></ul></article>
            <article className="industry"><h3>Utilities</h3><ul><li>Natural Gas</li><li>Electricity</li><li>Water / Wastewater</li></ul></article>
            <article className="industry"><h3>Manufacturing</h3><ul><li>Power Studies</li><li>Compliance</li></ul></article>
          </div>
        </div>
      </section>
      <section className="section section--warm">
        <div className="site-shell who-grid">
          <div className="who-grid__image"><Image src={assets.about} alt="3S Engineering & Design" fill unoptimized /></div>
          <div className="who-grid__copy"><p className="section-kicker">Established in 2011</p><h2>Engineering and design with a broad technical scope.</h2><p>From mechanical, civil and process work to power systems, automation, 3D modeling, scanning and project controls, 3S combines multiple disciplines under one organization.</p><p>The site keeps the details of each discipline visible instead of collapsing the company into generic service labels.</p></div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
