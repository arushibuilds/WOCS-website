import Link from 'next/link';

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Anyone – students, professionals, beginners, and advanced developers are all welcome!'
  },
  {
    q: 'Do I need prior open-source experience?',
    a: 'No, guidance is provided throughout the event.'
  },
  {
    q: 'What’s the timeline?',
    a: 'Contributor registration opens Oct 10. Coding period is Nov 1 – Jan 31.'
  },
  {
    q: 'What are the rewards?',
    a: 'Certificates, swags, mentorship, and possible goodies for top contributors.'
  },
  {
    q: 'How will the leaderboard work?',
    a: 'Points for contributions/PRs, updated weekly.'
  },
    {
      q: 'How do I find/join a project?',
      a: 'Browse the Projects page and connect with mentors/admins via Discord (https://discord.gg/MSTNyRSPYW).'
    },
  {
    q: 'How do mentors help?',
    a: 'Mentors review PRs, run sessions, and guide contributors.'
  },
  {
    q: 'Is it free?',
    a: 'Yes, it is fully community-driven and free to join.'
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[var(--frost)]">FAQs</h1>
      <div className="space-y-6 text-lg">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mb-1">{faq.q}</h2>
            <p className="text-[var(--muted)]">{faq.a}</p>
          </div>
        ))}
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
