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
      <div className="mt-12 panel p-6 rounded-xl space-y-2">
        <h2 className="text-xl font-semibold mb-2">Registration & Contact Links</h2>
        <a href="https://forms.gle/UNzHDjYAMkYpoYPy6" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Contributor Form</a>
        <a href="https://forms.gle/PT1db4BeP4kQDNrG8" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Project Admin Form</a>
        <a href="https://forms.gle/PWRP2BM4DqGbqh6w5" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Mentor Form</a>
        <a href="https://forms.gle/2KYLfaDDVyCQA6GQA" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Community Partner Form</a>
        <a href="https://forms.gle/WSFhJUNJzGxQ2ZfG8" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Hiring Form</a>
        <a href="https://discord.gg/MSTNyRSPYW" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Discord</a>
        <a href="https://codesocial.tech" target="_blank" rel="noopener noreferrer" className="block text-[var(--muted)] hover:text-[var(--frost)]">Code Social Website</a>
        <a href="mailto:codesocialcommunity@gmail.com" className="block text-[var(--muted)] hover:text-[var(--frost)]">Email</a>
      </div>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
