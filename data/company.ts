export type Office = {
  name: string;
  shortName: string;
  addressLines: string[];
  cityStateZip: string;
  mapQuery: string;
  image: 'officeMidland' | 'officeHouston' | 'officeArlington';
};

export const company = {
  name: '3S Engineering & Design',
  legalDisplayName: '3S Engineering and Design',
  founded: 2011,
  phone: '432-687-5611',
  email: 'contact@3-sservices.com',
  officeHours: [
    'Monday–Thursday 7:30 AM–5:30 PM (CST)',
    'Friday 7:30 AM–11:30 AM (CST)'
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/3s-engineering-%26-design'
  },
  offices: [
    {
      name: 'Permian Basin / Midland',
      shortName: 'Midland',
      addressLines: ['3300 N. A St. Bldg 2', 'Suite 100'],
      cityStateZip: 'Midland, TX 79705',
      mapQuery: '3300 N A St Bldg 2 Suite 100 Midland TX 79705',
      image: 'officeMidland'
    },
    {
      name: 'Dallas–Fort Worth / Arlington',
      shortName: 'Arlington',
      addressLines: ['2401 East Randol Mill Rd.', 'Suite 510'],
      cityStateZip: 'Arlington, TX 76011',
      mapQuery: '2401 East Randol Mill Rd Suite 510 Arlington TX 76011',
      image: 'officeArlington'
    },
    {
      name: 'Houston Area / Katy',
      shortName: 'Katy',
      addressLines: ['2002 West Grand Pkwy North', 'Suite 310'],
      cityStateZip: 'Katy, TX 77449',
      mapQuery: '2002 West Grand Pkwy North Suite 310 Katy TX 77449',
      image: 'officeHouston'
    }
  ] satisfies Office[]
} as const;

export const directionsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
