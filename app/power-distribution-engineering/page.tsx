import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Power Distribution Engineering', 'Power distribution system development, mapping, deliverability studies, power factor, harmonics, coordination and relay programming.', '/power-distribution-engineering');

export default function PowerPage() {
  return <>
    <PageHero title="Power Distribution Engineering" image={assets.power} description="Distribution design and studies for new and existing electrical systems." />
    <Breadcrumbs current="Power Distribution Engineering" path="/power-distribution-engineering" />
    <section className="section"><div className="content-shell copy-grid">
      <div><p className="section-kicker">Distribution Design & Studies</p><h2>Understand the network, then engineer for performance.</h2></div>
      <div className="copy-grid__body"><p className="lede">3S supports distribution-system development and existing-system evaluation, combining system mapping with studies that identify performance and protection requirements.</p></div>
    </div></section>
    <section className="section section--soft"><div className="content-shell">
      <div className="visual-strip"><Image src={assets.power} alt="Power distribution engineering" fill unoptimized /><div className="visual-strip__copy"><h2>Power system engineering built around actual system behavior.</h2><p>Study work can address deliverability, power-factor correction, harmonics and coordination of protective devices, followed by relay and recloser programming where required.</p></div></div>
    </div></section>
    <section className="section"><div className="content-shell detail-bands">
      <div className="detail-band"><h3>New Systems</h3><p>Engineer and develop new power distribution systems for facility and infrastructure needs.</p></div>
      <div className="detail-band"><h3>Existing Systems</h3><p>Map existing distribution systems to establish reliable documentation and study inputs.</p></div>
      <div className="detail-band"><h3>Power Studies</h3><p>Evaluate deliverability, power factor, harmonics and protective-device coordination.</p></div>
      <div className="detail-band"><h3>Protection</h3><p>Program relays and reclosers as part of distribution-system protection work.</p></div>
    </div></section>
    <ContactBand />
  </>;
}
