import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Facility – As-Built Design', 'Electrical, mechanical and carbon-capture as-built work using field walk-downs and 3D scanning.', '/as-built-design');

export default function AsBuiltPage() {
  return <>
    <PageHero title="Facility – As-Built Design" image={assets.asBuilt} description="Field verification and 3D scanning used to build accurate records of existing facilities." />
    <Breadcrumbs current="Facility – As-Built Design" path="/as-built-design" />
    <section className="section"><div className="content-shell service-intro">
      <div><p className="section-kicker">Existing Conditions</p><h2>Document what is actually in the field.</h2><p className="lede">As-built work uses field walk-downs and/or 3D scanning so electrical and mechanical studies start from more accurate existing-condition information.</p></div>
      <div className="service-intro__image"><Image src={assets.asBuilt} alt="Facility as-built engineering" fill unoptimized /></div>
    </div></section>
    <section className="section section--soft"><div className="content-shell triad">
      <article className="triad__item"><h3>Electrical</h3><p>Field walk-downs and/or 3D scanning to create accurate inputs for power-system studies.</p></article>
      <article className="triad__item"><h3>Mechanical</h3><p>Field walk-downs and/or 3D scanning to create reliable mechanical as-built design information.</p></article>
      <article className="triad__item"><h3>Carbon Capture</h3><p>Field verification and scanning support additional compliance and facility-documentation needs.</p></article>
    </div></section>
    <ContactBand />
  </>;
}
