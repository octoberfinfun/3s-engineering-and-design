import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={footer ? 'brand brand--footer' : 'brand'} aria-label="3S Engineering & Design home">
      <Image
        src={assets.logo}
        alt="3S Engineering & Design"
        width={185}
        height={96}
        priority={!footer}
        className="brand__image"
        unoptimized
      />
    </Link>
  );
}
