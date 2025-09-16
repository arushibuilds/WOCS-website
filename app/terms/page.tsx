import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[var(--frost)]">Terms of Service</h1>
      <div className="space-y-6 text-lg">
        <ul className="list-disc pl-6 space-y-2">
          <li>By registering, you agree to follow the Code of Conduct.</li>
          <li>Contributions you make to projects remain open source under the project’s license.</li>
          <li>Organizers aren’t responsible for disputes between contributors/mentors but will mediate.</li>
          <li>Certificates are issued to participants who follow through until the end.</li>
          <li>Event is community-run, free to join, and subject to change based on capacity.</li>
          <li>By uploading logos or names (sponsors/partners), you allow Code Social to display them on the site/socials.</li>
        </ul>
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
