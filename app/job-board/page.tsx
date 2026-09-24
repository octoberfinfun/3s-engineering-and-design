import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { company } from '@/data/company';
import { makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata('Job Board', '3S Engineering & Design job board and official company career updates.', '/job-board');

export default function JobBoardPage() {
  return <>
    <Breadcrumbs current="Job Board" path="/job-board" />
    <section className="job-empty">
      <p className="section-kicker">Job Board</p>
      <h1>There are no openings listed on the website right now.</h1>
      <p>The current 3S website does not publish active positions on its Job Board. For official company updates, use the verified 3S Engineering &amp; Design LinkedIn page.</p>
      <div className="job-empty__actions"><a className="button button--green" href={company.socials.linkedin} target="_blank" rel="noreferrer">View Official LinkedIn</a><Link className="button" style={{borderColor:'#aab4b0'}} href="/contact-us">Contact 3S</Link></div>
    </section>
  </>;
}
