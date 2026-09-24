export const services = [
  { title: 'Engineering and Design', href: '/engineering-and-design' },
  { title: 'Electrical Engineering & Design', href: '/facility-electrical-engineering' },
  { title: 'Power Distribution Engineering', href: '/power-distribution-engineering' },
  { title: 'Automation & Controls', href: '/automation-controls' },
  { title: '3D Modeling and Drafting', href: '/3d-modeling-and-drafting' },
  { title: 'Facility – As-Built Design', href: '/as-built-design' },
  { title: '3D Scanning', href: '/3d-scanning' },
  { title: 'FEED Studies', href: '/feed-studies-front-end-engineeing-and-design' },
  { title: 'Emissions Reduction', href: '/emissions-resuction' },
  { title: 'Project Management', href: '/project-management' },
  { title: 'Quality Management System', href: '/quality-management-system' }
] as const;

export const mainNavigation = [
  { title: 'Home', href: '/' },
  { title: 'About 3S', href: '/about-3s' },
  { title: 'Our Services', href: '/#services', children: services },
  { title: 'Safety', href: '/safety' },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'Job Board', href: '/job-board' }
] as const;
