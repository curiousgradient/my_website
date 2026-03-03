'use client';

import React, { useState } from 'react';
import { assetPath } from '@/lib/basePath';

const logos = [
  { name: 'Adobe', path: '/images/logos/adobe_logo.png', alt: 'Adobe' },
  { name: 'UCSD', path: '/images/logos/ucsd_logo.png', alt: 'UC San Diego' },
  { name: 'McGill', path: '/images/logos/mcgill_logo.png', alt: 'McGill University' },
  { name: 'BITS Pilani', path: '/images/logos/bits_pilani_logo.png', alt: 'BITS Pilani' },
];

function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div
      className="flex items-center justify-center h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
      title={logo.alt}
    >
      {showFallback ? (
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{logo.alt}</span>
      ) : (
        <img
          src={assetPath(logo.path)}
          alt={logo.alt}
          className="h-full w-auto object-contain max-w-[120px]"
          onError={() => setShowFallback(true)}
        />
      )}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 py-2">
      {logos.map((logo) => (
        <LogoItem key={logo.name} logo={logo} />
      ))}
    </div>
  );
}
