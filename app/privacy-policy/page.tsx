import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[var(--frost)]">Privacy Policy</h1>
      <div className="space-y-6 text-lg">
        <p>We collect names, emails, GitHub/LinkedIn, and Discord usernames only for event coordination.</p>
        <p>Data is used for communication, certificates, and project assignments.</p>
        <p>We don’t share your info with third parties, except for sponsor shoutouts with your consent.</p>
        <p>All forms are via Google Forms, so subject to Google’s privacy.</p>
        <p>You can request data deletion anytime by contacting us at <a href="mailto:codesocialcommunity@gmail.com" className="underline text-[var(--frost)]">codesocialcommunity@gmail.com</a>.</p>
      </div>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
