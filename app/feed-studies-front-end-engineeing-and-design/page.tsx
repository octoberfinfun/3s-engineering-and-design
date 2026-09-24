import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('FEED Studies', 'Front End Engineering Design including process definition, PFDs, project cost estimates, cost analysis and equipment selection.', '/feed-studies-front-end-engineeing-and-design');

export default function FeedPage() {
  return <>
    <PageHero title="FEED Studies" image={assets.feed} description="Front End Engineering Design that clarifies process needs, scope, equipment and project cost before detailed execution." />
    <Breadcrumbs current="FEED Studies" path="/feed-studies-front-end-engineeing-and-design" />
    <section className="section"><div className="content-shell feed-layout">
      <div><p className="section-kicker">Front End Engineering Design</p><h2 style={{fontSize:'42px',lineHeight:1.08,marginTop:0}}>Establish the technical and cost basis before detailed design.</h2><p className="lede">3S works with clients to define required processes, document the concept and develop the estimating information needed for early project decisions.</p><div className="feed-stages"><div className="feed-stage"><h3>Process Definition</h3><p>Work with the client to determine the process requirements and the engineering basis of the project.</p></div><div className="feed-stage"><h3>Process Flow Diagram</h3><p>Develop the PFD that communicates the major process path and equipment relationships.</p></div><div className="feed-stage"><h3>Cost & Estimating</h3><p>Provide total project cost estimates, cost analysis and estimating support.</p></div><div className="feed-stage"><h3>Equipment Selection</h3><p>Identify equipment appropriate to the process and project requirements.</p></div></div></div>
      <div className="feed-graphic"><Image src={assets.feedGraphic} alt="3S FEED study graphic" fill unoptimized /></div>
    </div></section>
    <ContactBand />
  </>;
}
