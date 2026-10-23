import Link from 'next/link';
import { MessageCircle, GitPullRequest, AlertTriangle, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, DISCORD_INVITE } from '@/lib/links';

const paths = [
  {
    icon: MessageCircle,
    title: 'Technical questions',
    description: 'Ask in the WOCS help channels on Discord. Mentors and fellow contributors are there to help.',
    action: { label: 'Open Discord', href: DISCORD_INVITE, external: true },
  },
  {
    icon: GitPullRequest,
    title: 'Contact a project maintainer',
    description: 'Comment on the GitHub issue or pull request you are working on, or ask in the project’s channel on Discord.',
    action: { label: 'Communication tips', href: '/guidelines#communication', external: false },
  },
  {
    icon: AlertTriangle,
    title: 'Report a problem',
    description: 'Something broken on the site, a wrong leaderboard entry, or an issue with a project? Let the organizing team know on Discord or by email.',
    action: { label: 'Email the team', href: `mailto:${CONTACT_EMAIL}`, external: true },
  },
  {
    icon: ShieldCheck,
    title: 'Report a Code of Conduct violation',
    description: 'Report privately by emailing the organizing team. Reports are handled confidentially by community moderators.',
    action: { label: 'Read the Code of Conduct', href: '/code-of-conduct', external: false },
  },
  {
    icon: Mail,
    title: 'Contact the organizing team',
    description: `For partnerships, registrations, or anything else, email ${CONTACT_EMAIL}.`,
    action: { label: 'Email us', href: `mailto:${CONTACT_EMAIL}`, external: true },
  },
];

export default function SupportPathway() {
  return (
    <section id="support" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20" aria-labelledby="support-heading">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 id="support-heading" className="text-3xl md:text-4xl font-bold">
            Need <span className="text-[var(--frost)]">Help?</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Here’s where to go for each kind of question, so you get an answer from the right people quickly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div key={path.title} className="panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex flex-col">
              <path.icon size={28} className="text-[var(--frost)] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-[var(--muted)] mb-4 flex-1">{path.description}</p>
              {path.action.external ? (
                <a
                  href={path.action.href}
                  target={path.action.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-[var(--frost)] font-medium hover:underline"
                >
                  {path.action.label}<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
                </a>
              ) : (
                <Link href={path.action.href} className="text-[var(--frost)] font-medium hover:underline">
                  {path.action.label}<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
