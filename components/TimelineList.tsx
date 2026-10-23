"use client";
import { useEffect, useState } from 'react';
import { Calendar, Users, Code, Award, Trophy, FolderOpen } from 'lucide-react';
import { milestones, TBA, type Milestone } from '@/lib/program';

const icons = { users: Users, code: Code, trophy: Trophy, calendar: Calendar, award: Award, folder: FolderOpen };

// Undated (to-be-announced) milestones never affect the status of the others.
const dated = milestones.filter((m): m is Milestone & { start: string } => m.start !== null);

type Status = 'completed' | 'active' | 'upcoming';

// An event is "completed" once the next one has started, "active" once it has
// started itself, and "upcoming" before that.
function getStatus(milestone: Milestone, now: number): Status {
  const index = dated.findIndex((m) => m === milestone);
  if (index === -1) return 'upcoming';
  const startsAt = (i: number) => new Date(dated[i].start + 'T00:00:00').getTime();
  if (now < startsAt(index)) return 'upcoming';
  const next = dated[index + 1];
  if (next && now >= startsAt(index + 1)) return 'completed';
  return index === dated.length - 1 ? 'completed' : 'active';
}

export default function TimelineList() {
  // Status depends on today's date, so compute it in the browser: the site is
  // statically exported and would otherwise show the status from build time.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);
  const events = milestones.map((event) => ({
    ...event,
    Icon: icons[event.icon],
    status: now === null ? 'upcoming' : getStatus(event, now),
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
                  <event.Icon size={24} aria-hidden="true" />
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
                      {event.date ?? TBA}
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
