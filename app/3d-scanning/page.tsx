import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('3D Scanning', '3D scanning, point clouds, HDR overlays, as-built documentation and CADWorx / AutoCAD Plant 3D integration.', '/3d-scanning');

const scanItems = [
  'Increase accuracy of equipment location',
  'Reduce site disruptions and repeat visits',
  'Reduce change orders, delays and associated cost',
  'Create more accurate design plans from the start',
  'Document existing facilities',
  'Support faster and more cost-effective tie-ins',
  'HDR photo overlay for captured conditions',
  'True as-built scanning with IFC-related deliverables',
  'Improve accuracy when tying new connections into existing assets',
  'Reduce field construction time through better existing-condition data',
  'Create 3D point clouds',
  'Provide scanned information to CADWorx Plant 3D and AutoCAD Plant 3D',
  'Use trained and certified personnel associated with Faro 3D scanning workflows'
];

export default function ScanningPage() {
  return <>
    <PageHero title="3D Scanning" image={assets.modeling} description="Reality capture used to improve existing-condition accuracy, facility documentation and downstream CAD workflows." />
    <Breadcrumbs current="3D Scanning" path="/3d-scanning" />
    <section className="section"><div className="content-shell scan-layout">
      <aside className="scan-visual"><div className="scan-visual__frame"><Image src={assets.modeling} alt="3D modeling and reality capture workflow" fill unoptimized /></div><div className="scan-visual__note"><strong>Scan-to-design workflow</strong>Captured information can be carried into CADWorx Plant 3D and AutoCAD Plant 3D for design development.</div></aside>
      <div><p className="section-kicker">Reality Capture</p><h2 style={{marginTop:0,fontSize:'42px',lineHeight:1.08}}>Accurate field conditions for design, tie-ins and documentation.</h2><p className="lede">3S uses 3D scanning to reduce uncertainty around existing facilities and give design teams a more complete spatial record before detailed work begins.</p><div className="scan-list">{scanItems.map((item)=><div className="scan-list__item" key={item}><i aria-hidden="true"/><span>{item}</span></div>)}</div></div>
    </div></section>
    <ContactBand />
  </>;
}
