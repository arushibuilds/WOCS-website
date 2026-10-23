import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, Cpu, Trophy, Award, Clock, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/links';
import { getLevelColor, keyDates, pendingPolicies, pointsSystem, TBA } from '@/lib/program';

export const metadata: Metadata = {
  title: 'Guidelines',
  description:
    'Contributor guidelines, AI-assisted contribution policy, leaderboard rules, and certificate information for Winter of Code Social.',
  alternates: { canonical: '/guidelines' },
};

const sections = [
  { id: 'contributor-guidelines', title: 'Contributor Guidelines', icon: BookOpen },
  { id: 'ai-policy', title: 'AI-Assisted Contribution Policy', icon: Cpu },
  { id: 'leaderboard-rules', title: 'Contribution & Leaderboard Rules', icon: Trophy },
  { id: 'certificates', title: 'Certificates & Recognition', icon: Award },
];

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <ArrowRight size={16} className="text-[var(--frost)] mt-1 flex-shrink-0" aria-hidden="true" />
          <span className="text-[var(--muted)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-3 scroll-mt-24">
      <h3 className="text-xl font-semibold">{title}</h3>
      {children}
    </div>
  );
}

/** Shown for rules the organizing team has not published yet. */
function Pending({ what }: { what: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-dashed border-[var(--frost)]/30 p-4">
      <Clock size={18} className="text-[var(--frost)] mt-0.5 flex-shrink-0" aria-hidden="true" />
      <p className="text-[var(--muted)]">
        <span className="text-[var(--frost)] font-semibold">{TBA}.</span> {what} will be published here
        before the coding period begins. Watch the announcements channel on Discord.
      </p>
    </div>
  );
}

const inline = 'text-[var(--frost)] hover:underline';

