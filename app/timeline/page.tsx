import TimelineList from '@/components/TimelineList';
import EventsSection from '@/components/EventsSection';
import { keyDates } from '@/lib/program';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Key dates for Winter of Code Social: registration, project announcements, coding period, leaderboard launch, certificates, and upcoming sessions.',
  alternates: { canonical: '/timeline' },
};

const importantDates = [
  { label: 'Registrations', value: keyDates.registration },
  { label: 'Projects Announced', value: keyDates.projectsLive },
  { label: 'Coding Period', value: keyDates.codingPeriod },
  { label: 'Leaderboard Live', value: keyDates.leaderboardLive },
  { label: 'Certificates & Winners', value: keyDates.certificates },
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Event <span className="text-[var(--frost)]">Timeline</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Track the journey from registration to rewards. Here’s what to expect throughout Winter of Code Social.
          </p>
        </div>

        <TimelineList />

        {/* Important Dates Summary */}
        <div className="mt-16 panel p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Important Dates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {importantDates.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="font-semibold text-[var(--frost)]">{item.label}</div>
                <div className="text-[var(--muted)]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming sessions & workshops */}
      <div className="mt-8">
        <EventsSection />
      </div>
    </div>
  );
}
