import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Project Management', 'Detailed schedules, team and client coordination, weekly reporting, KPIs, procurement and construction coordination.', '/project-management');

export default function ProjectManagementPage() {
  return <>
    <PageHero title="Project Management" image={assets.projectManagement} description="Project controls and coordination designed to keep engineering, procurement and construction activities aligned." />
    <Breadcrumbs current="Project Management" path="/project-management" />
    <section className="section"><div className="content-shell pm-grid">
      <div className="pm-image"><Image src={assets.projectManagement} alt="Project management planning" fill unoptimized /></div>
      <div><p className="section-kicker">Project Controls</p><h2 style={{fontSize:'42px',lineHeight:1.08,marginTop:0}}>Keep schedule, communication and execution connected.</h2><div className="pm-rows"><div className="pm-row"><h3>Detailed Schedules</h3><p>Develop schedules that define project activities and provide a common basis for progress tracking.</p></div><div className="pm-row"><h3>Team & Client Coordination</h3><p>Coordinate activities and knowledge sharing between team members and clients to help projects stay on schedule.</p></div><div className="pm-row"><h3>Progress Reporting</h3><p>Provide weekly progress reports and key performance indicators.</p></div><div className="pm-row"><h3>Procurement & Construction</h3><p>Coordinate procurement and construction activities with the broader project plan.</p></div></div></div>
    </div></section>
    <ContactBand />
  </>;
}
