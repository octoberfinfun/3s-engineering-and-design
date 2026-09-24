import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { organizationSchema } from '@/lib/structured-data';
import { assets } from '@/data/assets';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.3sengineeringanddesign.com'),
  title: { default: '3S Engineering & Design', template: '%s | 3S Engineering & Design' },
  description: 'Multidisciplinary engineering, design, electrical, automation, 3D scanning, FEED, project management and quality services from 3S Engineering & Design.',
  icons: { icon: assets.logo, apple: assets.logo }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
