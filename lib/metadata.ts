import type { Metadata } from 'next';

const siteUrl = 'https://www.3sengineeringanddesign.com';

export function makeMetadata(title: string, description: string, path = '/'): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | 3S Engineering & Design`,
      description,
      url,
      siteName: '3S Engineering & Design',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | 3S Engineering & Design`,
      description
    }
  };
}
