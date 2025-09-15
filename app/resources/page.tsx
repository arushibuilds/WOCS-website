import Link from 'next/link';
import { BookOpen, FileText, Linkedin, Video, Users, Gift } from 'lucide-react';

const resources = [
  {
    title: 'Quick Start Guide',
    icon: BookOpen,
    link: 'https://docs.github.com/en/get-started/quickstart',
    desc: 'How to contribute to open source: GitHub basics, PRs, issues.',
    cta: 'GitHub Quickstart',
    external: true,
  },
  {
    title: 'PDF Kit',
    icon: FileText,
    link: '#',
    desc: 'Best practices for open source collaboration.',
    cta: 'Download PDF Kit (coming soon)',
    external: false,
  },
  {
    title: 'LinkedIn Templates',
    icon: Linkedin,
    link: '#',
    desc: 'Share your progress with our LinkedIn templates.',
    cta: 'View Templates (coming soon)',
    external: false,
  },
  {
    title: 'Event Recordings',
    icon: Video,
    link: 'https://www.youtube.com/@codesocial',
    desc: 'Webinars and workshops recordings.',
    cta: 'YouTube Channel',
    external: true,
  },
  {
    title: 'Community',
    icon: Users,
    link: 'https://discord.gg/yourdiscord',
    desc: 'Join our Discord & YouTube community.',
    cta: 'Join Discord',
    external: true,
  },
  {
    title: 'Swag & Guidelines',
    icon: Gift,
    link: '#',
    desc: 'Download swag/guideline PDFs (coming soon).',
    cta: 'Download',
    external: false,
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-[var(--frost)]">Resources</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((res, i) => (
          <div key={i} className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <res.icon size={40} className="mb-4 text-[var(--frost)]" />
            <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
            <p className="text-[var(--muted)] mb-4 min-h-[48px]">{res.desc}</p>
            {res.external ? (
              <a href={res.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">{res.cta}</a>
            ) : (
              <a href={res.link} className="btn-secondary w-full cursor-not-allowed opacity-60">{res.cta}</a>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="btn-secondary inline-block">Back to Home</Link>
      </div>
    </div>
  );
}
