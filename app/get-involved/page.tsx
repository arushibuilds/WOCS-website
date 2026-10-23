"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  Code, Users, Award, ExternalLink, ChevronDown, FolderGit2, GraduationCap, Briefcase, Globe,
  Lightbulb, Handshake, Network, Megaphone, Sprout, LayoutList,
} from 'lucide-react';
import { DISCORD_INVITE, FORM_CONTRIBUTOR, FORM_MENTOR, FORM_PROJECT } from '@/lib/links';

interface Role {
  id: string;
  name: string;
  icon: typeof Code;
  title: string;
  description: string;
  highlights: string[];
  formUrl: string;
  cta: string;
  benefitsHeading: string;
  benefits: { icon: typeof Code; title: string; text: string }[];
  steps: { title: string; text: string }[];
  /** Optional essentials, shown collapsed under "Before You Begin". */
  beforeYouBegin?: string[];
  help: { text: string; guidelines: { label: string; href: string } };
}

const tabs: Role[] = [
  {
    id: 'contributors',
    name: 'Contributors',
    icon: Code,
    title: 'Start Your Open Source Journey',
    description:
      'Whether it’s your first pull request or your fiftieth, WOCS is a place to learn, collaborate, and build real projects with developers around the world.',
    highlights: ['Open to everyone', 'Beginner-friendly', 'Learn at your own pace'],
    formUrl: FORM_CONTRIBUTOR,
    cta: 'Register as Contributor',
    benefitsHeading: 'Why Participate?',
    benefits: [
      { icon: FolderGit2, title: 'Real Projects', text: 'Gain hands-on open-source experience.' },
      { icon: GraduationCap, title: 'Mentorship', text: 'Learn from experienced developers.' },
      { icon: Briefcase, title: 'Build Your Portfolio', text: 'Showcase your contributions on GitHub.' },
      { icon: Globe, title: 'Find Your People', text: 'Connect with a global community.' },
    ],
    steps: [
      { title: 'Register and Join Discord', text: 'Sign up for WOCS and connect with the community.' },
      { title: 'Find a Project', text: 'Explore projects, choose an issue, and connect with maintainers.' },
      { title: 'Build and Contribute', text: 'Submit your pull request, receive feedback, and grow your skills.' },
    ],
    beforeYouBegin: [
      'You need a GitHub account to contribute.',
      'No previous open-source experience is required.',
      'Read the project guidelines before contributing.',
      'Follow the WOCS Code of Conduct.',
      'Submit contributions you understand and have tested.',
    ],
    help: {
      text: 'Find everything you need to know about contributions, AI tools, and getting started.',
      guidelines: { label: 'Contributor Guidelines', href: '/guidelines#contributor-guidelines' },
    },
  },
  {
    id: 'mentors',
    name: 'Mentors',
    icon: Users,
    title: 'Guide the Next Generation',
    description:
      'Help contributors find their way, review their work, and ship with confidence. You just need to care enough to help someone ship.',
    highlights: ['A few hours each week', 'Share what you know', 'Grow as a leader'],
    formUrl: FORM_MENTOR,
    cta: 'Register as Mentor',
    benefitsHeading: 'Why Mentor?',
    benefits: [
      { icon: Lightbulb, title: 'Share Your Knowledge', text: 'Pass on what you’ve learned.' },
      { icon: Sprout, title: 'Build Leadership Skills', text: 'Guide others and grow as a leader.' },
      { icon: Handshake, title: 'Give Back', text: 'Support the next wave of open source.' },
      { icon: Network, title: 'Expand Your Network', text: 'Meet developers from around the world.' },
    ],
    steps: [
      { title: 'Register and Join Discord', text: 'Sign up as a mentor. The organizing team will reach out with next steps.' },
      { title: 'Meet Your Contributors', text: 'Connect with contributors and projects before the coding period starts.' },
      { title: 'Guide and Review', text: 'Answer questions, review pull requests, and help run sessions.' },
    ],
    help: {
      text: 'Questions about mentoring? Read the program guidelines or reach the organizing team on Discord.',
      guidelines: { label: 'Program Guidelines', href: '/guidelines' },
    },
  },
  {
    id: 'project-admins',
    name: 'Project Admins',
    icon: Award,
    title: 'Lead Innovative Projects',
    description:
      'Have a project that could use more hands? Submit it to WOCS and get contributors to help you build something amazing.',
    highlights: ['More contributors', 'More visibility', 'Grow a community'],
    formUrl: FORM_PROJECT,
    cta: 'Register as Project Admin',
    benefitsHeading: 'Why Submit a Project?',
    benefits: [
      { icon: Users, title: 'Get Contributors', text: 'Bring new developers to your project.' },
      { icon: Globe, title: 'Build a Community', text: 'Grow a community around your work.' },
      { icon: LayoutList, title: 'Lead the Work', text: 'Gain project management experience.' },
      { icon: Megaphone, title: 'Increase Visibility', text: 'Get your project in front of more people.' },
    ],
    steps: [
      { title: 'Submit Your Project', text: 'Register your repository and join the Discord community.' },
      { title: 'Get Reviewed and Listed', text: 'The organizing team reviews your project. Accepted projects appear on the Projects page.' },
      { title: 'Maintain and Merge', text: 'Label and assign issues, review pull requests, and support your contributors.' },
    ],
    beforeYouBegin: [
      'You need a public GitHub repository that you own or maintain.',
      'Keep a clear README and contribution guide.',
      'Have open issues ready, including some beginner-friendly ones.',
      'Let contributors know your project’s policy on AI-assisted contributions, if you have one.',
    ],
    help: {
      text: 'Questions about submitting or maintaining your project? Read the program guidelines or reach the organizing team on Discord.',
      guidelines: { label: 'Program Guidelines', href: '/guidelines' },
    },
  },
];

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('contributors');

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get <span className="text-[var(--frost)]">Involved</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Choose your role in Winter of Code Social. Every contribution, big or small, helps someone move forward.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Choose your role">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls="role-panel"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[var(--frost)] text-[var(--bg)] shadow-lg'
                  : 'panel hover:frost-glow'
              }`}
            >
              <tab.icon size={20} aria-hidden="true" />
              {tab.name}
            </button>
          ))}
        </div>

        <div id="role-panel" role="tabpanel" aria-labelledby={`tab-${currentTab.id}`} className="space-y-12">
          {/* 1. Introduction */}
          <div className="panel p-8 md:p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <currentTab.icon size={32} className="text-[var(--frost)]" aria-hidden="true" />
                  <h2 className="text-3xl font-bold">{currentTab.title}</h2>
                </div>

                <p className="text-lg text-[var(--muted)] leading-relaxed">
                  {currentTab.description}
                </p>

                <ul className="flex flex-wrap gap-3">
                  {currentTab.highlights.map((highlight) => (
                    <li key={highlight} className="stat-pill text-[var(--text)]">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={currentTab.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                  >
                    {currentTab.cta}
                    <ExternalLink size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Visual Element */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative overflow-hidden p-8">
                  <div className="w-64 h-64 panel rounded-full flex items-center justify-center frost-glow">
                    <currentTab.icon size={80} className="text-[var(--frost)]" aria-hidden="true" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--frost)]/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--frost)]/30 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[var(--frost)]/40 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Why participate */}
          <section aria-labelledby="benefits-heading" className="space-y-6">
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-center">
              {currentTab.benefitsHeading}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {currentTab.benefits.map((benefit) => (
                <div key={benefit.title} className="panel p-5 rounded-lg hover:frost-glow transition-all duration-300">
                  <benefit.icon size={24} className="text-[var(--frost)] mb-3" aria-hidden="true" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. How it works */}
          <section aria-labelledby="steps-heading" className="space-y-6">
            <h2 id="steps-heading" className="text-2xl md:text-3xl font-bold text-center">
              How It <span className="text-[var(--frost)]">Works</span>
            </h2>
            <ol className="grid md:grid-cols-3 gap-4">
              {currentTab.steps.map((step, index) => (
                <li key={step.title} className="panel p-6 rounded-lg flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold bg-[var(--frost)]/20 text-[var(--frost)] flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Before you begin (collapsed by default) */}
          {currentTab.beforeYouBegin && (
            <details className="group panel rounded-lg max-w-3xl mx-auto">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-lg hover:text-[var(--frost)] transition-colors duration-200">
                <span className="font-semibold">Before You Begin</span>
                <ChevronDown size={18} className="text-[var(--frost)] transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <ul className="px-5 pb-5 space-y-2 list-disc pl-10 text-[var(--muted)]">
                {currentTab.beforeYouBegin.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          )}

          {/* 4. Questions or need help */}
          <section className="text-center space-y-4" aria-labelledby="help-heading">
            <h2 id="help-heading" className="text-2xl font-bold">Questions or Need Help?</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">{currentTab.help.text}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href={currentTab.help.guidelines.href} className="btn-secondary inline-flex items-center gap-2">
                {currentTab.help.guidelines.label}
              </Link>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Join Discord
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
