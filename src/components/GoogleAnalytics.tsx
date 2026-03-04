'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Sends page_view to GA4 on client-side route changes.
 * Uses a short delay so Next.js has time to update <title> before we read it.
 * Skips the initial mount (the gtag snippet in layout already fires the first page_view).
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!gaId || typeof window === 'undefined' || !window.gtag) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, gaId]);

  return null;
}
