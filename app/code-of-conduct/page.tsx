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
          <li>Report issues to our email or Discord mod team.</li>
        </ul>
        <p>Consequences for violations: warnings, then removal from the event.</p>
        <p>We adapt the <a href="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)]">Contributor Covenant</a> as our standard.</p>
      </div>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
