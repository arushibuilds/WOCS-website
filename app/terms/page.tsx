import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of participation for Winter of Code Social.',
  alternates: { canonical: '/terms' },
};


export default function TermsOfService() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-[var(--frost)]">Terms of Service</h1>
      <p className="text-sm text-[var(--muted)] mb-6">Last updated: October 2026</p>
      <div className="space-y-6 text-lg">
        <ul className="list-disc pl-6 space-y-2">
          <li>By registering, you agree to follow the Code of Conduct.</li>
          <li>Contributions you make to projects remain open source under the project’s license.</li>
          <li>Organizers aren’t responsible for disputes between contributors/mentors but will mediate.</li>
          <li>Certificates are issued to participants who follow through until the end.</li>
          <li>Event is community-run, free to join, and subject to change based on capacity.</li>
          <li>By providing logos or names (sponsors/partners), you allow Code Social to display them on the site/socials.</li>
        </ul>
      </div>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
