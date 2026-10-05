import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/links';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Winter of Code Social collects and uses your data.',
  alternates: { canonical: '/privacy-policy' },
};


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-[var(--frost)]">Privacy Policy</h1>
      <p className="text-sm text-[var(--muted)] mb-6">Last updated: October 2026</p>
      <div className="space-y-6 text-lg">
        <p>We collect names, emails, GitHub/LinkedIn, and Discord usernames only for event coordination.</p>
        <p>Data is used for communication, certificates, and project assignments.</p>
        <p>We don’t share your info with third parties, except for sponsor shoutouts with your consent.</p>
        <p>We use Google Analytics to understand how the website is used (for example, pages visited and general location). It uses cookies and collects anonymized usage data; we don’t use it to identify individual visitors.</p>
        <p>All forms are via Google Forms, so subject to Google’s privacy.</p>
        <p>You can request data deletion anytime by contacting us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-[var(--frost)]">{CONTACT_EMAIL}</a>.</p>
      </div>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
