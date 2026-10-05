"use client";
import { useEffect, useState } from 'react';
import { Calendar, Users, Code, Award, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    date: 'October 1, 2026',
    start: '2026-10-01',
    title: 'Registration Opens',
    description: 'Contributors, mentors, and project admins can start registering.',
    icon: Users,
  },
  {
    date: 'November 1, 2026',
    start: '2026-11-01',
    title: 'Coding Period Begins',
    description: 'The official coding period starts and projects go live. Let the collaboration begin!',
    icon: Code,
  },
  {
    date: 'November 5, 2026',
    start: '2026-11-05',
    title: 'Leaderboard Goes Live',
    description: 'Track contributions and see how you rank across the community.',
    icon: Trophy,
  },
  {
    date: 'January 31, 2027',
    start: '2027-01-31',
    title: 'Coding Period Ends',
    description: 'Final submissions and project evaluations',
    icon: Calendar,
  },
  {
    date: 'February 10, 2027',
    start: '2027-02-10',
    title: 'Certificates & Winners Announced',
    description: 'Recognition and certificates distributed to participants, and top contributors announced',
    icon: Award,
  },
];

type Status = 'completed' | 'active' | 'upcoming';

// An event is "completed" once the next one has started, "active" once it has
// started itself, and "upcoming" before that.
function getStatus(index: number, now: number): Status {
  const startsAt = (i: number) => new Date(timelineEvents[i].start + 'T00:00:00').getTime();
  if (now < startsAt(index)) return 'upcoming';
  const next = timelineEvents[index + 1];
  if (next && now >= startsAt(index + 1)) return 'completed';
  return index === timelineEvents.length - 1 ? 'completed' : 'active';
}

export default function TimelineList() {
  // Status depends on today's date, so compute it in the browser: the site is
  // statically exported and would otherwise show the status from build time.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);
  const events = timelineEvents.map((event, index) => ({
    ...event,
    status: now === null ? 'upcoming' : getStatus(index, now),
  }));

  return (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--frost)] opacity-30"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 shrink-0 rounded-full flex items-center justify-center ${
                  event.status === 'completed' ? 'bg-[var(--frost)] text-[var(--bg)]' :
                  event.status === 'active' ? 'bg-[var(--panel)] border-2 border-[var(--frost)] text-[var(--frost)]' :
                  'bg-[var(--panel)] border border-[var(--muted)] text-[var(--muted)]'
                }`}>
                  <event.icon size={24} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 panel p-4 sm:p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold text-[var(--text)]">
                      {event.title}
                    </h2>
                    <div className={`text-sm px-3 py-1 rounded-full ${
                      event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      event.status === 'active' ? 'bg-[var(--frost)]/20 text-[var(--frost)]' :
                      'bg-[var(--muted)]/20 text-[var(--muted)]'
                    }`}>
                      {event.date}
                    </div>
                  </div>
                  <p className="text-[var(--muted)]">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
