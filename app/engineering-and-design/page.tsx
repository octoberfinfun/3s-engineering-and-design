import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactBand } from '@/components/ContactBand';
import { assets } from '@/data/assets';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Engineering and Design', 'Mechanical, civil/structural, electrical and process engineering and design capabilities from 3S.', '/engineering-and-design');

const mechanical = ['Piping design and specifications','Vessel design and sizing','Material specifications and selection','Valve selection and sizing','Compression sizing and design','Piping stress calculations','Facility spacing and layout design','Equipment access requirements','Facility design'];
const civil = ['Structural design and details','Foundation design and details'];
const electrical = ['Low- and medium-voltage engineering and design','One-line diagrams','Grounding plans','Area classification plans','Cable tray plans and 3D models','Instrument location plans','Motor control schematics','Equipment datasheets','Power and instrumentation cable schedules','Electrical room / rack layouts','Electrical FEED','SKM, ETAP and Milsoft system modeling','Load-flow analysis','Short-circuit analysis','Motor-starting studies','Harmonic analysis','Arc-flash study and mitigation','Code-violation review','Field inspections and inventories','Electrical system documentation'];
const process = ['ProMax flow modeling','P&ID development','Process Flow Diagrams','Process safety flow','Relief-valve studies','Flare-line sizing and flare design','Equipment sizing and requirements','HazOp / PHA support'];

function List({items}:{items:string[]}) { return <ul className="tech-list">{items.map((item)=><li key={item}>{item}</li>)}</ul>; }

export default function EngineeringPage() {
  return <>
    <PageHero title="Engineering and Design" image={assets.engineering} description="Mechanical, civil/structural, electrical and process disciplines supporting detailed facility and infrastructure work." />
    <Breadcrumbs current="Engineering and Design" path="/engineering-and-design" />
    <section className="section">
      <div className="content-shell discipline-layout">
        <aside className="discipline-nav" aria-label="Engineering disciplines"><a href="#mechanical">Mechanical</a><a href="#civil">Civil / Structural</a><a href="#electrical">Electrical</a><a href="#process">Process</a></aside>
        <div className="discipline-sections">
          <section className="discipline-section" id="mechanical"><p className="section-kicker">Discipline</p><h2>Mechanical</h2><p className="lede">3S mechanical work covers the equipment, piping, materials and layout decisions required to develop constructible facilities.</p><List items={mechanical}/></section>
          <section className="discipline-section" id="civil"><p className="section-kicker">Discipline</p><h2>Civil / Structural</h2><p className="lede">Structural and foundation design supports equipment, piping and facility arrangements with the required physical infrastructure.</p><List items={civil}/></section>
          <section className="discipline-section" id="electrical"><p className="section-kicker">Discipline</p><h2>Electrical</h2><p className="lede">The electrical scope runs from field inventories and drawing development through computer modeling, power studies and FEED.</p><List items={electrical}/></section>
          <section className="discipline-section" id="process"><p className="section-kicker">Discipline</p><h2>Process</h2><p className="lede">Process engineering includes modeling, flow documentation, sizing, relief and flare work, plus process-safety support.</p><List items={process}/></section>
        </div>
      </div>
    </section>
    <ContactBand title="Need multidisciplinary engineering support?" />
  </>;
}
