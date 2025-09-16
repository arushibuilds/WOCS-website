"use client";
import { useState } from 'react';
import { Code, Users, Award, Building, ExternalLink, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'contributors',
    name: 'Contributors',
    icon: Code,
    title: 'Start Your Open Source Journey',
    description: 'Build real things with real people. Pick a project, grab an issue, and ship your first PR. Mentors and Project admins are here to help.',
    benefits: [
      'Work on real-world projects',
      'Learn from experienced mentors',
      'Build your GitHub portfolio',
      'Connect with the global developer community'
    ],
  formUrl: 'https://forms.gle/UNzHDjYAMkYpoYPy6'
  },
  {
    id: 'mentors',
    name: 'Mentors',
    icon: Users,
    title: 'Guide the Next Generation',
    description: 'Share your expertise and help shape the future of open source. Guide builders for a few hours each week. You jus need to care enough to help someone ship.',
    benefits: [
      'Share your knowledge and experience',
      'Build leadership skills',
      'Give back to the community',
      'Expand your professional network'
    ],
  formUrl: 'https://forms.gle/PWRP2BM4DqGbqh6w5'
  },
  {
    id: 'project-admins',
    name: 'Project Admins',
    icon: Award,
    title: 'Lead Innovative Projects',
    description: 'Have an amazing idea? Submit your project and get contributors to help you build something amazing.',
    benefits: [
      'Get contributors for your project',
      'Build a community around your project',
      'Gain project management experience',
      'Increase project visibility'
    ],
  formUrl: 'https://forms.gle/PT1db4BeP4kQDNrG8'
  }
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[var(--frost)] text-[var(--bg)] shadow-lg'
                  : 'panel hover:frost-glow'
              }`}
            >
              <tab.icon size={20} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="panel p-8 md:p-12 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <currentTab.icon size={32} className="text-[var(--frost)]" />
                <h2 className="text-3xl font-bold">{currentTab.title}</h2>
              </div>
              
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                {currentTab.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What You'll Get:</h3>
                <ul className="space-y-3">
                  {currentTab.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight size={16} className="text-[var(--frost)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--muted)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={currentTab.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Register as {currentTab.name.slice(0, -1)}
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 panel rounded-full flex items-center justify-center frost-glow">
                  <currentTab.icon size={80} className="text-[var(--frost)]" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--frost)]/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--frost)]/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[var(--frost)]/40 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="mt-16 text-center">
          <div className="panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-[varz(--muted)] mb-6 max-w-2xl mx-auto">
              Help us organize and run Winter of Code Social. Join our team of volunteers and make this event even better.
            </p>
              <a
                href="https://discord.gg/MSTNyRSPYW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Join the Team
                <ExternalLink size={16} />
              </a>
          </div>
        </div>

      
      </div>
    </div>
  );
}