import Link from 'next/link';
import { CODE_SOCIAL_URL, DISCORD_INVITE } from '@/lib/links';
import { BookOpen, Linkedin, Users, ExternalLink, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { getLevelColor } from '@/lib/program';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Git and GitHub guides, first-contribution walkthroughs, templates, and curated learning resources for open source contributors.',
  alternates: { canonical: '/resources' },
};

interface Guide {
  title: string;
  desc: string;
  level: 'Beginner' | 'Intermediate';
  links: { label: string; href: string }[];
}

// Practical guides for each step of a WOCS contribution, grouped by stage.
const guideCategories: { id: string; title: string; intro: string; guides: Guide[] }[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    intro: 'New to Git, GitHub, or open source? Start here.',
    guides: [
      {
        title: 'Git & GitHub Basics',
        desc: 'Install Git, set it up, and learn repositories, commits, and branches by doing.',
        level: 'Beginner',
        links: [
          { label: 'Set up Git', href: 'https://docs.github.com/en/get-started/git-basics/set-up-git' },
          { label: 'GitHub Hello World', href: 'https://docs.github.com/en/get-started/start-your-journey/hello-world' },
          { label: 'Learn Git Branching (interactive)', href: 'https://learngitbranching.js.org/' },
        ],
      },
      {
        title: 'Your First Open Source Contribution',
        desc: 'A hands-on practice repo that walks you through a complete first pull request, plus a guide on how open source works.',
        level: 'Beginner',
        links: [
          { label: 'First Contributions', href: 'https://github.com/firstcontributions/first-contributions' },
          { label: 'How to Contribute to Open Source', href: 'https://opensource.guide/how-to-contribute/' },
        ],
      },
      {
        title: 'Finding Beginner-Friendly Issues',
        desc: 'Look for “good first issue” and “help wanted” labels. During WOCS, start with the beginner-friendly projects on our Projects page.',
        level: 'Beginner',
        links: [
          { label: 'About issue labels', href: 'https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels' },
          { label: 'Good First Issue', href: 'https://goodfirstissue.dev/' },
        ],
      },
    ],
  },
  {
    id: 'workflow',
    title: 'Contribution Workflow',
    intro: 'The fork, branch, and pull request flow you’ll use for every WOCS contribution.',
    guides: [
      {
        title: 'Fork and Clone a Repository',
        desc: 'Make your own copy of a project on GitHub, download it to your machine, and keep it in sync with the original.',
        level: 'Beginner',
        links: [
          { label: 'Fork a repo', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo' },
          { label: 'Clone a repo', href: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository' },
          { label: 'Sync a fork', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork' },
        ],
      },
      {
        title: 'Create a Branch',
        desc: 'Work on each issue in its own branch so your changes stay isolated and easy to review.',
        level: 'Beginner',
        links: [
          { label: 'Branching basics (Pro Git)', href: 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging' },
        ],
      },
      {
        title: 'Submit a Pull Request',
        desc: 'Open a PR from your fork, link the issue it resolves, and describe what you changed and how you tested it.',
        level: 'Beginner',
        links: [
          { label: 'Create a PR from a fork', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork' },
        ],
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Working with Maintainers',
    intro: 'Good communication gets your work reviewed and merged faster.',
    guides: [
      {
        title: 'Handling Code Review Feedback',
        desc: 'Understand reviews, apply suggested changes, and push updates to your open pull request.',
        level: 'Intermediate',
        links: [
          { label: 'About PR reviews', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews' },
          { label: 'Incorporate feedback', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request' },
        ],
      },
      {
        title: 'Communicating with Maintainers',
        desc: 'How to ask good questions, give context, and stay respectful of maintainers’ time.',
        level: 'Beginner',
        links: [
          { label: 'Communicating effectively', href: 'https://opensource.guide/how-to-contribute/#communicating-effectively' },
          { label: 'WOCS communication guidelines', href: '/guidelines#communication' },
        ],
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    intro: 'Stuck? These cover the Git problems contributors run into most often.',
    guides: [
      {
        title: 'Common Git & GitHub Problems',
        desc: 'Undo a bad commit, recover lost work, fix a commit on the wrong branch, and set aside uncommitted changes.',
        level: 'Intermediate',
        links: [
          { label: 'Oh Shit, Git!?!', href: 'https://ohshitgit.com/' },
          { label: 'git stash', href: 'https://git-scm.com/docs/git-stash' },
        ],
      },
      {
        title: 'Resolving Merge Conflicts',
        desc: 'Fix conflicts when your branch and the upstream branch changed the same lines.',
        level: 'Intermediate',
        links: [
          { label: 'Resolve a merge conflict', href: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line' },
          { label: 'Pro Git book', href: 'https://git-scm.com/book/en/v2' },
        ],
      },
    ],
  },
];


const resources = [
  {
    title: 'Quick Start Guide',
    icon: BookOpen,
    link: '/guide-to-open-source.pdf',
    desc: 'How to contribute to open source, GitHub basics, PRs, issues.',
    cta: 'Download Guide',
    external: false,
    download: 'CodeSocial-Guide-to-Open-Source.pdf',
  },
  {
    title: 'LinkedIn Templates',
    icon: Linkedin,
    link: '/linkedin-templates.pdf',
    desc: 'LinkedIn templates to share your progress.',
    cta: 'Download Templates',
    external: false,
    download: 'CodeSocial-LinkedIn-Templates.pdf',
  },
  {
    title: 'Community',
    icon: Users,
    link: DISCORD_INVITE,
    desc: 'Join our Discord community.',
    cta: 'Join Discord',
    external: true,
  }
  

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
            ) : res.download ? (
              <a href={res.link} download={res.download} className="btn-primary w-full">{res.cta}</a>
            ) : (
              <a href={res.link} className="btn-secondary w-full cursor-not-allowed opacity-60">{res.cta}</a>
            )}
          </div>
        ))}
      </div>



      {/* WOCS Contributor Guides */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-2 text-center text-[var(--frost)]">Contributor Guides</h2>
        <p className="text-[var(--muted)] text-center max-w-2xl mx-auto mb-8">
          Step-by-step help for every stage of a WOCS contribution, from your first commit to your merged pull request.
        </p>

        <nav aria-label="Guide categories" className="flex flex-wrap justify-center gap-2 mb-10">
          {guideCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="px-4 py-2 rounded-lg text-sm panel hover:frost-glow transition-all duration-300">
              {category.title}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {guideCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
              <p className="text-[var(--muted)] mb-6">{category.intro}</p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.guides.map((guide) => (
                  <div key={guide.title} className="panel rounded-xl p-6 flex flex-col shadow-md">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="text-lg font-semibold">{guide.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(guide.level)}`}>
                        {guide.level}
                      </span>
                    </div>
                    <p className="text-[var(--muted)] mb-4 flex-1">{guide.desc}</p>
                    <ul className="space-y-2">
                      {guide.links.map((link) => (
                        <li key={link.href}>
                          {link.href.startsWith('/') ? (
                            <Link href={link.href} className="text-[var(--frost)] hover:underline">
                              {link.label}<ArrowRight size={14} className="inline-block ml-1 -mt-0.5" aria-hidden="true" />
                            </Link>
                          ) : (
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--frost)] hover:underline">
                              {link.label}
                              <ExternalLink size={14} aria-hidden="true" />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Curated Learning Resources */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--frost)]">Curated Learning Resources</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">FreeCodeCamp</h3>
            <p className="text-[var(--muted)] mb-4">Interactive coding tutorials in web dev, data science, AI & ML.</p>
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit FreeCodeCamp</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">CS50x (Harvard)</h3>
            <p className="text-[var(--muted)] mb-4">Legendary intro to computer science, free online.</p>
            <a href="https://cs50.harvard.edu/x/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit CS50x</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">MDN Web Docs</h3>
            <p className="text-[var(--muted)] mb-4">The go-to reference for HTML, CSS, and JavaScript.</p>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit MDN Web Docs</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">The Odin Project</h3>
            <p className="text-[var(--muted)] mb-4">Full free web dev curriculum, project-based.</p>
            <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit The Odin Project</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">GeeksforGeeks</h3>
            <p className="text-[var(--muted)] mb-4">Practice & learn about algorithms, DS, and coding interviews.</p>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit GeeksforGeeks</a>
          </div>
          <div className="panel rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">W3Schools</h3>
            <p className="text-[var(--muted)] mb-4">Beginner-friendly tutorials for web technologies.</p>
            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Visit W3Schools</a>
          </div>
        </div>
      </div>

            <div className="mt-8 text-center">
        <span className="text-lg text-[var(--muted)]">Looking for more resources?&nbsp;
          <a href={CODE_SOCIAL_URL} target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)] font-semibold">Check Code Social!</a>
        </span>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="btn-secondary inline-block">Back to Home</Link>
      </div>
    </div>
  );
}
