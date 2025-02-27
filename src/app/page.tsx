'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const maps = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Docs',
    href: '/home/docs',
  },
  {
    name: 'Blog',
    href: '/home/blog',
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {maps.map(map => (
        <Link href={map.href} key={map.href}>
          {map.name}
        </Link>
      ))}
    </div>
  );
}
