import Link from 'next/link';

export default function NotFound() {
  return <section className="job-empty"><p className="section-kicker">404</p><h1>Page not found.</h1><p>The page may have moved. Use the main navigation or return to the homepage.</p><div className="job-empty__actions"><Link className="button button--green" href="/">Return Home</Link></div></section>;
}
