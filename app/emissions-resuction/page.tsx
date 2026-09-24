import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Emissions Reduction', '3D scanning, facility evaluation, engineering analysis, isometrics, PFDs, closed vent system certification, OGI leak detection and upgrades.', '/emissions-resuction');

export default function EmissionsPage() {
  return <>
    <PageHero title="Emissions Reduction" image={assets.emissions} imagePosition="center" description="Engineering, documentation, leak detection and facility upgrades supporting emissions-control and compliance work." />
    <Breadcrumbs current="Emissions Reduction" path="/emissions-resuction" />
    <section className="section"><div className="content-shell emissions-layout">
      <div className="emissions-image"><Image src={assets.emissions} alt="Industrial flare and emissions-reduction context" fill unoptimized /></div>
      <div><p className="section-kicker">Facility Evaluation & Compliance</p><h2 style={{fontSize:'42px',lineHeight:1.08,marginTop:0}}>Engineering support focused on the actual facility and its compliance needs.</h2><p className="lede">The 3S emissions scope combines reality capture, engineering analysis, documentation and field support rather than treating emissions reduction as a generic environmental service.</p><div className="compliance-groups">
        <section className="compliance-group"><h3>Evaluate & Document</h3><ul><li>Document proposed facilities with 3D scanning technology</li><li>Determine what is required to meet applicable state requirements</li><li>Perform engineering and facility analysis</li></ul></section>
        <section className="compliance-group"><h3>Engineering Deliverables</h3><ul><li>Create isometric drawings</li><li>Develop Process Flow Diagrams</li><li>Closed Vent System certification and stamp by a licensed PE where required</li></ul></section>
        <section className="compliance-group"><h3>Leak Detection & Repairs</h3><ul><li>Use Optical Gas Imaging / IR cameras to detect leaks</li><li>Support repairs to gaskets, seals and worn components</li><li>Fabricate and install system upgrades and design changes</li></ul></section>
        <section className="compliance-group"><h3>Carbon Management</h3><ul><li>Support Carbon Capture, Utilization and Sequestration goals</li><li>Provide additional engineering services as project needs develop</li></ul></section>
      </div></div>
    </div></section>
    <ContactBand />
  </>;
}
