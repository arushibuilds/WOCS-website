import { ExternalLink } from 'lucide-react';
import { FORM_PROJECT } from '@/lib/links';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open source projects for Winter of Code Social 2026, going live November 1, 2026.',
  alternates: { canonical: '/projects' },
};


// TODO: when projects go live, add a project list (search/filter) here.
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

        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center py-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects Coming <span className="text-[var(--frost)]">Soon</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              We’re curating an exciting lineup of new projects for WOCS 2026.
              Projects will go live on <strong>November 1st, 2026</strong>.
              Stay tuned for amazing opportunities to contribute!
            </p>
            <div className="pt-4">
              <p className="text-lg text-[var(--frost)] font-semibold">
                <span aria-hidden="true">📅</span> Launching November 1, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
