import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Safety', '3S Engineering & Design safety systems and contractor-management tools including iScout, Veriforce and ISNetworld.', '/safety');

export default function SafetyPage() {
  return <>
    <PageHero title="Safety" image={assets.safety} description="Safety management and contractor-compliance systems used by 3S Engineering & Design." />
    <Breadcrumbs current="Safety" path="/safety" />
    <section className="section">
      <div className="content-shell safety-intro">
        <div className="safety-image"><Image src={assets.safety} alt="3S Engineering & Design safety" fill unoptimized /></div>
        <div><p className="section-kicker">Safety Management</p><h2>Systems that support training, compliance and field readiness.</h2><p className="lede">3S identifies iScout, Veriforce and ISNetworld as part of its safety and contractor-management environment. The company does not publish unsupported incident-rate or “safe hours” claims on the current site, so this page keeps the focus on the systems it actually names.</p></div>
      </div>
    </section>
    <section className="section section--soft"><div className="content-shell safety-systems">
      <article className="safety-system"><h3>iScout</h3><p>A proactive HSE management tool used to help teams collect, evaluate and act on safety and training information in real time.</p></article>
      <article className="safety-system"><h3>Veriforce</h3><p>A contractor and compliance platform combining software and domain expertise to support operational effectiveness and field safety.</p></article>
      <article className="safety-system"><h3>ISNetworld</h3><p>A contractor and supplier management platform used to manage risk, qualification information and business relationships.</p></article>
    </div></section>
    <ContactBand title="Safety is part of every 3S project conversation." />
  </>;
}
