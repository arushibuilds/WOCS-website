import { ExternalLink } from 'lucide-react';
import { FORM_PROJECT } from '@/lib/links';

// Places to find ideas and open data for building a project.
// Add more sources here; each one becomes a clickable card in the box.
const ideaSources = [
  {
    name: 'Mozilla Data Collective',
    url: 'https://mozilladatacollective.com/datasets',
    note: 'Open speech and language datasets in many languages. Licenses vary, so check each one.',
    cta: 'Browse datasets',
  },
];

export default function ProjectIdeas({ className = '' }: { className?: string }) {
  return (
    <section id="project-ideas" className={`panel rounded-xl p-6 md:p-8 scroll-mt-24 ${className}`}>
      <h2 className="text-xl font-semibold">Looking for project ideas?</h2>
      <p className="text-[var(--muted)] mt-2">
        Check out these. Use the open datasets below to build your own project, then submit it to
        Winter of Code Social so contributors can join in.
      </p>

      <ul className="mt-6 space-y-4">
        {ideaSources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border border-[var(--frost)]/30 bg-[var(--bg)] p-4 hover:border-[var(--frost)] hover:frost-glow transition-all duration-200"
            >
              <span className="flex-1">
                <span className="block font-semibold group-hover:text-[var(--frost)] transition-colors">
                  {source.name}
                </span>
                <span className="block text-sm text-[var(--muted)] mt-1">{source.note}</span>
              </span>
              <span className="btn-primary inline-flex items-center justify-center gap-2 flex-shrink-0">
                {source.cta}
                <ExternalLink size={16} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm text-[var(--muted)] flex-1">Built something with one of these datasets?</p>
        <a
          href={FORM_PROJECT}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center gap-2"
        >
          Submit your project
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
