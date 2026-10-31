'use client';
import { useMemo, useState } from 'react';
import { Search, ExternalLink, BookOpen, Users } from 'lucide-react';
import type { Project } from '@/lib/projects';

const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'text-green-400 bg-green-400/20';
    case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
    case 'Advanced': return 'text-red-400 bg-red-400/20';
    default: return 'text-[var(--muted)] bg-[var(--muted)]/20';
  }
};

const githubUrl = (handle: string) => `https://github.com/${handle}`;

function People({ label, people }: { label: string; people?: { name: string; github?: string }[] }) {
  if (!people || people.length === 0) return null;
  return (
    <div className="flex items-start gap-2 text-sm text-[var(--muted)]">
      <Users size={14} className="text-[var(--frost)] mt-0.5 flex-shrink-0" aria-hidden="true" />
      <span>
        {label}:{' '}
        {people.map((person, i) => (
          <span key={person.name}>
            {i > 0 && ', '}
            {person.github ? (
              <a href={githubUrl(person.github)} target="_blank" rel="noopener noreferrer" className="text-[var(--frost)] hover:underline">
                {person.name}
              </a>
            ) : (
              person.name
            )}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState<(typeof DIFFICULTIES)[number]>('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b)),
    [projects]
  );

  const filtered = projects.filter((project) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !term ||
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term);
    const matchesDifficulty = difficulty === 'All' || project.difficulty === difficulty;
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
    return matchesSearch && matchesDifficulty && matchesTags;
  });

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

  const clearFilters = () => {
    setSearchTerm('');
    setDifficulty('All');
    setSelectedTags([]);
  };

  return (
    <>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted)]" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search projects..."
            aria-label="Search projects by name or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 panel rounded-lg text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--frost)] transition-colors duration-200"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by difficulty">
          {DIFFICULTIES.map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              aria-pressed={difficulty === level}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                difficulty === level ? 'bg-[var(--frost)] text-[var(--bg)] shadow-lg' : 'panel hover:frost-glow'
              }`}
            >
              {level === 'Beginner' ? 'Beginner-friendly' : level}
            </button>
          ))}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 max-w-4xl mx-auto" role="group" aria-label="Filter by tech stack">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                aria-pressed={selectedTags.includes(tag)}
                className={`px-2 py-1 text-xs rounded border transition-colors duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-[var(--frost)] text-[var(--bg)] border-[var(--frost)]'
                    : 'bg-[var(--bg)] text-[var(--frost)] border-[var(--frost)]/30 hover:border-[var(--frost)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-[var(--muted)]" aria-live="polite">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div key={project.id} className="panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-start gap-3 mb-4">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>

            <p className="text-[var(--muted)] mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[var(--bg)] text-[var(--frost)] text-xs rounded border border-[var(--frost)]/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-1 mb-4 flex-1">
              <People label="Mentors" people={project.mentors} />
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Repository
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              {project.contributingGuide && (
                <a
                  href={project.contributingGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-[var(--frost)] hover:underline"
                >
                  <BookOpen size={14} aria-hidden="true" />
                  Contribution guidelines
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No projects found</h2>
          <p className="text-[var(--muted)] mb-6">
            Try adjusting your search or filters to find more projects.
          </p>
          <button onClick={clearFilters} className="btn-primary">
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