export default function Guidelines() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Program <span className="text-[var(--frost)]">Guidelines</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            How to contribute well, how AI tools fit in, how the leaderboard works, and how recognition is
            awarded. Please read these before you start.
          </p>
        </div>

        {/* On this page */}
        <nav aria-label="On this page" className="grid sm:grid-cols-2 gap-4 mb-16">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="panel p-4 rounded-lg hover:frost-glow transition-all duration-300 flex items-center gap-3"
            >
              <section.icon size={22} className="text-[var(--frost)]" aria-hidden="true" />
              <span className="font-medium">{section.title}</span>
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {/* 1. Contributor Guidelines */}
          <section id="contributor-guidelines" className="panel p-8 md:p-10 rounded-2xl space-y-8 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--frost)]">1. Contributor Guidelines</h2>

            <SubSection title="Finding an issue">
              <Bullets
                items={[
                  <>Start on the <Link href="/projects" className={inline}>Projects page</Link> and pick a project whose tech stack you know or want to learn.</>,
                  'Look for issues labelled “good first issue”, “beginner”, or “help wanted” if you are new.',
                  'Check that nobody is already assigned and that there is no open pull request for the issue.',
                  'Comment on the issue to ask to be assigned, briefly explaining how you plan to approach it. Wait for a maintainer to assign you before starting.',
                  'Work on one or two issues at a time. Release an issue you can no longer work on, so someone else can pick it up.',
                ]}
              />
            </SubSection>

            <SubSection title="Getting started with a repository">
              <Bullets
                items={[
                  'Read the README, CONTRIBUTING.md, and Code of Conduct of the project before you write any code.',
                  'Set up the project locally and make sure it builds and its tests pass before you make changes.',
                  'Follow the project’s coding style, commit conventions, and branch naming rules.',
                ]}
              />
            </SubSection>

            <SubSection title="Git and GitHub workflow">
              <ol className="space-y-3 list-decimal pl-6 text-[var(--muted)]">
                <li>Fork the repository and clone your fork.</li>
                <li>Create a new branch for each issue, e.g. <code className="text-[var(--frost)]">fix/123-navbar-overflow</code>. Never work directly on <code className="text-[var(--frost)]">main</code>.</li>
                <li>Make small, focused commits with clear messages.</li>
                <li>Keep your branch up to date with the upstream default branch.</li>
                <li>Push your branch and open a pull request against the upstream repository.</li>
              </ol>
              <p className="text-[var(--muted)]">
                New to this? Follow the step-by-step guides in{' '}
                <Link href="/resources#workflow" className={inline}>Resources</Link>.
              </p>
            </SubSection>

            <SubSection title="Contribution quality">
              <Bullets
                items={[
                  'Solve the issue you were assigned. Keep unrelated changes out of the pull request.',
                  'Test your change locally and add or update tests where the project has them.',
                  'Update documentation when your change affects how something is used.',
                  'Meaningful contributions matter more than the number of pull requests.',
                ]}
              />
            </SubSection>

            <SubSection title="Pull request requirements">
              <Bullets
                items={[
                  'Link the issue your PR resolves (for example, “Closes #123”).',
                  'Describe what you changed, why, and how you tested it. Add screenshots for UI changes.',
                  'Follow the project’s pull request template if it has one.',
                  'Make sure checks and tests pass, and resolve merge conflicts before requesting review.',
                ]}
              />
            </SubSection>

            <SubSection title="Collaboration etiquette">
              <Bullets
                items={[
                  'Be respectful and patient. Maintainers and mentors are volunteers.',
                  'Don’t ask to be assigned to issues someone else is already working on.',
                  'Don’t repeatedly ping maintainers for reviews or merges.',
                  <>Follow the <Link href="/code-of-conduct" className={inline}>Code of Conduct</Link> in every channel: GitHub, Discord, and sessions.</>,
                ]}
              />
            </SubSection>

            <SubSection id="communication" title="Communicating with maintainers">
              <Bullets
                items={[
                  'Keep discussion about an issue or PR on GitHub, in that issue or PR, so context stays in one place.',
                  'Use the project’s Discord channel for general questions about the project.',
                  'When you’re stuck, explain what you tried, what you expected, and what happened, including error messages.',
                  'Give maintainers reasonable time to respond before following up.',
                ]}
              />
            </SubSection>
          </section>

          {/* 2. AI-Assisted Contribution Policy */}
          <section id="ai-policy" className="panel p-8 md:p-10 rounded-2xl space-y-8 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--frost)]">2. AI-Assisted Contribution Policy</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              AI tools are part of modern software development, and WOCS does not prohibit them. Our goal is
              genuine learning and meaningful contributions. Use AI as a tool to help you learn and work, not as
              a replacement for understanding.
            </p>

            <SubSection title="Responsible use">
              <Bullets
                items={[
                  'You may use AI coding assistants to explore a codebase, understand errors, draft code, or write tests.',
                  'You are responsible for every line you submit, whether you wrote it or a tool did.',
                ]}
              />
            </SubSection>

            <SubSection title="Understand what you submit">
              <Bullets
                items={[
                  'Only submit code you can explain. Maintainers and mentors may ask you how your change works.',
                  'If you can’t answer questions about your pull request, it may be closed.',
                ]}
              />
            </SubSection>

            <SubSection title="Test and verify">
              <Bullets
                items={[
                  'Run and test AI-generated code before submitting it. Check it against the project’s conventions.',
                  'Check for invented APIs, outdated dependencies, security problems, and licensing issues.',
                ]}
              />
            </SubSection>

            <SubSection title="Be transparent">
              <Bullets
                items={[
                  'Mention significant AI assistance in your pull request description when a project asks for it.',
                  'Write issue comments and PR descriptions in your own words.',
                ]}
              />
            </SubSection>

            <SubSection title="No low-effort or mass-generated contributions">
              <Bullets
                items={[
                  'Do not submit bulk, auto-generated, or copy-pasted pull requests to collect points.',
                  'Low-effort contributions waste maintainers’ time. They can be closed without review and may not count towards the leaderboard.',
                ]}
              />
            </SubSection>

            <SubSection title="Respect project policies">
              <Bullets
                items={[
                  'Some projects restrict or forbid AI-generated contributions. A project’s own policy always takes precedence over this one.',
                  'If you’re unsure, ask the maintainers before using AI tools on their project.',
                ]}
              />
            </SubSection>

            <SubSection title="Learning over volume">
              <p className="text-[var(--muted)]">
                WOCS values collaboration and learning over the number of pull requests. A single well-understood,
                well-tested contribution is worth more to you and to the project than many shallow ones.
              </p>
            </SubSection>
          </section>

          {/* 3. Contribution & Leaderboard Rules */}
          <section id="leaderboard-rules" className="panel p-8 md:p-10 rounded-2xl space-y-8 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--frost)]">3. Contribution & Leaderboard Rules</h2>

            <SubSection title="What counts as an accepted contribution">
              <p className="text-[var(--muted)]">
                Points are awarded for merged pull requests to participating WOCS projects during the coding period
                ({keyDates.codingPeriod}). Pull requests that are closed without being merged do not earn points.
              </p>
            </SubSection>

            <SubSection title="How points are earned">
              <p className="text-[var(--muted)]">
                Points are scaled by issue difficulty:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {pointsSystem.map((tier) => (
                  <div key={tier.level} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor(tier.level)}`}>{tier.level}</span>
                      <span className="font-semibold text-[var(--frost)]">{tier.points}</span>
                    </div>
                    <p className="text-[var(--muted)]">{tier.description}</p>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="How quality is considered">
              <p className="text-[var(--muted)]">
                The leaderboard rewards meaningful work, so
                read the <a href="#ai-policy" className={inline}>AI-assisted contribution policy</a> and the
                contribution quality guidelines above.
              </p>
            </SubSection>

            <SubSection title="Spam submissions">
              <p className="text-[var(--muted)]">
                Spam pull requests don’t earn points.{' '}
                <strong className="text-[var(--text)]">Points can be deducted if you’re reported for spam submissions.</strong>
              </p>
            </SubSection>

            <SubSection id="report" title="Reporting someone or an issue">
              <div className="flex items-start gap-3 rounded-lg border border-[var(--frost)]/30 p-4">
                <Mail size={18} className="text-[var(--frost)] mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="space-y-2 text-[var(--muted)]">
                  <p>
                    Want to report someone, or running into any of these issues: spam pull requests, missing or
                    wrong points, or a disagreement about a contribution? Just email us at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className={inline}>{CONTACT_EMAIL}</a>.
                  </p>
                  <p>Include your GitHub username and links to the pull requests or issues involved.</p>
                </div>
              </div>
            </SubSection>
          </section>

          {/* 4. Certificates & Recognition */}
          <section id="certificates" className="panel p-8 md:p-10 rounded-2xl space-y-8 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--frost)]">4. Certificates & Recognition</h2>

            <SubSection title="Types of recognition">
              <Bullets
                items={[
                  'Certificates for participants.',
                  'Top contributors announced at the end of the program.',
                  'Swags and goodies for top contributors, where available.',
                ]}
              />
            </SubSection>

            <SubSection title="When">
              <p className="text-[var(--muted)]">
                Certificates are distributed and winners announced on <strong>{keyDates.certificates}</strong>.
              </p>
            </SubSection>

            <SubSection title="Eligibility and how to qualify">
              {pendingPolicies.certificateEligibility ? (
                <p className="text-[var(--muted)]">{pendingPolicies.certificateEligibility}</p>
              ) : (
                <Pending what="Certificate eligibility criteria" />
              )}
            </SubSection>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/faqs" className="btn-secondary inline-block">Read the FAQs</Link>
        </div>
      </div>
    </div>
  );
}
