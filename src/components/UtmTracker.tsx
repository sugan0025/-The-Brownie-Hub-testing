'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  ref?: string;
  referrer?: string;
  timestamp?: number;
}

const STORAGE_KEY = 'tbh_utm_params';
const SESSION_KEY = 'tbh_utm_session';
const COOKIE_NAME = 'tbh_utm';

export function getPersistedUtm(): UtmData {
  if (typeof window === 'undefined') return {};
  try {
    const fromSession = sessionStorage.getItem(SESSION_KEY);
    if (fromSession) return JSON.parse(fromSession);

    const fromLocal = localStorage.getItem(STORAGE_KEY);
    if (fromLocal) return JSON.parse(fromLocal);
  } catch (e) {
    // ignore
  }
  return {};
}

export function saveUtmData(data: UtmData) {
  if (typeof window === 'undefined') return;
  try {
    const payload = JSON.stringify({ ...data, timestamp: Date.now() });
    sessionStorage.setItem(SESSION_KEY, payload);
    localStorage.setItem(STORAGE_KEY, payload);
    // 30-day first-party attribution cookie
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(payload)}; path=/; max-age=2592000; SameSite=Lax`;
  } catch (e) {
    // ignore
  }
}

export default function UtmTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Capture UTM params from current URL search params
    const currentParams: Record<string, string> = {};
    const relevantKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'fbclid',
      'ref',
      'referrer',
    ];

    let hasNewUtm = false;
    relevantKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        currentParams[key] = val;
        hasNewUtm = true;
      }
    });

    if (hasNewUtm) {
      saveUtmData(currentParams as UtmData);
    } else {
      // If no UTM in current URL, check if we have stored UTMs
      const existing = getPersistedUtm();
      if (Object.keys(existing).length > 0) {
        // Stored UTM exists for this session
      }
    }

    // 2. Global Internal Link Enhancer: Preserve UTM query string across page transitions
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Skip external links, tel:, mailto:, and plain hash on current page
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      const activeUtm = getPersistedUtm();
      const utmEntries = Object.entries(activeUtm).filter(([k, v]) => k.startsWith('utm_') && typeof v === 'string');

      if (utmEntries.length === 0) return;

      // If clicking an internal link like /menu or /product/... or /#bestsellers
      try {
        const url = new URL(href, window.location.origin);
        let modified = false;

        utmEntries.forEach(([key, val]) => {
          if (!url.searchParams.has(key)) {
            url.searchParams.set(key, val as string);
            modified = true;
          }
        });

        if (modified) {
          const newHref = url.pathname + url.search + url.hash;
          target.setAttribute('href', newHref);
        }
      } catch (err) {
        // ignore
      }
    };

    document.addEventListener('click', handleLinkClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
    };
  }, [pathname, searchParams]);

  return null;
}
