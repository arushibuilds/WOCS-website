import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/links';

const steps = [
  {
    title: 'Register for WOCS',
    description: 'Sign up as a contributor, mentor, or project admin using the registration form for your role.',
    link: { href: '/get-involved', label: 'Choose your role' },
  },
  {
    title: 'Join the Discord community',
    description: 'Announcements, help channels, and project discussions all happen on the Code Social Discord.',
    link: { href: DISCORD_INVITE, label: 'Join Discord', external: true },
  },
  {
    title: 'Explore open source projects',
    description: 'Browse participating projects, filter by tech stack, and find one that matches your skills.',
    link: { href: '/projects', label: 'Browse projects' },
  },
  {
    title: 'Find a suitable GitHub issue',
    description: 'Pick an open issue, ask the maintainers to assign it to you, and start working on it.',
    link: { href: '/guidelines#contributor-guidelines', label: 'How to find issues' },
  },
  {
    title: 'Submit pull requests',
    description: 'Open a pull request, respond to review feedback from maintainers, and iterate until it is merged.',
    link: { href: '/resources#workflow', label: 'PR workflow guide' },
  },
  {
    title: 'Learn, collaborate, get recognised',
    description: 'Merged contributions count on the leaderboard, and participants receive certificates at the end of the program.',
    link: { href: '/leaderboard', label: 'See the leaderboard' },
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="how-it-works-heading">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold">
            How WOCS <span className="text-[var(--frost)]">Works</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
            Winter of Code Social is a free, community-run open source program by Code Social. Students,
            professionals, first-timers and experienced developers spend the winter contributing to real
            projects with help from mentors and maintainers.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const external = 'external' in step.link && step.link.external;
            return (
              <li key={step.title} className="panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex flex-col">
                <span className="inline-flex items-center justify-center w-9 h-9 mb-4 rounded-full text-sm font-bold bg-[var(--frost)]/20 text-[var(--frost)] flex-shrink-0">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--muted)] mb-4 flex-1">{step.description}</p>
                {external ? (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--frost)] font-medium hover:underline"
                  >
                    {step.link.label}<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={step.link.href} className="text-[var(--frost)] font-medium hover:underline">
                    {step.link.label}<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
