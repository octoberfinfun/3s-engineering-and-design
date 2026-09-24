import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/structured-data';

export function Breadcrumbs({ current, path }: { current: string; path: string }) {
  const schema = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: current, path }]);
  return (
    <>
      <nav className="breadcrumbs site-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
