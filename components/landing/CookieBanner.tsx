'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_KEY = 'cookkin_cookie_consent';

type ConsentState = 'accepted' | 'declined' | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = window.localStorage.getItem(CONSENT_KEY) as ConsentState;
      if (saved === 'accepted' || saved === 'declined') {
        setConsent(saved);
      }
    } catch {
      // Ignore storage access failures and default to showing the banner.
    }
  }, []);

  function handleChoice(nextConsent: Exclude<ConsentState, null>) {
    setConsent(nextConsent);
    try {
      window.localStorage.setItem(CONSENT_KEY, nextConsent);
    } catch {
      // Ignore storage access failures.
    }
  }

  if (!mounted || consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[var(--landing-border)] bg-[var(--landing-surface)]/95 p-5 shadow-[0_18px_60px_rgba(56,28,8,0.14)] backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B04123]">
              Cookie Notice
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-[15px]">
              We use cookies to keep CookKin working properly and to understand how visitors use the site.
              By choosing Accept, you agree to our use of cookies as described in our{' '}
              <Link href="/privacy-policy" className="font-medium text-[#B04123] hover:text-[#381C08] underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="font-medium text-[#B04123] hover:text-[#381C08] underline underline-offset-2">
                Terms &amp; Conditions
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:min-w-[220px] sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => handleChoice('declined')}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[var(--landing-border)] bg-[var(--background)] px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#B04123] hover:text-[#381C08]"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => handleChoice('accepted')}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#B04123] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#381C08]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
