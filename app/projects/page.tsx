import Link from 'next/link';
import { CalendarDays, ExternalLink } from 'lucide-react';
import { FORM_PROJECT } from '@/lib/links';
import { projects } from '@/lib/projects';
import { keyDates } from '@/lib/program';
import ProjectExplorer from '@/components/ProjectExplorer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse, search and filter open source projects for Winter of Code Social 2026, going live November 1, 2026.',
  alternates: { canonical: '/projects' },
};


export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Open Source <span className="text-[var(--frost)]">Projects</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Jump into real-world coding with projects that welcome everyone, from first-time contributors to seasoned developers. Whether you want to fix a bug, add a feature, or build something entirely new, there’s a place for you here.
          </p>

          {/* Submit Project CTA */}
          <div className="pt-4">
            <a
              href={FORM_PROJECT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit a Project
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {projects.length > 0 ? (
          <ProjectExplorer projects={projects} />
        ) : (
          /* Coming Soon Section */
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Projects Coming <span className="text-[var(--frost)]">Soon</span>
              </h2>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                We’re curating an exciting lineup of new projects for WOCS 2026.
                Projects will go live on <strong>{keyDates.projectsLive}</strong>.
                Stay tuned for amazing opportunities to contribute!
              </p>
              <div className="pt-4">
                <p className="text-lg text-[var(--frost)] font-semibold inline-flex items-center gap-2">
                  <CalendarDays size={20} aria-hidden="true" /> Launching {keyDates.projectsLive}
                </p>
              </div>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                While you wait, get set up with our{' '}
                <Link href="/resources" className="text-[var(--frost)] hover:underline">Git &amp; GitHub resources</Link>{' '}
                and read the{' '}
                <Link href="/guidelines" className="text-[var(--frost)] hover:underline">contributor guidelines</Link>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
