import Link from 'next/link';
import type { Metadata } from 'next';
import SupportPathway from '@/components/SupportPathway';
import { keyDates, pendingPolicies } from '@/lib/program';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about Winter of Code Social, plus where to get help.',
  alternates: { canonical: '/faqs' },
};

const inline = 'text-[var(--frost)] hover:underline';

const faqGroups: { title: string; faqs: { q: string; a: React.ReactNode }[] }[] = [
  {
    title: 'About WOCS',
    faqs: [
      {
        q: 'Is it free?',
        a: 'Yes, it is fully community-driven and free to join.'
      },
      {
        q: 'Who can participate?',
        a: 'Anyone – students, professionals, beginners, and advanced developers are all welcome!'
      },
      {
        q: 'Can beginners participate?',
        a: <>Yes. WOCS welcomes first-time contributors. Look for beginner-friendly projects and issues, and start with our <Link href="/resources" className={inline}>Git &amp; GitHub resources</Link>.</>
      },
      {
        q: 'Do I need prior open-source experience?',
        a: 'No, guidance is provided throughout the event.'
      },
      {
        q: 'What’s the timeline?',
        a: <>Registrations are open. Projects are announced on {keyDates.projectsLive}, and the coding period runs {keyDates.codingPeriod}. See the <Link href="/timeline" className={inline}>full timeline</Link>.</>
      },
    ],
  },
  {
    title: 'Projects & Contributing',
    faqs: [
      {
        q: 'How do I find/join a project?',
        a: <>Browse the <Link href="/projects" className={inline}>Projects page</Link> (live from {keyDates.projectsLive}) and connect with mentors/admins via Discord.</>
      },
      {
        q: 'Can I contribute to multiple projects?',
        a: 'Yes. The leaderboard counts your merged pull requests across all participating projects. Focus on quality, and only take on issues you have time to finish.'
      },
      {
        q: 'How do I get an issue assigned?',
        a: <>Comment on the issue asking to work on it and briefly explain your approach, then wait for a maintainer to assign it to you before you start. Some projects have their own process, so check their contribution guide. See the <Link href="/guidelines#contributor-guidelines" className={inline}>contributor guidelines</Link>.</>
      },
      {
        q: 'Can I use AI tools?',
        a: <>Yes, responsibly. You must understand, test, and be able to explain everything you submit, and follow each project’s own AI policy. Mass-generated or low-effort pull requests aren’t accepted. Read the <Link href="/guidelines#ai-policy" className={inline}>AI-assisted contribution policy</Link>.</>
      },
      {
        q: 'What happens if my PR is rejected?',
        a: 'Only merged pull requests earn points, but a rejected PR is still a chance to learn. Read the maintainer’s feedback, ask questions if something is unclear, and either revise your PR or pick up a different issue.'
      },
      {
        q: 'How do mentors help?',
        a: 'Mentors review PRs, run sessions, and guide contributors.'
      },
    ],
  },
  {
    title: 'Leaderboard & Recognition',
    faqs: [
      {
        q: 'How are contributions evaluated?',
        a: <>Points are awarded for merged pull requests, scaled by issue difficulty. Your points and rank update within about 10–15 minutes after your pull request is merged. See the <Link href="/guidelines#leaderboard-rules" className={inline}>leaderboard rules</Link>.</>
      },
      {
        q: 'How will the leaderboard work?',
        a: <>Points for contributions/PRs. Your points and rank update within about 10–15 minutes after your pull request is merged. The <Link href="/leaderboard" className={inline}>leaderboard</Link> goes live on {keyDates.leaderboardLive}.</>
      },
      {
        q: 'What are the rewards?',
        a: 'Certificates, swags, mentorship, and possible goodies for top contributors.'
      },
      {
        q: 'How are certificates awarded?',
        a: pendingPolicies.certificateEligibility
          ? <>{pendingPolicies.certificateEligibility} Certificates are distributed on {keyDates.certificates}.</>
          : <>Certificates are distributed on {keyDates.certificates}. Eligibility criteria will be published in the <Link href="/guidelines#certificates" className={inline}>guidelines</Link> before the coding period begins.</>
      },
    ],
  },
  {
    title: 'Help & Support',
    faqs: [
      {
        q: 'Where should I ask questions?',
        a: <>Ask in the WOCS channels on Discord. For questions about a specific issue or pull request, comment on it on GitHub. See <a href="#support" className={inline}>all support options</a> below.</>
      },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      <div className="py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[var(--frost)]">FAQs</h1>
        <div className="space-y-12 text-lg">
          {faqGroups.map((group) => (
            <section key={group.title} className="space-y-6">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              {group.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-xl font-semibold mb-1">{faq.q}</h3>
                  <p className="text-[var(--muted)]">{faq.a}</p>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>

      <SupportPathway />

      <div className="px-4 max-w-2xl mx-auto text-center">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </>
  );
}
