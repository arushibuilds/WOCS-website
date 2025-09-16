import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[var(--frost)]">Code of Conduct</h1>
      <div className="space-y-6 text-lg">
        <p>We are committed to providing a welcoming and inclusive environment for everyone. By participating, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be respectful, inclusive, and collaborative.</li>
          <li>No harassment, discrimination, or toxic behavior.</li>
          <li>Respect project maintainers’ and mentors’ decisions.</li>
          <li>No spamming or self-promotion outside allowed areas.</li>
          <li>Report issues to our email (<a href="mailto:codesocialcommunity@gmail.com" className="underline text-[var(--frost)]">codesocialcommunity@gmail.com</a>) or Discord mod team (<a href="https://discord.gg/MSTNyRSPYW" target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)]">Join Discord</a>).</li>
        </ul>
        <p>Consequences for violations: warnings, then removal from the event.</p>
        <p>We adapt the <a href="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)]">Contributor Covenant</a> as our standard.</p>
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
