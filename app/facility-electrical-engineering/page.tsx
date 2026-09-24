import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Electrical Engineering & Design', 'Electrical equipment engineering, load lists, arc-flash studies, one-line diagrams, motor circuits and cable schedules.', '/facility-electrical-engineering');

export default function ElectricalPage() {
  return <>
    <PageHero title="Electrical Engineering & Design" image={assets.electrical} imagePosition="center" description="Facility electrical design focused on equipment, studies and the documentation needed to build and operate reliable systems." />
    <Breadcrumbs current="Electrical Engineering & Design" path="/facility-electrical-engineering" />
    <section className="section">
      <div className="content-shell service-intro">
        <div><p className="section-kicker">Electrical Scope</p><h2>From equipment definition to coordinated design packages.</h2><p className="lede">3S develops the core engineering and design information needed for facility electrical systems, including equipment requirements, loading, arc-flash work and construction documentation.</p></div>
        <div className="service-intro__image"><Image src={assets.electrical} alt="Electrical engineering design" fill unoptimized /></div>
      </div>
    </section>
    <section className="section section--soft"><div className="content-shell detail-bands">
      <div className="detail-band"><h3>Equipment</h3><ul><li>Engineer and specify electrical equipment</li><li>Develop facility load lists</li></ul></div>
      <div className="detail-band"><h3>Arc Flash</h3><ul><li>Perform ARC flash studies</li><li>Develop mitigation for undesirable arc-flash consequences</li></ul></div>
      <div className="detail-band"><h3>Design Drawings</h3><ul><li>One-line diagrams</li><li>Motor circuit diagrams</li></ul></div>
      <div className="detail-band"><h3>Schedules</h3><ul><li>Cable schedules</li><li>Conduit schedules</li><li>Cable-tray schedules</li></ul></div>
    </div></section>
    <ContactBand />
  </>;
}
