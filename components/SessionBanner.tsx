'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, ExternalLink } from 'lucide-react';
import { events } from '@/lib/program';

/**
 * Small notice for the next upcoming session, shown at the top of a page.
 * Hides itself once there are no upcoming sessions in lib/program.ts.
 */
export default function SessionBanner() {
  // "Upcoming" depends on today's date; check it in the browser because the
  // site is statically exported (same approach as EventsSection).
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);

  const next = [...events]
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
    .find((event) => now === null || new Date(event.startsAt).getTime() >= now);

  if (!next) return null;

  return (
    <div className="mb-10 flex justify-center">
      <div className="panel rounded-xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <CalendarDays size={20} className="text-[var(--frost)] flex-shrink-0" aria-hidden="true" />
        <p className="text-sm sm:text-base">
          <span className="font-semibold">Upcoming session:</span> {next.title}
          <span className="text-[var(--muted)]"> · {next.dateTime}</span>
        </p>
        <div className="flex items-center gap-3 text-sm flex-shrink-0">
          {next.registrationUrl && (
            <a
              href={next.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--frost)] underline underline-offset-4"
            >
              Register
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          <Link href="/#sessions" className="text-[var(--muted)] hover:text-[var(--frost)] underline underline-offset-4">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
