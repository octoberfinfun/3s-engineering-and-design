import Image from 'next/image';

export function PageHero({
  title,
  image,
  eyebrow = '3S Engineering & Design',
  description,
  imagePosition = 'center'
}: {
  title: string;
  image: string;
  eyebrow?: string;
  description?: string;
  imagePosition?: string;
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority unoptimized className="page-hero__image" style={{ objectPosition: imagePosition }} />
      <div className="page-hero__shade" />
      <div className="site-shell page-hero__content">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-hero__description">{description}</p>}
      </div>
    </section>
  );
}
