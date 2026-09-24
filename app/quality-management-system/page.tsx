import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Quality Management System', '3S Quality Management System with QA/QC, collaboration software, tracking and auditing of project deliverables.', '/quality-management-system');

export default function QmsPage() {
  return <>
    <PageHero title="Quality Management System" image={assets.qms} description="QA/QC processes and collaboration tools used to track, audit and support quality project delivery." />
    <Breadcrumbs current="Quality Management System" path="/quality-management-system" />
    <section className="section"><div className="content-shell qms-layout">
      <div className="qms-copy"><p className="section-kicker">QMS</p><h2>Quality controls built into project delivery.</h2><p className="lede">3S describes a full QA/QC program intended to support consistent delivery, paired with collaboration software used to track and audit project deliverables.</p><div className="qms-principles"><div className="qms-principle"><strong>QA/QC</strong><span>Program controls focused on the quality of project deliverables.</span></div><div className="qms-principle"><strong>Collaboration</strong><span>Software-supported coordination and visibility across project teams.</span></div><div className="qms-principle"><strong>Tracking</strong><span>Structured tracking of deliverables through the project lifecycle.</span></div><div className="qms-principle"><strong>Auditing</strong><span>Review and audit of project outputs as part of quality management.</span></div></div></div>
      <div className="qms-image"><Image src={assets.qms} alt="Quality management system" fill unoptimized /></div>
    </div></section>
    <ContactBand />
  </>;
}
