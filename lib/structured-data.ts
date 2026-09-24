import { company } from '@/data/company';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: company.name,
  url: 'https://www.3sengineeringanddesign.com',
  telephone: company.phone,
  email: company.email,
  foundingDate: String(company.founded),
  sameAs: [company.socials.linkedin],
  areaServed: ['Midland, Texas', 'Arlington, Texas', 'Katy, Texas'],
  address: company.offices.map((office) => ({
    '@type': 'PostalAddress',
    streetAddress: office.addressLines.join(', '),
    addressLocality: office.shortName,
    addressRegion: 'TX',
    addressCountry: 'US'
  }))
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.3sengineeringanddesign.com${item.path}`
    }))
  };
}
