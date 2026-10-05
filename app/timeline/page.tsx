import TimelineList from '@/components/TimelineList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Key dates for Winter of Code Social: registration, coding period, leaderboard launch and certificates.',
  alternates: { canonical: '/timeline' },
};


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
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Registration Phase</div>
              <div className="text-[var(--muted)]">October 1 - December 31, 2026</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Coding Period</div>
              <div className="text-[var(--muted)]">November 1, 2026 - January 31, 2027</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[var(--frost)]">Certificates & Winners</div>
              <div className="text-[var(--muted)]">February 10, 2027</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}