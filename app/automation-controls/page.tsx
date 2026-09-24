import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Automation & Controls', 'P&IDs, instrumentation, PLC layouts and programming, HMI, SCADA, Modbus mapping and controls documentation.', '/automation-controls');

export default function AutomationPage() {
  return <>
    <PageHero title="Automation & Controls" image={assets.automation} imagePosition="center 38%" description="Controls engineering and programming spanning instrumentation documentation, PLCs, HMIs and SCADA systems." />
    <Breadcrumbs current="Automation & Controls" path="/automation-controls" />
    <section className="section"><div className="content-shell service-intro">
      <div className="service-intro__image"><Image src={assets.automation} alt="Automation and controls" fill unoptimized /></div>
      <div><p className="section-kicker">Controls Engineering</p><h2>Documentation and programming from field instruments to supervisory systems.</h2><p className="lede">3S develops controls documentation and software for industrial facilities, from P&amp;IDs and I/O definition through PLC, HMI and SCADA programming.</p></div>
    </div></section>
    <section className="section section--soft"><div className="content-shell platform-grid">
      <article className="platform-block"><h3>Design Documentation</h3><ul><li>P&amp;ID development and design</li><li>Instrumentation lists and datasheets</li><li>PLC layouts and I/O lists</li><li>Cause &amp; Effects / Safe Charts</li></ul></article>
      <article className="platform-block"><h3>Communications</h3><ul><li>PLC ICD documentation</li><li>Modbus mapping for programming</li></ul></article>
      <article className="platform-block"><h3>PLC Programming</h3><p>Allen Bradley, Modicon, Fisher ROC and related industrial PLC platforms.</p></article>
      <article className="platform-block"><h3>HMI Programming</h3><p>Red Lion, Allen Bradley, IDEC and similar operator-interface platforms.</p></article>
      <article className="platform-block"><h3>SCADA Programming</h3><p>Wonderware, Cygnet and related supervisory systems.</p></article>
      <article className="platform-block"><h3>Integrated Delivery</h3><p>Controls documentation and programming coordinated with broader engineering and facility design work.</p></article>
    </div></section>
    <ContactBand />
  </>;
}
