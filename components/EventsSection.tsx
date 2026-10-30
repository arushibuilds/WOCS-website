'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Clock, MapPin, Ticket, PlayCircle } from 'lucide-react';
import { events, type ProgramEvent } from '@/lib/program';

const CALENDAR_EMBED_URL =
  'https://calendar.google.com/calendar/embed?src=9365dc46515ee05fecadd380002a268dc2ed3e53b18cd761ddd514516c7e0d0c%40group.calendar.google.com&ctz=America%2FChicago';

function EventCard({ event, past }: { event: ProgramEvent; past: boolean }) {
  return (
    <div className={`panel rounded-2xl p-6 md:p-10 grid gap-8 items-center ${event.poster ? 'md:grid-cols-2' : ''}`}>
      {event.poster && (
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={event.poster.src}
            alt={event.poster.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[var(--panel)] text-[var(--frost)] border border-[var(--frost)]/30">
          <CalendarDays size={16} aria-hidden="true" />
          {past ? 'Past Session' : 'Upcoming Session'}
        </div>

        <div className="space-y-2">
          <p className="text-sm text-[var(--muted)]">Winter of Code Social</p>
          <h3 className="text-3xl md:text-4xl font-bold">{event.title}</h3>
          {event.host && (
            <p className="text-lg text-[var(--muted)]">
              with{' '}
              {event.host.url ? (
                <a
                  href={event.host.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--frost)] hover:underline"
                >
                  {event.host.name}
                </a>
              ) : (
                <span className="text-[var(--frost)]">{event.host.name}</span>
              )}
            </p>
          )}
        </div>

        <div className="space-y-2 text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[var(--frost)]" aria-hidden="true" />
            <span>{event.dateTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[var(--frost)]" aria-hidden="true" />
            <span>{event.location ?? 'Online'}</span>
          </div>
        </div>

        <p className="text-[var(--muted)] leading-relaxed">{event.description}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          {!past && event.registrationUrl && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Ticket size={16} aria-hidden="true" />
              Register / Join
            </a>
          )}
          {!past && event.calendarUrl && (
            <a
              href={event.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <CalendarDays size={16} aria-hidden="true" />
              Add to Calendar
            </a>
          )}
          {past && event.recordingUrl && (
            <a
              href={event.recordingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <PlayCircle size={16} aria-hidden="true" />
              Watch Recording
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  // Upcoming vs. past depends on today's date; compute it in the browser
  // because the site is statically exported.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);

  const isPast = (event: ProgramEvent) => now !== null && new Date(event.startsAt).getTime() < now;
  const upcoming = events.filter((event) => !isPast(event));
  const past = events.filter(isPast);

  return (
    <section id="sessions" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {events.length === 0 ? (
          <div className="panel rounded-2xl p-4 md:p-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Sessions & <span className="text-[var(--frost)]">Workshops</span>
            </h2>
            <div className="rounded-xl overflow-hidden bg-white">
              <iframe
                src={CALENDAR_EMBED_URL}
                title="WOCS sessions and workshops calendar"
                className="w-full h-[600px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Sessions & <span className="text-[var(--frost)]">Workshops</span>
            </h2>
            {upcoming.map((event) => (
              <EventCard key={event.title + event.startsAt} event={event} past={false} />
            ))}
            {past.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold text-center pt-4">Past Sessions</h3>
                {past.map((event) => (
                  <EventCard key={event.title + event.startsAt} event={event} past />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
