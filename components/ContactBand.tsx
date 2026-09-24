import Link from 'next/link';

export function ContactBand({
  title = 'Talk with the 3S team about your project.',
  text = 'Connect with one of our Texas offices for engineering, design, scanning, project management, or technical support.'
}: { title?: string; text?: string }) {
  return (
    <section className="contact-band">
      <div className="site-shell contact-band__inner">
        <div><h2>{title}</h2><p>{text}</p></div>
        <Link href="/contact-us" className="button button--light">Contact Us</Link>
      </div>
    </section>
  );
}
