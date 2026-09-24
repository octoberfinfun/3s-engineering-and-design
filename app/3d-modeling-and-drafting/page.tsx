import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('3D Modeling and Drafting', 'AutoCAD Plant 3D, CADWorx Plant, Autodesk Advanced Steel, rendering, laser-scan integration and CAD support.', '/3d-modeling-and-drafting');

export default function ModelingPage() {
  return <>
    <PageHero title="3D Modeling and Drafting" image={assets.modeling} description="Plant modeling, drafting and scan-informed workflows for coordinated engineering design." />
    <Breadcrumbs current="3D Modeling and Drafting" path="/3d-modeling-and-drafting" />
    <section className="section"><div className="content-shell"><div className="visual-strip"><Image src={assets.modeling} alt="3D engineering model" fill unoptimized /><div className="visual-strip__copy"><p className="section-kicker">Digital Design</p><h2>Model the facility before construction reaches the field.</h2><p>3S combines plant-modeling tools, CAD operators, rendering and laser-scan information to support design coordination and review.</p></div></div></div></section>
    <section className="section section--soft"><div className="content-shell detail-bands">
      <div className="detail-band"><h3>Plant Modeling</h3><p>AutoCAD Plant 3D and CADWorx Plant 3D modeling for process and facility layouts.</p></div>
      <div className="detail-band"><h3>Structural Modeling</h3><p>Autodesk Advanced Steel modeling as part of coordinated multidisciplinary design.</p></div>
      <div className="detail-band"><h3>Reality Capture</h3><p>3D laser-scan capability can be brought into the modeling environment for existing-condition accuracy.</p></div>
      <div className="detail-band"><h3>Review & Presentation</h3><p>3D model reviews and rendering / marketing support help teams communicate design intent.</p></div>
      <div className="detail-band"><h3>Source Information</h3><p>Certified plat and survey drawings can be incorporated into project modeling workflows.</p></div>
      <div className="detail-band"><h3>CAD Support</h3><p>Mechanical CAD and electrical CAD operators support detailed project documentation.</p></div>
    </div></section>
    <ContactBand />
  </>;
}
