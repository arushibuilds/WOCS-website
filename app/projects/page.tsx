"use client";
import { useState } from 'react';
import { Search, Filter, ExternalLink, Star, GitFork } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  repository: string;
  stars: number;
  forks: number;
  mentors: number;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'React Component Library',
    organization: 'OpenUI',
    description: 'Build accessible, customizable React components for modern web applications.',
    tags: ['React', 'TypeScript', 'Accessibility'],
    difficulty: 'Intermediate',
    repository: 'https://github.com/example/react-components',
    stars: 1234,
    forks: 567,
    mentors: 3
  },
  {
    id: '2',
    title: 'Machine Learning Toolkit',
    organization: 'AI Commons',
    description: 'Develop Python tools for data preprocessing and model evaluation.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    difficulty: 'Advanced',
    repository: 'https://github.com/example/ml-toolkit',
    stars: 2341,
    forks: 892,
    mentors: 5
  },
  {
    id: '3',
    title: 'Documentation Website',
    organization: 'DevDocs',
    description: 'Create beautiful documentation sites with modern design and great UX.',
    tags: ['Next.js', 'Documentation', 'Design'],
    difficulty: 'Beginner',
    repository: 'https://github.com/example/doc-site',
    stars: 456,
    forks: 123,
    mentors: 2
  },
];

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const allTags = ['React', 'TypeScript', 'Python', 'Next.js', 'Machine Learning', 'Documentation', 'Accessibility', 'Data Science', 'Design'];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => project.tags.includes(tag));

    return matchesSearch && matchesDifficulty && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-[var(--muted)] bg-[var(--muted)]/20';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Open Source <span className="text-[var(--frost)]">Projects</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Discover amazing projects to contribute to. From beginner-friendly to advanced challenges.
          </p>
          
          {/* Submit Project CTA */}
          <div className="pt-4">
            <a
              href={process.env.NEXT_PUBLIC_FORM_PROJECT || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit a Project
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 panel rounded-lg focus:outline-none focus:border-[var(--frost)] transition-colors duration-200"
            />
          </div>

          {/* Filter Toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="panel p-6 rounded-lg space-y-6">
              {/* Difficulty Filter */}
              <div>
                <h3 className="font-semibold mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        selectedDifficulty === difficulty
                          ? 'bg-[var(--frost)] text-[var(--bg)]'
                          : 'bg-[var(--panel)] border border-[var(--muted)] hover:border-[var(--frost)]'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h3 className="font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-[var(--frost)] text-[var(--bg)]'
                          : 'bg-[var(--panel)] border border-[var(--muted)] hover:border-[var(--frost)]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8 text-[var(--muted)]">
          Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="panel p-6 rounded-lg hover:frost-glow transition-all duration-300">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-[var(--frost)] text-sm">{project.organization}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--muted)] mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
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

              {/* Stats */}
              <div className="flex justify-between items-center mb-4 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    {project.forks}
                  </div>
                </div>
                <div className="text-[var(--frost)]">
                  {project.mentors} mentor{project.mentors !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Repository
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-[var(--muted)] mb-6">
              Try adjusting your search criteria or filters to find more projects.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('All');
                setSelectedTags([]);
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}